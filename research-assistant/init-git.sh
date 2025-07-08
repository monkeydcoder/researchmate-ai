#!/bin/bash

# Initialize git repository for ResearchMate AI

echo "Initializing git repository for ResearchMate AI..."

# Get the directory where this script is located
DIR="$(dirname "$0")"
cd "$DIR"

# Initialize git repository
git init

# Create .gitignore file
cat > .gitignore << EOL
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/frontend/build

# Misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE files
.idea/
.vscode/
*.sublime-project
*.sublime-workspace
EOL

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: ResearchMate AI application"

echo "Git repository initialized successfully!"
echo "You can now push to your remote repository with:"
echo "git remote add origin <your-repository-url>"
echo "git push -u origin main" 