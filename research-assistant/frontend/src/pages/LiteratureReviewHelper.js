import React, { useState } from 'react';
import { generateLiteratureReview } from '../services/api';
import ReactMarkdown from 'react-markdown';

export default function LiteratureReviewHelper() {
  const [paperEntries, setPaperEntries] = useState([
    { title: '', authors: '', year: '', summary: '', key_findings: '' }
  ]);
  const [researchTopic, setResearchTopic] = useState('');
  const [reviewType, setReviewType] = useState('thematic');
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [fillMsg, setFillMsg] = useState('');

  const exampleTopic = 'The impact of artificial intelligence on education';
  const examplePapers = [
    {
      title: 'Artificial Intelligence in Education: Promises and Implications for Teaching and Learning',
      authors: 'Holmes, B., Bialik, M., Fadel, C.',
      year: '2019',
      summary: 'This paper explores the potential of AI to transform education, discussing both opportunities and challenges for teachers and learners.',
      key_findings: 'AI can personalize learning, automate administrative tasks, and provide new insights, but also raises concerns about equity and teacher roles.'
    },
    {
      title: 'The Role of AI in Personalized Learning',
      authors: 'Chen, L., Chen, P., Lin, Z.',
      year: '2020',
      summary: 'The authors review how AI-driven systems can tailor educational experiences to individual student needs, improving outcomes and engagement.',
      key_findings: 'Personalized AI systems increase student motivation and achievement, but require careful implementation and data privacy safeguards.'
    }
  ];

  const handleInputChange = (index, field, value) => {
    const newPaperEntries = [...paperEntries];
    newPaperEntries[index] = {
      ...newPaperEntries[index],
      [field]: value
    };
    setPaperEntries(newPaperEntries);
  };

  const addPaperEntry = () => {
    setPaperEntries([
      ...paperEntries,
      { title: '', authors: '', year: '', summary: '', key_findings: '' }
    ]);
  };

  const removePaperEntry = (index) => {
    if (paperEntries.length === 1) {
      return; // Don't remove if it's the only entry
    }
    const newPaperEntries = [...paperEntries];
    newPaperEntries.splice(index, 1);
    setPaperEntries(newPaperEntries);
  };

  const handleFillExample = () => {
    setResearchTopic(exampleTopic);
    setPaperEntries(examplePapers);
    setFillMsg('Example filled!');
    setTimeout(() => setFillMsg(''), 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if there's at least one paper with a title
    const hasPaperWithTitle = paperEntries.some(paper => paper.title.trim() !== '');
    
    if (!hasPaperWithTitle) {
      setError('Please enter details for at least one paper');
      return;
    }
    
    if (!researchTopic.trim()) {
      setError('Please enter your research topic');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await generateLiteratureReview(paperEntries, researchTopic, reviewType);
      setReview(response.response || 'No review generated');
    } catch (err) {
      setError('An error occurred while generating the literature review. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Literature Review Helper</h1>
          <p className="text-xl text-gray-300">
            Organize and synthesize research papers for your literature review with AI assistance.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <button
            type="button"
            onClick={handleFillExample}
            className="px-5 py-2 rounded bg-primary-600 text-white font-semibold text-sm hover:bg-primary-500 transition-colors duration-200 mb-1"
          >
            Fill Example
          </button>
          {fillMsg && <span className="text-xs text-primary-400">{fillMsg}</span>}
        </div>
      </div>

      <div className="card card-hover-shine p-8 mb-12">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="researchTopic" className="block text-lg font-medium text-gray-200 mb-2">
              Your Research Topic/Focus*
            </label>
            <input
              type="text"
              id="researchTopic"
              className="w-full px-4 py-3 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                      transition-all duration-300"
              placeholder="e.g., The effects of social media on adolescent mental health"
              value={researchTopic}
              onChange={(e) => setResearchTopic(e.target.value)}
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-200 mb-3">
              Review Organization
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setReviewType('thematic')}
                className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  reviewType === 'thematic' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                Thematic
              </button>
              <button
                type="button"
                onClick={() => setReviewType('chronological')}
                className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  reviewType === 'chronological' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                Chronological
              </button>
              <button
                type="button"
                onClick={() => setReviewType('methodological')}
                className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  reviewType === 'methodological' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                Methodological
              </button>
              <button
                type="button"
                onClick={() => setReviewType('theoretical')}
                className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  reviewType === 'theoretical' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                Theoretical
              </button>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Paper Entries</h2>
              <button
                type="button"
                onClick={addPaperEntry}
                className="btn btn-secondary py-2 px-4"
              >
                + Add Paper
              </button>
            </div>

            {paperEntries.map((paper, index) => (
              <div key={index} className="mb-8 p-6 bg-dark-700/50 rounded-lg border border-dark-600">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-primary-300">Paper {index + 1}</h3>
                  {paperEntries.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePaperEntry(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Paper Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-800 text-white 
                              focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent
                              transition-all duration-300"
                      value={paper.title}
                      onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Authors
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-800 text-white 
                              focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent
                              transition-all duration-300"
                      value={paper.authors}
                      onChange={(e) => handleInputChange(index, 'authors', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-1/4 px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-800 text-white 
                            focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-300"
                    value={paper.year}
                    onChange={(e) => handleInputChange(index, 'year', e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Brief Summary
                  </label>
                  <textarea
                    rows="2"
                    className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-800 text-white 
                            focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-300"
                    value={paper.summary}
                    onChange={(e) => handleInputChange(index, 'summary', e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Key Findings
                  </label>
                  <textarea
                    rows="2"
                    className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-800 text-white 
                            focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent
                            transition-all duration-300"
                    value={paper.key_findings}
                    onChange={(e) => handleInputChange(index, 'key_findings', e.target.value)}
                  ></textarea>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900 text-red-200 rounded-md text-lg animate-pulse-slow">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`btn btn-primary w-full py-4 px-5 group ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin-slow -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Literature Review...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Generate Literature Review
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            )}
          </button>
        </form>
      </div>

      {/* Results Section */}
      {review && (
        <div className="card p-8 mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary-400">Generated Literature Review</h2>
          <div className="slide-up">
            <div className="prose prose-lg max-w-none bg-dark-700 p-6 rounded-lg text-gray-200 shadow-md transition-all duration-300 hover:shadow-glow">
              <ReactMarkdown>{review}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="card p-8 feature-box">
        <h3 className="text-xl font-semibold mb-4 text-primary-400 flex items-center">
          <span className="icon-container icon-container-primary mr-3">💡</span>
          Literature Review Tips
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-200 text-lg">
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Include the most relevant papers for your research topic</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">A good literature review should identify patterns, gaps, and contradictions in the literature</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Different organization methods (thematic, chronological, etc.) serve different purposes</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Be critical and analytical rather than merely descriptive</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Use the generated review as a starting point and refine it with your own analysis</li>
        </ul>
      </div>
    </div>
  );
} 