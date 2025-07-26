#!/usr/bin/env node

// Quick fix for deployment - runs build and fixes file structure in one command
import { execSync } from 'child_process';

console.log('🚀 Running complete deployment build...');
console.log('');

try {
  // Step 1: Build the application
  console.log('1️⃣ Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully.');
  console.log('');
  
  // Step 2: Fix deployment structure
  console.log('2️⃣ Fixing deployment structure...');
  execSync('node fix-deployment.js', { stdio: 'inherit' });
  console.log('');
  
  console.log('🎉 Deployment is ready!');
  console.log('');
  console.log('📁 Files are now in the correct location (dist/) for deployment.');
  console.log('🚀 You can now deploy using Replit\'s deployment feature.');
  console.log('');
  console.log('💡 For static hosting, you can use: node simple-express-server.js');
  
} catch (error) {
  console.error('❌ Error during deployment preparation:', error.message);
  console.log('');
  console.log('🔧 Try running the following commands manually:');
  console.log('   1. npm run build');
  console.log('   2. node fix-deployment.js');
  process.exit(1);
}