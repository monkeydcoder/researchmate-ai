import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { summarizePaper, extractInsights } from '../services/api';
import ReactMarkdown from 'react-markdown';
import { paperAnalysisActions } from '../store';

const famousPapers = [
  {
    title: 'Attention Is All You Need',
    url: 'https://arxiv.org/abs/1706.03762',
    abstract: `The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.`
  },
  {
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    url: 'https://arxiv.org/abs/1810.04805',
    abstract: `We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks, such as question answering and language inference, without substantial task-specific architecture modifications. BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven NLP tasks, including pushing the GLUE score to 80.5% (7.6% absolute improvement), MultiNLI accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`
  },
  {
    title: 'ImageNet Classification with Deep Convolutional Neural Networks',
    url: 'https://www.cs.toronto.edu/~fritz/absps/imagenet.pdf',
    abstract: `We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0% which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully-connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overfitting in the fully-connected layers we employed a recently-developed regularization method called “dropout”. We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry. Our results show that a deep convolutional neural network is a highly effective architecture for image classification and can be efficiently trained on large datasets with millions of labeled images.`
  },
  {
    title: 'A Survey of Deep Learning',
    url: 'https://www.sciencedirect.com/science/article/pii/S0893608014002135',
    abstract: `Deep learning allows computational models that are composed of multiple processing layers to learn representations of data with multiple levels of abstraction. These methods have dramatically improved the state-of-the-art in speech recognition, visual object recognition, object detection and many other domains such as drug discovery and genomics. Deep learning discovers intricate structure in large data sets by using the backpropagation algorithm to indicate how a machine should change its internal parameters that are used to compute the representation in each layer from the representation in the previous layer. Deep convolutional nets have brought about breakthroughs in processing images, video, speech and audio, whereas recurrent nets have shone light on sequential data such as text and speech.`
  }
];

export default function PaperAnalysis() {
  const dispatch = useDispatch();
  const { input, result, loading } = useSelector(state => state.paperAnalysis);
  
  const [activeTab, setActiveTab] = useState('summarize');
  const [error, setError] = useState('');
  const [results, setResults] = useState({ summary: '', insights: '' });
  const [copiedIndex, setCopiedIndex] = useState(null);

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

  const handleCopy = (abstract, idx) => {
    navigator.clipboard.writeText(abstract);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
      {/* Try with a Famous Paper Section */}
      <div className="mb-8 bg-dark-800 rounded-lg p-6 border border-dark-700 shadow-card">
        <h2 className="text-lg font-semibold text-primary-400 mb-4">Try with a Famous Paper</h2>
        <ul className="space-y-3">
          {famousPapers.map((paper, idx) => (
            <li key={paper.title} className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <a href={paper.url} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline font-medium mb-1 md:mb-0">{paper.title}</a>
              <button
                onClick={() => handleCopy(paper.abstract, idx)}
                className="ml-0 md:ml-2 px-3 py-1 rounded bg-primary-600 text-white text-xs font-semibold hover:bg-primary-500 transition-colors duration-200"
              >
                {copiedIndex === idx ? 'Copied!' : 'Copy Abstract'}
              </button>
            </li>
          ))}
        </ul>
      </div>
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