#!/bin/bash

# Start the backend server for ResearchMate AI

echo "Starting ResearchMate AI Backend..."

# Check if Ollama is running
if ! curl -s http://localhost:11434/api/version > /dev/null; then
  echo "Warning: Ollama doesn't seem to be running. Please start it first with:"
  echo "ollama serve"
  exit 1
fi

# Navigate to the backend directory
cd "$(dirname "$0")/backend"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the server
echo "Starting server on http://localhost:5000..."
npm run dev 