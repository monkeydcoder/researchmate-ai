#!/bin/bash

# Start both backend and frontend for ResearchMate AI

echo "Starting ResearchMate AI (Backend and Frontend)..."

# Check if Ollama is running
if ! curl -s http://localhost:11434/api/version > /dev/null; then
  echo "Warning: Ollama doesn't seem to be running. Please start it first with:"
  echo "ollama serve"
  exit 1
fi

# Get the directory where this script is located
DIR="$(dirname "$0")"

# Start the backend in a new terminal window
echo "Starting backend..."
osascript <<EOD
tell application "Terminal"
  do script "cd \"$DIR\" && ./start-backend.sh"
end tell
EOD

# Wait a moment for backend to start
sleep 2

# Start the frontend in a new terminal window
echo "Starting frontend..."
osascript <<EOD
tell application "Terminal"
  do script "cd \"$DIR\" && ./start-frontend.sh"
end tell
EOD

echo "ResearchMate AI is starting!"
echo "- Backend will be available at: http://localhost:5000"
echo "- Frontend will be available at: http://localhost:3000" 