import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About ResearchMate AI</h1>
        <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
      </div>

      {/* Mission Section with Pattern Background */}
      <div className="bg-dark-800 rounded-xl shadow-xl p-10 mb-16 border border-dark-700 relative overflow-hidden">
        {/* Background Pattern - SVG Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-primary-400">Our Mission</h2>
          <p className="text-gray-200 mb-8 leading-relaxed text-lg">
            ResearchMate AI was created with a simple goal: to make academic research more accessible, 
            efficient, and insightful for students and researchers. By leveraging the power of locally-run 
            AI models through Ollama and Llama 3, we provide tools that help you digest complex research 
            papers, extract key findings, and stay updated with the latest trends in your field—all while 
            keeping your data private and secure.
          </p>
          <p className="text-gray-200 mb-6 leading-relaxed text-lg">
            We believe that AI should amplify human potential, not replace it. Our tools are designed 
            to be assistants in your research journey, helping you focus more on critical thinking, 
            creativity, and generating innovative ideas rather than spending hours reading papers and 
            extracting information manually.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-dark-800 rounded-xl p-10 mb-16 border border-dark-700 relative overflow-hidden">
        {/* Background Pattern - Dots */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-10 text-primary-400">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-700 p-8 rounded-xl shadow-md border border-dark-600 hover:border-primary-700 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-5">📝</div>
              <h3 className="text-xl font-medium mb-4 text-white">Paper Summarization</h3>
              <p className="text-gray-300 text-lg">
                Convert lengthy research papers into concise, readable summaries highlighting the most 
                important contributions, methodologies, and findings.
              </p>
            </div>
            
            <div className="bg-dark-700 p-8 rounded-xl shadow-md border border-dark-600 hover:border-primary-700 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-5">💡</div>
              <h3 className="text-xl font-medium mb-4 text-white">Key Insights Extraction</h3>
              <p className="text-gray-300 text-lg">
                Automatically identify and extract the most significant insights, contributions, and 
                findings from complex academic papers.
              </p>
            </div>
            
            <div className="bg-dark-700 p-8 rounded-xl shadow-md border border-dark-600 hover:border-primary-700 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-5">📊</div>
              <h3 className="text-xl font-medium mb-4 text-white">Research Trends</h3>
              <p className="text-gray-300 text-lg">
                Stay updated with the latest developments in your field with AI-curated research trends 
                and insights about cutting-edge papers.
              </p>
            </div>
            
            <div className="bg-dark-700 p-8 rounded-xl shadow-md border border-dark-600 hover:border-primary-700 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-5">🔒</div>
              <h3 className="text-xl font-medium mb-4 text-white">Privacy-Focused</h3>
              <p className="text-gray-300 text-lg">
                All processing happens locally on your machine using Ollama and Llama 3, ensuring your 
                research data stays private and secure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="bg-dark-800 rounded-xl shadow-xl p-10 mb-16 border border-dark-700 relative overflow-hidden">
        {/* Background Pattern - Hexagons */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(1) rotate(0)">
                <path d="M25,17.3L0,0v34.6l25,17.3l25-17.3V0L25,17.3z" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-10 text-primary-400">Technology</h2>
          <div className="space-y-8">
            <div className="bg-dark-700 p-8 rounded-xl border border-dark-600">
              <h3 className="text-xl font-medium mb-4 text-white">Ollama</h3>
              <p className="text-gray-300 text-lg">
                Ollama is an open-source tool that allows running large language models locally on your machine. 
                It provides a simple way to run, customize, and integrate powerful AI models without relying on 
                cloud services.
              </p>
            </div>
            
            <div className="bg-dark-700 p-8 rounded-xl border border-dark-600">
              <h3 className="text-xl font-medium mb-4 text-white">Llama 3</h3>
              <p className="text-gray-300 text-lg">
                Llama 3 is an advanced large language model developed by Meta AI. It's designed to understand 
                and generate human-like text, and can be run locally through Ollama to provide powerful AI 
                capabilities while keeping data private.
              </p>
            </div>
            
            <div className="bg-dark-700 p-8 rounded-xl border border-dark-600">
              <h3 className="text-xl font-medium mb-4 text-white">Modern Web Stack</h3>
              <p className="text-gray-300 text-lg">
                Our application is built with React for the frontend and Node.js for the backend, providing 
                a responsive, fast, and reliable user experience. We've designed it to be simple to set up 
                and use for researchers of all technical levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white rounded-xl p-10 text-center shadow-xl">
        <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Research Process?</h2>
        <p className="text-xl mb-10">
          Experience the power of AI-assisted research with ResearchMate AI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link
            to="/paper-analysis"
            className="bg-dark-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-dark-700 transition-colors text-lg"
          >
            Analyze Papers
          </Link>
          <Link
            to="/research-trends"
            className="bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-500 transition-colors text-lg border border-primary-400"
          >
            Explore Trends
          </Link>
        </div>
      </div>
    </div>
  );
}
