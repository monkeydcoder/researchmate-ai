import React from 'react';

function Documentation() {
  return (
    <div className="bg-dark-800 shadow-card rounded-lg p-8 max-w-5xl mx-auto text-gray-100 animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-dark-600">ResearchMate AI Documentation</h1>
      
      {/* Overview Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary-400 mb-4">Overview</h2>
        <p className="mb-4 text-gray-300">
          ResearchMate AI is a powerful research assistant web application designed to help researchers, academics, 
          students, and knowledge workers efficiently process and analyze research papers, generate valuable insights, 
          and streamline their research workflow.
        </p>
        <p className="mb-4 text-gray-300">
          Built with privacy in mind, ResearchMate AI leverages Ollama and Llama 3 to process all data 
          locally on your machine, ensuring that your research data never leaves your computer.
        </p>
      </section>
      
      {/* System Architecture Flow Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-400 mb-6">System Architecture</h2>
        
        {/* Flow Chart Visualization */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-3xl rounded-lg bg-dark-900 p-6 shadow-card overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
            
            {/* Flow Chart Components */}
            <div className="relative z-10">
              {/* User Layer */}
              <div className="mb-4 flex justify-center">
                <div className="w-48 p-4 bg-dark-700 rounded-lg border border-dark-600 shadow-md transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1">
                  <h4 className="text-center text-white font-bold mb-1">User</h4>
                  <p className="text-xs text-center text-gray-300">Interacts with web interface</p>
                </div>
              </div>
              
              {/* Down Arrow */}
              <div className="flex justify-center my-2">
                <svg className="w-6 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              
              {/* Frontend Layer */}
              <div className="mb-4 flex justify-center">
                <div className="w-64 p-4 bg-dark-700 rounded-lg border border-dark-600 shadow-md transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1">
                  <h4 className="text-center text-white font-bold mb-1">Frontend (React)</h4>
                  <p className="text-xs text-center text-gray-300">UI components, user interaction</p>
                </div>
              </div>
              
              {/* Down Arrow */}
              <div className="flex justify-center my-2">
                <svg className="w-6 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              
              {/* Backend Layer */}
              <div className="mb-4 flex justify-center">
                <div className="w-64 p-4 bg-dark-700 rounded-lg border border-dark-600 shadow-md transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1">
                  <h4 className="text-center text-white font-bold mb-1">Backend (Node.js)</h4>
                  <p className="text-xs text-center text-gray-300">API endpoints, request handling</p>
                </div>
              </div>
              
              {/* Down Arrow */}
              <div className="flex justify-center my-2">
                <svg className="w-6 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              
              {/* Ollama Layer */}
              <div className="mb-4 flex justify-center">
                <div className="w-64 p-4 bg-dark-700 rounded-lg border border-dark-600 shadow-md transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1">
                  <h4 className="text-center text-white font-bold mb-1">Ollama (Local AI)</h4>
                  <p className="text-xs text-center text-gray-300">AI inference with Llama 3 model</p>
                </div>
              </div>
              
              {/* Up Arrow */}
              <div className="flex justify-center my-2">
                <svg className="w-6 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </div>
              
              {/* Backend Layer (Return) */}
              <div className="mb-4 flex justify-center">
                <div className="w-64 p-4 bg-dark-700 rounded-lg border border-dark-600 shadow-md transition-all duration-300 hover:shadow-glow-lg transform hover:-translate-y-1">
                  <h4 className="text-center text-white font-bold mb-1">Backend Processing</h4>
                  <p className="text-xs text-center text-gray-300">Format and process AI response</p>
                </div>
              </div>
              
              {/* Up Arrow */}
              <div className="flex justify-center my-2">
                <svg className="w-6 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </div>
              
              {/* Frontend Layer (Display) */}
              <div className="flex justify-center">
                <div className="w-64 p-4 bg-dark-700 rounded-lg border border-dark-600 shadow-md transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1">
                  <h4 className="text-center text-white font-bold mb-1">Frontend Rendering</h4>
                  <p className="text-xs text-center text-gray-300">Display results to user</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-dark-900 p-6 rounded-lg shadow-card mt-8">
          <h3 className="text-xl font-semibold text-primary-400 mb-4">Data Flow Process</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-300">
            <li className="animate-pulse-subtle">
              <strong className="text-white">User Request:</strong> User submits research paper or query through the web interface
            </li>
            <li className="animate-pulse-subtle animation-delay-100">
              <strong className="text-white">Frontend Processing:</strong> React components capture input and send to backend API
            </li>
            <li className="animate-pulse-subtle animation-delay-200">
              <strong className="text-white">Backend Handling:</strong> Node.js server processes request and formats appropriate prompt
            </li>
            <li className="animate-pulse-subtle animation-delay-300">
              <strong className="text-white">Ollama Processing:</strong> Local AI processes the prompt using Llama 3 model
            </li>
            <li className="animate-pulse-subtle animation-delay-400">
              <strong className="text-white">Response Generation:</strong> AI-generated response is sent back to backend
            </li>
            <li className="animate-pulse-subtle animation-delay-500">
              <strong className="text-white">Backend Processing:</strong> Response is formatted and structured
            </li>
            <li className="animate-pulse-subtle animation-delay-600">
              <strong className="text-white">Frontend Display:</strong> Results are displayed in user interface
            </li>
          </ol>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-400 mb-6">Features & Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-900 p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover border border-dark-700 hover:border-primary-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white">Paper Analysis</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Quickly understand research papers with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Concise summaries of key findings</li>
              <li>Extraction of main contributions and methods</li>
              <li>Focus on the most important aspects</li>
            </ul>
          </div>
          
          <div className="bg-dark-900 p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover border border-dark-700 hover:border-primary-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white">Research Trends</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Stay updated with developments in your field:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Discover emerging patterns and methodologies</li>
              <li>Get information about recent developments</li>
              <li>Bridge knowledge gaps with relevant research</li>
            </ul>
          </div>
          
          <div className="bg-dark-900 p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover border border-dark-700 hover:border-primary-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white">Citation Generator</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Streamline your citation needs:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Generate properly formatted citations</li>
              <li>Support for APA, MLA, Chicago styles</li>
              <li>Save time with automated citations</li>
            </ul>
          </div>
          
          <div className="bg-dark-900 p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover border border-dark-700 hover:border-primary-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white">Research Questions</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Generate focused research questions:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Create 5-7 thoughtful questions on your topic</li>
              <li>Customize based on field and difficulty</li>
              <li>Get explanations of each question's value</li>
            </ul>
          </div>
          
          <div className="bg-dark-900 p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-card-hover border border-dark-700 hover:border-primary-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white">Literature Review</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Streamline your literature review process:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>Organize papers into coherent reviews</li>
              <li>Identify patterns and relationships</li>
              <li>Highlight gaps in existing literature</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Why It Exists Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-400 mb-6">Why ResearchMate AI Exists</h2>
        
        <div className="bg-dark-900 p-6 rounded-lg shadow-card">
          <p className="mb-4 text-gray-300">
            ResearchMate AI was created to address several challenges faced by researchers:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="relative p-5 bg-dark-800 rounded-lg border border-dark-600 shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-800"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Information Overload</h3>
                </div>
                <p className="text-gray-300 text-sm pl-11">The exponential growth of academic publications makes it difficult to keep up with relevant literature.</p>
              </div>
            </div>
            
            <div className="relative p-5 bg-dark-800 rounded-lg border border-dark-600 shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-800"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Time Constraints</h3>
                </div>
                <p className="text-gray-300 text-sm pl-11">Reading and analyzing lengthy research papers is time-consuming for busy researchers.</p>
              </div>
            </div>
            
            <div className="relative p-5 bg-dark-800 rounded-lg border border-dark-600 shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-800"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Complexity</h3>
                </div>
                <p className="text-gray-300 text-sm pl-11">Research papers often contain complex information that can be difficult to digest quickly.</p>
              </div>
            </div>
            
            <div className="relative p-5 bg-dark-800 rounded-lg border border-dark-600 shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-800"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">Privacy Concerns</h3>
                </div>
                <p className="text-gray-300 text-sm pl-11">Many AI research assistants send your data to the cloud, raising privacy concerns.</p>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-gray-300">
            By addressing these challenges, ResearchMate AI aims to democratize access to research knowledge and make the research process more efficient and effective.
          </p>
        </div>
      </section>
      
      {/* Technical Requirements Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-400 mb-6">Technical Requirements</h2>
        
        <div className="bg-dark-900 p-6 rounded-lg shadow-card grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Node.js</h3>
              <p className="text-gray-300 text-sm">v14 or higher</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">npm</h3>
              <p className="text-gray-300 text-sm">v6 or higher</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Ollama</h3>
              <p className="text-gray-300 text-sm">Latest version, installed and running</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Llama 3</h3>
              <p className="text-gray-300 text-sm">Downloaded via Ollama</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Operating System</h3>
              <p className="text-gray-300 text-sm">Compatible with Windows, macOS, and Linux</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Hardware</h3>
              <p className="text-gray-300 text-sm">System capable of running LLMs locally (8GB+ RAM recommended)</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Getting Started Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-primary-400 mb-6">Getting Started</h2>
        
        <div className="bg-dark-900 p-6 rounded-lg shadow-card">
          <ol className="list-decimal pl-6 mb-4 text-gray-300 space-y-6">
            <li className="pb-4 border-b border-dark-700">
              <h3 className="font-semibold text-white mb-2">Install Prerequisites</h3>
              <ul className="list-disc pl-6 mt-1 mb-2 space-y-2">
                <li>Node.js and npm from <a href="https://nodejs.org" className="text-primary-400 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
                <li>Ollama from <a href="https://ollama.ai" className="text-primary-400 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">ollama.ai</a></li>
              </ul>
            </li>
            
            <li className="pb-4 border-b border-dark-700">
              <h3 className="font-semibold text-white mb-2">Start Ollama</h3>
              <div className="bg-dark-800 p-3 rounded-md font-mono text-sm mt-1 mb-2 overflow-x-auto">
                <code className="text-primary-300">ollama serve</code>
              </div>
            </li>
            
            <li className="pb-4 border-b border-dark-700">
              <h3 className="font-semibold text-white mb-2">Pull the Llama 3 model</h3>
              <div className="bg-dark-800 p-3 rounded-md font-mono text-sm mt-1 mb-2 overflow-x-auto">
                <code className="text-primary-300">ollama pull llama3</code>
              </div>
            </li>
            
            <li className="pb-4 border-b border-dark-700">
              <h3 className="font-semibold text-white mb-2">Start the backend server</h3>
              <div className="bg-dark-800 p-3 rounded-md font-mono text-sm mt-1 mb-2 overflow-x-auto">
                <code className="text-primary-300">cd research-assistant/backend<br/>npm start</code>
              </div>
            </li>
            
            <li className="pb-4 border-b border-dark-700">
              <h3 className="font-semibold text-white mb-2">Start the frontend application</h3>
              <div className="bg-dark-800 p-3 rounded-md font-mono text-sm mt-1 mb-2 overflow-x-auto">
                <code className="text-primary-300">cd research-assistant/frontend<br/>npm start</code>
              </div>
            </li>
            
            <li>
              <h3 className="font-semibold text-white mb-2">Access the application</h3>
              <p className="mt-1">Open <a href="http://localhost:3000" className="text-primary-400 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> in your web browser</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Documentation; 