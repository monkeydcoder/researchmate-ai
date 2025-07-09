# ResearchMate AI

🚀 A privacy-focused, locally-run research assistant powered by Ollama & Llama 3.

---

## 🎥 Demo Video

[Watch the walkthrough on Loom](https://www.loom.com/share/f0cf23e5e03546e5875df76d9d26199b?sid=43511f12-3fcf-43cb-bfdd-4964c7713bf9)

---

Summarize papers, extract insights, generate citations, brainstorm research questions, and more—all on your own machine! 🧑‍💻📄🔒

---

## 🚀 Features

- **Paper Summarization:** Turn lengthy research papers into concise, readable summaries
- **Key Insights Extraction:** Identify and extract the most important findings and contributions
- **Research Trends:** Explore the latest developments in your field with AI-curated trends
- **Citation Generator:** Create properly formatted citations (APA, MLA, Chicago, etc.)
- **Research Questions Generator:** Brainstorm focused, researchable questions for your topic
- **Literature Review Helper:** Organize and synthesize papers into a coherent review
- **Privacy-Focused:** All processing happens locally using Ollama and Llama 3—your data never leaves your computer

---

## 🏗️ Architecture

```
User (Web Browser)
    │
    ▼
Frontend (React, Tailwind CSS)
    │  (HTTP requests)
    ▼
Backend (Node.js, Express)
    │  (API calls)
    ▼
Ollama (Llama 3 model runs locally)
```

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:3001
- **Ollama API:** http://localhost:11434

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Ollama](https://ollama.ai/) installed on your machine
- Llama 3 model pulled in Ollama

---

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/research-assistant.git
cd research-assistant
```

### 2. Install dependencies
```bash
# Backend
yarn install # or npm install (in research-assistant/backend)
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Set up Ollama and Llama 3
```bash
ollama serve
ollama pull llama3
```

### 4. Start the backend (port 3001)
```bash
cd backend
PORT=3001 node server.js
```

### 5. Start the frontend (port 3000)
```bash
cd ../frontend
npm start
```

### 6. Open your browser
Go to [http://localhost:3000](http://localhost:3000)

---

## 🧑‍💻 Usage Guide

- **Paper Analysis:**
  - Go to "Paper Analysis"
  - Paste your research paper text
  - Choose summary, key insights, or both
  - Get instant AI-powered results

- **Research Trends:**
  - Go to "Research Trends"
  - Enter a topic (e.g., "transformer models")
  - Get a summary of recent developments

- **Citation Generator:**
  - Go to "Citation Generator"
  - Enter paper details and select format
  - Get a ready-to-use citation

- **Research Questions Generator:**
  - Go to "Research Questions"
  - Enter your topic and context
  - Get focused, researchable questions

- **Literature Review Helper:**
  - Go to "Literature Review"
  - Add papers and a research topic
  - Get a structured literature review draft

---

## 🗂️ Project Structure

```
research-assistant/
├── backend/               # Node.js + Express backend
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
├── frontend/              # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── package.json       # Frontend dependencies
├── docs/                  # Additional documentation
│   ├── API.md             # API documentation
│   └── Ollama-Setup.md    # Ollama setup guide
├── start-all.sh           # Script to start both servers (macOS)
├── README.md              # Project documentation
└── QUICK-START.md         # Quick start guide
```

---

## 🧩 Technology Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express
- **AI Processing:** Ollama, Llama 3

---

## 🛟 Troubleshooting & FAQ

- **Ollama not running?**
  - Make sure you started it with `ollama serve`
- **Model not found?**
  - Run `ollama pull llama3` to download the model
- **Port already in use?**
  - Change the backend port in `backend/server.js` or use `PORT=xxxx node server.js`
- **Frontend not connecting?**
  - Ensure backend is running on port 3001 and Ollama is running
- **Slow responses?**
  - Large papers or limited hardware may slow down processing

---

## 🌍 Deploying to GitHub

1. **Initialize git (if not already):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. **Create a new repo on GitHub**
3. **Add remote and push:**
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgements

- [Ollama](https://ollama.ai/) for local LLM serving
- [Meta AI](https://ai.meta.com/) for Llama 3
- All contributors and open source libraries used 