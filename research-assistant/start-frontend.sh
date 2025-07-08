#!/bin/bash

# Start the frontend server for ResearchMate AI

echo "Starting ResearchMate AI Frontend..."

# Navigate to the frontend directory
cd "$(dirname "$0")/frontend"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the development server
echo "Starting frontend on http://localhost:3000..."
npm start 