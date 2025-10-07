import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const QUALITY = 80;
const MAX_WIDTH = 1920;

async function getAllImageFiles(dir) {
  const files = [];
  const items = await readdir(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stats = await stat(fullPath);
    
    if (stats.isDirectory()) {
      continue;
    }
    
    const ext = extname(item).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.heic'].includes(ext)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function optimizeImage(filePath) {
  try {
    const stats = await stat(filePath);
    const originalSize = stats.size;
    const ext = extname(filePath).toLowerCase();
    
    // Skip if already under 2MB
    if (originalSize < MAX_FILE_SIZE) {
      console.log(`✓ Skipping ${filePath} (already optimized: ${(originalSize / 1024 / 1024).toFixed(2)}MB)`);
      return;
    }
    
    console.log(`🔄 Optimizing ${filePath} (${(originalSize / 1024 / 1024).toFixed(2)}MB)...`);
    
    // Create a temporary optimized version
    const tempPath = filePath + '.optimized';
    
    let pipeline = sharp(filePath);
    
    // Get metadata to check dimensions
    const metadata = await pipeline.metadata();
    
    // Resize if too large
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Optimize based on format (keep same format to preserve imports)
    if (ext === '.png') {
      // Optimize PNG
      await pipeline
        .png({ quality: QUALITY, compressionLevel: 9, effort: 10 })
        .toFile(tempPath);
      
      const newStats = await stat(tempPath);
      
      // Replace original if smaller
      if (newStats.size < originalSize) {
        const { rename } = await import('fs/promises');
        await rename(tempPath, filePath);
        console.log(`✓ Optimized ${filePath}`);
        console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024 / 1024).toFixed(2)}MB (${((1 - newStats.size / originalSize) * 100).toFixed(1)}% reduction)`);
      } else {
        const { unlink } = await import('fs/promises');
        await unlink(tempPath);
        console.log(`✓ Kept original ${filePath} (optimized version wasn't smaller)`);
      }
      
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      // Optimize JPG
      await pipeline
        .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
        .toFile(tempPath);
      
      const newStats = await stat(tempPath);
      
      // Replace original if smaller
      if (newStats.size < originalSize) {
        const { rename } = await import('fs/promises');
        await rename(tempPath, filePath);
        console.log(`✓ Optimized ${filePath}`);
        console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024 / 1024).toFixed(2)}MB (${((1 - newStats.size / originalSize) * 100).toFixed(1)}% reduction)`);
      } else {
        const { unlink } = await import('fs/promises');
        await unlink(tempPath);
        console.log(`✓ Kept original ${filePath} (optimized version wasn't smaller)`);
      }
      
    } else if (ext === '.heic') {
      // Convert HEIC to JPEG
      const newPath = filePath.replace(/\.heic$/i, '.jpg');
      await pipeline
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(newPath);
      
      const newStats = await stat(newPath);
      console.log(`✓ Converted ${filePath} → ${newPath}`);
      console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024 / 1024).toFixed(2)}MB`);
      
    } else {
      // For WebP and AVIF, just optimize
      await pipeline
        .toFile(tempPath);
      
      const newStats = await stat(tempPath);
      
      if (newStats.size < originalSize) {
        const { rename } = await import('fs/promises');
        await rename(tempPath, filePath);
        console.log(`✓ Optimized ${filePath}`);
        console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024 / 1024).toFixed(2)}MB`);
      } else {
        const { unlink } = await import('fs/promises');
        await unlink(tempPath);
      }
    }
    
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

async function main() {
  const assetsDir = './attached_assets';
  
  if (!existsSync(assetsDir)) {
    console.error(`Assets directory not found: ${assetsDir}`);
    process.exit(1);
  }
  
  console.log('🚀 Starting image optimization...\n');
  
  const imageFiles = await getAllImageFiles(assetsDir);
  console.log(`Found ${imageFiles.length} images to process\n`);
  
  for (const file of imageFiles) {
    await optimizeImage(file);
  }
  
  console.log('\n✨ Image optimization complete!');
}

main().catch(console.error);
