import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateCitation } from '../services/api';
import ReactMarkdown from 'react-markdown';
import { citationGeneratorActions } from '../store';
import { handleApiError } from '../utils/errorHandler';

export default function CitationGenerator() {
  const dispatch = useDispatch();
  const { input, result, loading, format } = useSelector(state => state.citationGenerator);
  
  const [paperDetails, setPaperDetails] = useState({
    title: '',
    authors: '',
    journal: '',
    year: '',
    doi: '',
    url: '',
  });
  const [error, setError] = useState('');
  const [fillMsg, setFillMsg] = useState('');

  const examplePaper = {
    title: 'Attention Is All You Need',
    authors: 'Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin',
    journal: 'Advances in Neural Information Processing Systems',
    year: '2017',
    doi: '10.48550/arXiv.1706.03762',
    url: 'https://arxiv.org/abs/1706.03762',
  };

  // Initialize from Redux store
  useEffect(() => {
    if (input) {
      setPaperDetails(input);
    }
  }, [input]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = {
      ...paperDetails,
      [name]: value
    };
    setPaperDetails(updatedDetails);
    dispatch(citationGeneratorActions.setInput(updatedDetails));
  };

  const handleFormatChange = (newFormat) => {
    dispatch(citationGeneratorActions.setFormat(newFormat));
  };

  const handleFillExample = () => {
    setPaperDetails(examplePaper);
    dispatch(citationGeneratorActions.setInput(examplePaper));
    setFillMsg('Example filled!');
    setTimeout(() => setFillMsg(''), 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!paperDetails.title.trim()) {
      setError('Please enter at least the paper title');
      return;
    }

    dispatch(citationGeneratorActions.setLoading(true));
    setError('');

    try {
      const response = await generateCitation(paperDetails, format);
      dispatch(citationGeneratorActions.setResult(response.response || 'No citation generated'));
    } catch (err) {
      const errorResult = handleApiError(err, 'Citation Generator');
      setError(errorResult.message);
    } finally {
      dispatch(citationGeneratorActions.setLoading(false));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Citation Generator</h1>
          <p className="text-base md:text-lg text-gray-300">
            Generate properly formatted citations for your research papers in different styles.
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

      <div className="card card-hover-shine p-6 mb-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label htmlFor="title" className="block text-base font-medium text-gray-200 mb-2">
                Paper Title*
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                value={paperDetails.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="authors" className="block text-base font-medium text-gray-200 mb-2">
                Authors (separated by commas)
              </label>
              <input
                type="text"
                id="authors"
                name="authors"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                value={paperDetails.authors}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="journal" className="block text-base font-medium text-gray-200 mb-2">
                Journal/Conference
              </label>
              <input
                type="text"
                id="journal"
                name="journal"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                value={paperDetails.journal}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-base font-medium text-gray-200 mb-2">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                value={paperDetails.year}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="doi" className="block text-base font-medium text-gray-200 mb-2">
                DOI
              </label>
              <input
                type="text"
                id="doi"
                name="doi"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                value={paperDetails.doi}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="url" className="block text-base font-medium text-gray-200 mb-2">
                URL
              </label>
              <input
                type="text"
                id="url"
                name="url"
                className="w-full px-3 py-2 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                value={paperDetails.url}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-base font-medium text-gray-200 mb-2">
              Citation Format
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleFormatChange('apa')}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  format === 'apa' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                APA
              </button>
              <button
                type="button"
                onClick={() => handleFormatChange('mla')}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  format === 'mla' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                MLA
              </button>
              <button
                type="button"
                onClick={() => handleFormatChange('chicago')}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  format === 'chicago' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                Chicago
              </button>
              <button
                type="button"
                onClick={() => handleFormatChange('harvard')}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  format === 'harvard' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                Harvard
              </button>
              <button
                type="button"
                onClick={() => handleFormatChange('ieee')}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  format === 'ieee' 
                    ? 'bg-primary-600 text-white shadow-glow' 
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                IEEE
              </button>
            </div>
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
                Generating Citation...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Generate Citation
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            )}
          </button>
        </form>
      </div>

      {/* Results Section */}
      {result && (
        <div className="card p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-primary-400">Generated Citation</h2>
          <div className="bg-dark-700 p-5 rounded-lg shadow-md">
            <div className="prose max-w-none text-gray-200">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
          
          <div className="mt-5 flex justify-end">
            <button
              onClick={() => {navigator.clipboard.writeText(result.replace(/\*\*/g, '').replace(/\\n/g, '\n'))}}
              className="px-4 py-2 bg-dark-700 text-primary-400 rounded-lg hover:bg-dark-600 transition border border-dark-600 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              <span>Copy Citation</span>
            </button>
          </div>
        </div>
      )}

      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-3 text-primary-400">About Citation Styles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <div>
            <h4 className="font-medium text-white">APA Style</h4>
            <p className="text-gray-300 mb-2">Commonly used in psychology, education, and social sciences.</p>
          </div>
          <div>
            <h4 className="font-medium text-white">MLA Style</h4>
            <p className="text-gray-300 mb-2">Often used in humanities, particularly in language and literature studies.</p>
          </div>
          <div>
            <h4 className="font-medium text-white">Chicago Style</h4>
            <p className="text-gray-300 mb-2">Commonly used in history, arts, and some humanities disciplines.</p>
          </div>
          <div>
            <h4 className="font-medium text-white">Harvard Style</h4>
            <p className="text-gray-300 mb-2">Used in universities worldwide, particularly in economics and business studies.</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-medium text-white">IEEE Style</h4>
            <p className="text-gray-300">Standard for engineering and computer science publications.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 