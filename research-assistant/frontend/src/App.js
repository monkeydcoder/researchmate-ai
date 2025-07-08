import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PaperAnalysis from './pages/PaperAnalysis';
import ResearchTrends from './pages/ResearchTrends';
import About from './pages/About';
import CitationGenerator from './pages/CitationGenerator';
import ResearchQuestionsGenerator from './pages/ResearchQuestionsGenerator';
import LiteratureReviewHelper from './pages/LiteratureReviewHelper';
import Documentation from './pages/Documentation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-950">
        <div className="fixed inset-0 bg-neural-pattern opacity-5 pointer-events-none z-0"></div>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paper-analysis" element={<PaperAnalysis />} />
            <Route path="/research-trends" element={<ResearchTrends />} />
            <Route path="/citation-generator" element={<CitationGenerator />} />
            <Route path="/research-questions" element={<ResearchQuestionsGenerator />} />
            <Route path="/literature-review" element={<LiteratureReviewHelper />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
