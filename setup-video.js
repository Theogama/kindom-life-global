#!/usr/bin/env node

/**
 * Video Setup Script for Kingdom Life Global
 * This script helps set up the hero background video
 */

const fs = require('fs');
const path = require('path');

console.log('🎬 Kingdom Life Global - Video Setup Helper\n');

// Check if videos directory exists
const videosDir = path.join(process.cwd(), 'public', 'videos');
const videoFile = path.join(videosDir, 'hero-background.mp4');

console.log('📁 Checking video directory...');

if (!fs.existsSync(videosDir)) {
  console.log('📂 Creating videos directory...');
  fs.mkdirSync(videosDir, { recursive: true });
  console.log('✅ Videos directory created at: public/videos/');
} else {
  console.log('✅ Videos directory already exists');
}

console.log('\n🎥 Checking for video file...');

if (fs.existsSync(videoFile)) {
  const stats = fs.statSync(videoFile);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Video file found: hero-background.mp4 (${fileSizeMB} MB)`);
  
  if (stats.size > 50 * 1024 * 1024) { // 50MB
    console.log('⚠️  Warning: Video file is quite large. Consider compressing it for better performance.');
  }
} else {
  console.log('❌ Video file not found: public/videos/hero-background.mp4');
  console.log('\n📥 To set up your video:');
  console.log('1. Download your video from Google Drive');
  console.log('2. Rename it to "hero-background.mp4"');
  console.log('3. Place it in the public/videos/ folder');
  console.log('\n📖 See VIDEO_SETUP_GUIDE.md for detailed instructions');
}

console.log('\n🚀 Next steps:');
console.log('1. Make sure your video is at: public/videos/hero-background.mp4');
console.log('2. Start your development server: npm run dev');
console.log('3. Check the hero section for video playback');

console.log('\n✨ Video setup complete!');
