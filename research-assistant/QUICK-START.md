# ResearchMate AI Quick Start Guide

This guide will help you quickly get started with ResearchMate AI on your machine.

## Prerequisites

Before you begin, make sure you have the following installed:

1. [Node.js and npm](https://nodejs.org/) (v14 or higher)
2. [Ollama](https://ollama.ai/download) 

## Step 1: Install Ollama

Download and install Ollama from [ollama.ai/download](https://ollama.ai/download).

## Step 2: Pull the Llama 3 Model

Open Terminal and run:

```bash
ollama pull llama3
```

This will download the Llama 3 model for local use.

## Step 3: Start Ollama

Make sure Ollama is running:

```bash
ollama serve
```

Keep this terminal window open.

## Step 4: Start ResearchMate AI

### Using the convenience scripts (macOS only)

1. Open a new terminal window
2. Navigate to the research-assistant directory
3. Run the start script:

```bash
./start-all.sh
```

This will open two new terminal windows for the backend and frontend.

### Manual start

#### Start the backend:

```bash
cd research-assistant/backend
npm install
npm run dev
```

#### Start the frontend (in a new terminal):

```bash
cd research-assistant/frontend
npm install
npm start
```

## Step 5: Access the Application

Open your browser and go to:

```
http://localhost:3000
```

## What Can You Do?

1. **Analyze Research Papers**: Paste paper text to get summaries and key insights
2. **Explore Research Trends**: Search for the latest research in various ML/AI topics
3. **All Powered Locally**: All processing happens on your machine using Ollama and Llama 3

## Troubleshooting

- **Backend Not Starting**: Ensure Ollama is running with `ollama serve`
- **Frontend Not Connecting**: Verify the backend is running on port 5000
- **Slow Responses**: Larger papers may take longer to process depending on your hardware

## Next Steps

Refer to the following resources for more information:

- Full README.md in the project root
- API documentation in `docs/API.md`
- Ollama setup details in `docs/Ollama-Setup.md` 