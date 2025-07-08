import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white border-t border-dark-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-5 text-primary-400">ResearchMate AI</h3>
            <p className="text-gray-300 text-base">
              Empowering researchers with AI-powered tools to make academic research more efficient and insightful.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-5 text-primary-400">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/paper-analysis" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Paper Analysis
                </Link>
              </li>
              <li>
                <Link to="/research-trends" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Research Trends
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-300 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-5 text-primary-400">Powered By</h3>
            <ul className="space-y-3 text-base">
              <li className="text-gray-300 flex items-center">
                <span className="inline-block w-6 text-center mr-2">🦙</span> Ollama
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="inline-block w-6 text-center mr-2">🧠</span> Llama 3
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="inline-block w-6 text-center mr-2">⚛️</span> React
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="inline-block w-6 text-center mr-2">🟢</span> Node.js
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ResearchMate AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 