#!/usr/bin/env node

// Post-build script to move files from dist/public/ to dist/ for deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function moveFiles(source, destination) {
  console.log(`Moving files from ${source} to ${destination}...`);
  
  // Check if source exists
  if (!fs.existsSync(source)) {
    console.log(`Source directory ${source} doesn't exist. Nothing to move.`);
    return;
  }

  // Create destination if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all files from source
  const files = fs.readdirSync(source);
  
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      // Recursively move directories
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      moveFiles(sourcePath, destPath);
    } else {
      // Move files
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Moved: ${file}`);
    }
  });
}

try {
  const distPublic = path.join(__dirname, 'dist/public');
  const dist = path.join(__dirname, 'dist');
  
  console.log('🔧 Fixing deployment structure...');
  
  // Move all files from dist/public/ to dist/
  moveFiles(distPublic, dist);
  
  // Remove the now-empty dist/public directory
  if (fs.existsSync(distPublic)) {
    fs.rmSync(distPublic, { recursive: true, force: true });
    console.log('Removed dist/public directory');
  }
  
  console.log('✅ Deployment structure fixed successfully!');
  console.log('📁 Static files are now in the dist/ directory as expected by deployment.');
  
} catch (error) {
  console.error('❌ Error fixing deployment structure:', error.message);
  process.exit(1);
}