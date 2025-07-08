import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { summarizePaper, extractInsights } from '../services/api';
import ReactMarkdown from 'react-markdown';
import { paperAnalysisActions } from '../store';

export default function PaperAnalysis() {
  const dispatch = useDispatch();
  const { input, result, loading } = useSelector(state => state.paperAnalysis);
  
  const [activeTab, setActiveTab] = useState('summarize');
  const [error, setError] = useState('');
  const [results, setResults] = useState({ summary: '', insights: '' });

  // Initialize local state from Redux store
  useEffect(() => {
    if (result) {
      setResults(result);
    }
  }, [result]);

  const handleTextChange = (e) => {
    dispatch(paperAnalysisActions.setInput(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) {
      setError('Please enter some paper text to analyze');
      return;
    }

    dispatch(paperAnalysisActions.setLoading(true));
    setError('');

    try {
      const newResults = { ...results };

      if (activeTab === 'summarize' || activeTab === 'both') {
        const summaryResponse = await summarizePaper(input);
        newResults.summary = summaryResponse.response || 'No summary generated';
      }

      if (activeTab === 'insights' || activeTab === 'both') {
        const insightsResponse = await extractInsights(input);
        newResults.insights = insightsResponse.response || 'No insights generated';
      }
      
      // Store results in Redux
      dispatch(paperAnalysisActions.setResult(newResults));
      setResults(newResults);
    } catch (err) {
      setError('An error occurred while analyzing the paper. Please try again.');
      console.error(err);
    } finally {
      dispatch(paperAnalysisActions.setLoading(false));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-10 slide-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-white">Research Paper Analysis</h1>
        <p className="text-base md:text-lg text-gray-300">
          Paste your research paper text below and let our AI assistant analyze it for you.
        </p>
      </div>

      <div className="card card-hover-shine p-6 mb-10">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab('summarize')}
              className={`relative overflow-hidden px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                activeTab === 'summarize' 
                  ? 'bg-primary-600 text-white shadow-glow' 
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:-translate-y-1 hover:shadow-md'
              }`}
            >
              <span className="relative z-10">Summarize</span>
              {activeTab !== 'summarize' && (
                <span className="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-primary-600 group-hover:h-full opacity-0 group-hover:opacity-80"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`relative overflow-hidden px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                activeTab === 'insights' 
                  ? 'bg-primary-600 text-white shadow-glow' 
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:-translate-y-1 hover:shadow-md'
              }`}
            >
              <span className="relative z-10">Extract Insights</span>
              {activeTab !== 'insights' && (
                <span className="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-primary-600 group-hover:h-full opacity-0 group-hover:opacity-80"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('both')}
              className={`relative overflow-hidden px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                activeTab === 'both' 
                  ? 'bg-primary-600 text-white shadow-glow' 
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:-translate-y-1 hover:shadow-md'
              }`}
            >
              <span className="relative z-10">Both</span>
              {activeTab !== 'both' && (
                <span className="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-primary-600 group-hover:h-full opacity-0 group-hover:opacity-80"></span>
              )}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="paperText" className="block text-base font-medium text-gray-200 mb-2">
                Paper Text
              </label>
              <textarea
                id="paperText"
                rows="10"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                           focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base
                           transition-all duration-300 focus:shadow-inner-glow"
                placeholder="Paste the research paper text here..."
                value={input}
                onChange={handleTextChange}
                required
              ></textarea>
            </div>

            {error && (
              <div className="mb-5 p-3 bg-red-900 text-red-200 rounded-md text-sm animate-pulse-slow">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full py-3 px-4 group ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin-slow -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Analyze Paper
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Results Section */}
      {(results.summary || results.insights) && (
        <div className="card p-6 mb-10 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary-400">Analysis Results</h2>

          {results.summary && (
            <div className="mb-8 slide-up">
              <h3 className="text-lg font-semibold mb-3 text-white">Summary</h3>
              <div className="prose max-w-none bg-dark-700 p-5 rounded-lg text-gray-200 shadow-md transition-all duration-300 hover:shadow-glow">
                <ReactMarkdown>{results.summary}</ReactMarkdown>
              </div>
            </div>
          )}

          {results.insights && (
            <div className="slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-lg font-semibold mb-3 text-white">Key Insights</h3>
              <div className="prose max-w-none bg-dark-700 p-5 rounded-lg text-gray-200 shadow-md transition-all duration-300 hover:shadow-glow">
                <ReactMarkdown>{results.insights}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tips Section */}
      <div className="card p-6 feature-box">
        <h3 className="text-lg font-semibold mb-3 text-primary-400 flex items-center">
          <span className="icon-container icon-container-primary mr-2">💡</span>
          Tips for Better Results
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-200 text-base">
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Include the abstract, methodology, and results sections for the best summary</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Longer text will provide more comprehensive analysis but may take longer to process</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Clean up formatting issues like line breaks or special characters for better results</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">For full papers, consider breaking them into sections and analyzing each separately</li>
        </ul>
      </div>
    </div>
  );
} 