import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Features section data
  const features = [
    {
      title: 'Paper Summarization',
      description: 'Extract key information from research papers with our AI-powered summarization tool.',
      icon: '📝',
      link: '/paper-analysis',
    },
    {
      title: 'Key Insights Extraction',
      description: 'Automatically identify and extract the most important contributions and findings from papers.',
      icon: '💡',
      link: '/paper-analysis',
    },
    {
      title: 'Research Trends',
      description: 'Stay up-to-date with the latest developments in your field with AI-curated research trends.',
      icon: '📊',
      link: '/research-trends',
    },
    {
      title: 'Citation Generator',
      description: 'Create properly formatted citations in APA, MLA, Chicago, and other styles for your research papers.',
      icon: '📚',
      link: '/citation-generator',
    },
    {
      title: 'Research Questions Generator',
      description: 'Get help brainstorming thoughtful and focused research questions for your studies or thesis.',
      icon: '❓',
      link: '/research-questions',
    },
    {
      title: 'Literature Review Helper',
      description: 'Organize and synthesize research papers to create a coherent literature review for your research.',
      icon: '📋',
      link: '/literature-review',
    },
    {
      title: 'Web Research Assistant',
      description: 'Get insights about research papers directly from the web, powered by Ollama and Llama 3.',
      icon: '🔍',
      link: '/research-trends',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-700 text-white rounded-xl shadow-2xl fade-in">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up">
            Accelerate Your Research with AI
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in">
            ResearchMate AI helps researchers and students analyze papers, extract insights,
            and stay up-to-date with the latest research trends using Ollama and Llama 3.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/paper-analysis"
              className="btn btn-secondary text-lg"
            >
              Analyze Papers
            </Link>
            <Link
              to="/research-trends"
              className="btn btn-primary text-lg pulse-element"
            >
              Explore Trends
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 slide-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Supercharge Your Research Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card card-hover-shine feature-box"
              >
                <div className="text-5xl mb-6 icon-container icon-container-primary inline-block">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-300">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="link-hover-underline font-medium text-lg inline-flex items-center"
                >
                  Try it now 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-dark-800 rounded-xl my-20 shadow-lg transform transition-all duration-500 hover:shadow-glow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-300">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-16 transition-all duration-300 hover:bg-dark-700/20 hover:p-4 rounded-lg">
              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <div className="number-circle animate-float">
                  1
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-white">Upload or Paste Paper Content</h3>
                <p className="text-gray-300 text-lg">
                  Simply upload a PDF or paste the text of the research paper you want to analyze.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-16 transition-all duration-300 hover:bg-dark-700/20 hover:p-4 rounded-lg">
              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <div className="number-circle animate-float" style={{animationDelay: '0.2s'}}>
                  2
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-white">Choose Analysis Type</h3>
                <p className="text-gray-300 text-lg">
                  Select whether you want a summary, key insights extraction, or both.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center transition-all duration-300 hover:bg-dark-700/20 hover:p-4 rounded-lg">
              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                <div className="number-circle animate-float" style={{animationDelay: '0.4s'}}>
                  3
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-white">Get AI-Powered Results</h3>
                <p className="text-gray-300 text-lg">
                  Receive detailed summaries and insights powered by Ollama and Llama 3 running locally on your machine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-dark-800 rounded-xl shadow-lg shimmer">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-300">Ready to Transform Your Research Experience?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join researchers and students who are using ResearchMate AI to save time and gain deeper insights.
          </p>
          <Link
            to="/paper-analysis"
            className="btn btn-primary text-lg px-10 py-4 group"
          >
            <span className="transition-all duration-300 group-hover:mr-2">Get Started Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
} 