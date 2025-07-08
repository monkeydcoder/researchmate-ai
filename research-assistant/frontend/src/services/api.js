import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor to properly handle canceled requests
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the request was cancelled, handle it silently without rejecting the promise
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
      return Promise.resolve({ data: { canceled: true } });
    }
    
    // For other errors, reject the promise as usual
    return Promise.reject(error);
  }
);

export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/api/health');
    return response.data;
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
};

export const generateText = async (prompt, model = 'llama3.2') => {
  try {
    const response = await apiClient.post('/api/generate', { prompt, model });
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Generate text error:', error);
    }
    throw error;
  }
};

export const summarizePaper = async (text, model = 'llama3.2') => {
  try {
    const response = await apiClient.post('/api/summarize', { text, model });
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Paper summarization error:', error);
    }
    throw error;
  }
};

export const extractInsights = async (text, model = 'llama3.2') => {
  try {
    const response = await apiClient.post('/api/extract-insights', { text, model });
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Extract insights error:', error);
    }
    throw error;
  }
};

export const generateCitation = async (paperDetails, format, model = 'llama3.2') => {
  try {
    const response = await apiClient.post('/api/generate-citation', { paperDetails, format, model });
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Citation generation error:', error);
    }
    throw error;
  }
};

export const generateResearchQuestions = async (topic, fieldOfStudy, additionalContext, difficulty, model = 'llama3.2') => {
  try {
    const response = await apiClient.post('/api/generate-research-questions', { 
      topic, 
      fieldOfStudy, 
      additionalContext, 
      difficulty, 
      model 
    });
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Research questions generation error:', error);
    }
    throw error;
  }
};

export const generateLiteratureReview = async (paperEntries, researchTopic, reviewType, model = 'llama3.2') => {
  try {
    const response = await apiClient.post('/api/generate-literature-review', { 
      paperEntries, 
      researchTopic, 
      reviewType, 
      model 
    });
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Literature review generation error:', error);
    }
    throw error;
  }
};

export const searchWeb = async (query, model = 'llama3.2') => {
  try {
    const response = await apiClient.post('/api/web-search', { query, model });
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error('Web search error:', error);
    }
    throw error;
  }
};

// Fix eslint warning by creating a variable before exporting
const apiService = {
  checkHealth,
  generateText,
  summarizePaper,
  extractInsights,
  generateCitation,
  generateResearchQuestions,
  generateLiteratureReview,
  searchWeb,
};

export default apiService; 