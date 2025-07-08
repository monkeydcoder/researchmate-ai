const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // Increase payload limit

// Global error handler for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Keep the process running instead of crashing
});

// Global error handler for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Keep the process running instead of crashing
});

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Express error handler:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

// Add Axios error handling
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error.message);
    return Promise.reject(error);
  }
);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Ollama model interaction endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt, model = 'llama3.2' } = req.body;
    
    // Call Ollama API running locally
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model,
      prompt,
      stream: false
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error calling Ollama API:', error.message);
    res.status(500).json({ 
      error: 'Failed to generate response', 
      details: error.message 
    });
  }
});

// Research paper summarization endpoint
app.post('/api/summarize', async (req, res) => {
  try {
    const { text, model = 'llama3.2' } = req.body;
    
    const prompt = `Please summarize the following research paper text in a concise way, highlighting the main contributions, methodologies, and findings:

${text}

Summary:`;
    
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model,
      prompt,
      stream: false
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error calling Ollama API:', error.message);
    res.status(500).json({ 
      error: 'Failed to summarize paper', 
      details: error.message 
    });
  }
});

// Extract key insights endpoint
app.post('/api/extract-insights', async (req, res) => {
  try {
    const { text, model = 'llama3.2' } = req.body;
    
    const prompt = `Please extract the most important insights, key findings, and contributions from the following research paper text. Format your response as bullet points:

${text}

Key Insights:`;
    
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model,
      prompt,
      stream: false
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error calling Ollama API:', error.message);
    res.status(500).json({ 
      error: 'Failed to extract insights', 
      details: error.message 
    });
  }
});

// Citation generator endpoint
app.post('/api/generate-citation', async (req, res) => {
  try {
    const { paperDetails, format = 'apa', model = 'llama3.2' } = req.body;
    
    const { title, authors, journal, year, doi, url } = paperDetails;
    
    const prompt = `Please generate a citation for the following paper in ${format.toUpperCase()} format:

Title: ${title}
Authors: ${authors || 'N/A'}
Journal/Conference: ${journal || 'N/A'}
Year: ${year || 'N/A'}
DOI: ${doi || 'N/A'}
URL: ${url || 'N/A'}

Format the citation properly according to ${format.toUpperCase()} style guidelines. If some information is missing, adapt the citation format appropriately.`;
    
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model,
      prompt,
      stream: false
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error calling Ollama API:', error.message);
    res.status(500).json({ 
      error: 'Failed to generate citation', 
      details: error.message 
    });
  }
});

// Research questions generator endpoint
app.post('/api/generate-research-questions', async (req, res) => {
  try {
    const { 
      topic, 
      fieldOfStudy = '', 
      additionalContext = '',
      difficulty = 'medium',
      model = 'llama3.2' 
    } = req.body;
    
    if (!topic || topic.trim() === '') {
      return res.status(400).json({ error: 'Topic is required' });
    }
    
    const prompt = `Please generate thoughtful and focused research questions for the following topic:

Topic: ${topic}
Field of Study: ${fieldOfStudy || 'Not specified'}
Additional Context: ${additionalContext || 'None provided'}
Difficulty Level: ${difficulty}

Generate 5-7 research questions that are:
1. Clear, specific, and focused
2. Researchable with available methodologies
3. Significant and relevant to the field
4. Appropriate for the ${difficulty} difficulty level
5. Connected to existing literature but addressing gaps

Format your response as a numbered list with brief explanations of why each question is valuable.`;
    
    console.log('Sending research questions request to Ollama API...');
    
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model,
      prompt,
      stream: false
    });
    
    console.log('Research questions response received');
    res.json(response.data);
  } catch (error) {
    console.error('Error generating research questions:', error.message);
    
    // Check if Ollama API is running
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return res.status(503).json({ 
        error: 'Ollama API is not available. Please make sure it is running on port 11434',
        details: error.message 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to generate research questions', 
      details: error.message 
    });
  }
});

// Literature review helper endpoint
app.post('/api/generate-literature-review', async (req, res) => {
  try {
    const { 
      paperEntries, 
      researchTopic,
      reviewType = 'thematic',
      model = 'llama3.2' 
    } = req.body;
    
    if (!paperEntries || !Array.isArray(paperEntries)) {
      return res.status(400).json({ 
        error: 'Paper entries must be an array' 
      });
    }
    
    if (!researchTopic || researchTopic.trim() === '') {
      return res.status(400).json({ 
        error: 'Research topic is required' 
      });
    }
    
    // Filter out empty paper entries
    const validPapers = paperEntries.filter(paper => paper && paper.title && paper.title.trim() !== '');
    
    if (validPapers.length === 0) {
      return res.status(400).json({ 
        error: 'No valid paper entries provided' 
      });
    }
    
    // Format the papers for the prompt
    let papersText = '';
    validPapers.forEach((paper, index) => {
      papersText += `Paper ${index + 1}:
Title: ${paper.title}
Authors: ${paper.authors || 'Not specified'}
Year: ${paper.year || 'Not specified'}
Summary: ${paper.summary || 'Not provided'}
Key Findings: ${paper.key_findings || 'Not provided'}

`;
    });
    
    const prompt = `Please help me create a ${reviewType} literature review on the research topic: "${researchTopic}".

Here are the papers I want to include:

${papersText}

Based on these papers, create a coherent literature review that:
1. Organizes the content in a ${reviewType} manner
2. Identifies patterns, themes, and relationships between the papers
3. Highlights gaps, contradictions, and areas for further research
4. Relates the papers to my research topic
5. Includes a brief introduction and conclusion

Format the literature review with appropriate headings and structure.`;
    
    console.log('Sending literature review request to Ollama API...');
    
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model,
      prompt,
      stream: false
    });
    
    console.log('Literature review response received');
    res.json(response.data);
  } catch (error) {
    console.error('Error generating literature review:', error.message);
    
    // Check if Ollama API is running
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return res.status(503).json({ 
        error: 'Ollama API is not available. Please make sure it is running on port 11434',
        details: error.message 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to generate literature review', 
      details: error.message 
    });
  }
});

// Web search integration (placeholder - would need actual API integration)
app.post('/api/web-search', async (req, res) => {
  try {
    const { query, model = 'llama3.2' } = req.body;
    
    const prompt = `The user is asking about research in this area: "${query}". 
    Please provide information about recent papers and developments in this research area.`;
    
    const response = await axios.post('http://127.0.0.1:11434/api/generate', {
      model,
      prompt,
      stream: false
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error calling Ollama API:', error.message);
    res.status(500).json({ 
      error: 'Failed to search', 
      details: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 