import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchWeb } from '../services/api';
import ReactMarkdown from 'react-markdown';
import { researchTrendsActions } from '../store';

export default function ResearchTrends() {
  const dispatch = useDispatch();
  const { input, result, loading } = useSelector(state => state.researchTrends);
  
  const [error, setError] = useState('');

  // Initialize local state from Redux store
  useEffect(() => {
    // If we already have a value in redux, use it
    if (result) {
      // No need to do anything as we'll use the redux state directly
    }
  }, [result]);

  // Predefined research topics for quick selection
  const researchTopics = [
    'Latest LLM architectures',
    'Transformer models',
    'Diffusion models in AI',
    'Multimodal learning',
    'Graph neural networks',
    'Reinforcement learning from human feedback',
    'AI model compression techniques',
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) {
      setError('Please enter a search query');
      return;
    }

    dispatch(researchTrendsActions.setLoading(true));
    setError('');

    try {
      const response = await searchWeb(input);
      dispatch(researchTrendsActions.setResult(response.response || 'No results found'));
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
      console.error(err);
    } finally {
      dispatch(researchTrendsActions.setLoading(false));
    }
  };

  const handleTopicClick = (topic) => {
    dispatch(researchTrendsActions.setInput(topic));
  };

  const handleInputChange = (e) => {
    dispatch(researchTrendsActions.setInput(e.target.value));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-white">Research Trends Explorer</h1>
        <p className="text-base md:text-lg text-gray-300">
          Stay up-to-date with the latest research trends in machine learning and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-1 bg-dark-800 rounded-xl shadow-lg p-5 border border-dark-700">
          <h2 className="text-xl font-semibold mb-5 text-primary-400">Search</h2>
          <form onSubmit={handleSearch} className="mb-6">
            <div className="mb-5">
              <label htmlFor="searchQuery" className="block text-base font-medium text-gray-200 mb-2">
                Research Area
              </label>
              <input
                type="text"
                id="searchQuery"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                placeholder="e.g., Graph Neural Networks"
                value={input}
                onChange={handleInputChange}
                required
              />
            </div>

            {error && (
              <div className="mb-5 p-3 bg-red-900 text-red-200 rounded-md text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-3 border border-transparent rounded-md shadow-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition text-base font-medium ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>

          <div>
            <h3 className="text-base font-medium mb-3 text-gray-200">Popular Research Topics</h3>
            <div className="flex flex-wrap gap-2">
              {researchTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => handleTopicClick(topic)}
                  className="px-3 py-1.5 bg-dark-700 text-primary-300 rounded-lg text-sm hover:bg-dark-600 transition border border-dark-600"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-dark-800 rounded-xl shadow-lg p-5 h-full border border-dark-700">
            <h2 className="text-xl font-semibold mb-5 text-primary-400">
              {result ? 'Research Insights' : 'Research Insights Will Appear Here'}
            </h2>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400 mx-auto mb-4"></div>
                  <p className="text-gray-300 text-base">Searching for research trends...</p>
                </div>
              </div>
            ) : result ? (
              <div className="prose max-w-none text-gray-200">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            ) : (
              <div className="bg-dark-700 p-8 rounded-lg text-center">
                <p className="text-gray-300 mb-4 text-base">
                  Enter a research topic to get the latest insights and trends from the field.
                </p>
                <p className="text-gray-400 text-sm">
                  Powered by Ollama and Llama 3
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-dark-700 rounded-xl p-6 border border-dark-600">
        <h3 className="text-lg font-semibold mb-3 text-primary-400">About Research Trends</h3>
        <p className="text-gray-200 mb-4 text-base">
          This tool uses AI to aggregate and analyze information about current research trends.
          It provides insights about recent papers, methodologies, and breakthroughs in your
          specified research area, helping you stay up-to-date with the rapidly evolving field.
        </p>
        <div className="text-gray-400 text-sm">
          Note: The information provided is based on the AI model's knowledge and may not include
          the very latest research. For critical research, always verify information with primary sources.
        </div>
      </div>
    </div>
  );
} 