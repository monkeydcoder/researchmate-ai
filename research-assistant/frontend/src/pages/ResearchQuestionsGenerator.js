import React, { useState } from 'react';
import { generateResearchQuestions } from '../services/api';
import ReactMarkdown from 'react-markdown';

export default function ResearchQuestionsGenerator() {
  const [topic, setTopic] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [additionalContext, setAdditionalContext] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      setError('Please enter a research topic');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await generateResearchQuestions(
        topic, 
        fieldOfStudy, 
        additionalContext, 
        difficulty
      );
      setQuestions(response.response || 'No questions generated');
    } catch (err) {
      setError('An error occurred while generating research questions. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
      <div className="text-center mb-12 slide-up">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Research Questions Generator</h1>
        <p className="text-xl text-gray-300">
          Generate thoughtful research questions for your studies, thesis, or dissertation with AI assistance.
        </p>
      </div>

      <div className="card card-hover-shine p-8 mb-12">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="topic" className="block text-lg font-medium text-gray-200 mb-2">
                Research Topic*
              </label>
              <input
                type="text"
                id="topic"
                className="w-full px-4 py-3 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                placeholder="e.g., The impact of artificial intelligence on education"
                value={topic}
                onChange={(e) => handleInputChange(e, setTopic)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="fieldOfStudy" className="block text-lg font-medium text-gray-200 mb-2">
                Field of Study
              </label>
              <input
                type="text"
                id="fieldOfStudy"
                className="w-full px-4 py-3 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                placeholder="e.g., Education Technology, Computer Science, Psychology"
                value={fieldOfStudy}
                onChange={(e) => handleInputChange(e, setFieldOfStudy)}
              />
            </div>
            
            <div>
              <label htmlFor="additionalContext" className="block text-lg font-medium text-gray-200 mb-2">
                Additional Context (optional)
              </label>
              <textarea
                id="additionalContext"
                rows="4"
                className="w-full px-4 py-3 border border-dark-600 rounded-lg shadow-sm bg-dark-700 text-white 
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all duration-300"
                placeholder="e.g., I'm interested in studying how AI tools impact student learning outcomes in K-12 education. I have access to data from schools that have implemented AI tools."
                value={additionalContext}
                onChange={(e) => handleInputChange(e, setAdditionalContext)}
              ></textarea>
            </div>
            
            <div>
              <label className="block text-lg font-medium text-gray-200 mb-3">
                Question Difficulty Level
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setDifficulty('beginner')}
                  className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                    difficulty === 'beginner' 
                      ? 'bg-primary-600 text-white shadow-glow' 
                      : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                  }`}
                >
                  Beginner
                </button>
                <button
                  type="button"
                  onClick={() => setDifficulty('medium')}
                  className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                    difficulty === 'medium' 
                      ? 'bg-primary-600 text-white shadow-glow' 
                      : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                  }`}
                >
                  Medium
                </button>
                <button
                  type="button"
                  onClick={() => setDifficulty('advanced')}
                  className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                    difficulty === 'advanced' 
                      ? 'bg-primary-600 text-white shadow-glow' 
                      : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                  }`}
                >
                  Advanced
                </button>
                <button
                  type="button"
                  onClick={() => setDifficulty('phd')}
                  className={`px-5 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                    difficulty === 'phd' 
                      ? 'bg-primary-600 text-white shadow-glow' 
                      : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                  }`}
                >
                  PhD Level
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-900 text-red-200 rounded-md text-lg animate-pulse-slow">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`mt-8 btn btn-primary w-full py-4 px-5 group ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin-slow -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Questions...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Generate Research Questions
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            )}
          </button>
        </form>
      </div>

      {/* Results Section */}
      {questions && (
        <div className="card p-8 mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary-400">Generated Research Questions</h2>
          <div className="slide-up">
            <div className="prose prose-lg max-w-none bg-dark-700 p-6 rounded-lg text-gray-200 shadow-md transition-all duration-300 hover:shadow-glow">
              <ReactMarkdown>{questions}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="card p-8 feature-box">
        <h3 className="text-xl font-semibold mb-4 text-primary-400 flex items-center">
          <span className="icon-container icon-container-primary mr-3">💡</span>
          Tips for Effective Research Questions
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-200 text-lg">
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Be specific about your research topic for more focused questions</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Good research questions should be clear, focused, and researchable</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Consider questions that address gaps in existing literature</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">The best research questions often begin with "How", "What", or "Why"</li>
          <li className="transition-all duration-300 hover:translate-x-1 hover:text-white">Refine generated questions to match your specific research interests and capabilities</li>
        </ul>
      </div>
    </div>
  );
} 