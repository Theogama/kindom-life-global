// Hero Background Video Configuration
// Multiple video source options for better compatibility

export const HERO_VIDEO_CONFIG = {
  // Primary video sources (try in order)
  videoSources: [
    {
      url: "https://drive.google.com/uc?export=download&id=1_xQDdWWzI-_R-b3YAlWWNlbAC4ZZtzXH",
      type: "video/mp4",
      name: "Google Drive Primary"
    },
    {
      url: "https://docs.google.com/uc?export=download&id=1_xQDdWWzI-_R-b3YAlWWNlbAC4ZZtzXH",
      type: "video/mp4", 
      name: "Google Drive Alternative"
    }
  ],
  
  // Fallback background when video fails
  fallback: {
    type: "gradient", // or "image"
    gradient: "from-primary/80 to-gold/60",
    image: null // Add image URL here if needed
  },
  
  // Video settings
  settings: {
    autoplay: true,
    muted: true,
    loop: true,
    playsInline: true
  }
};

// Instructions for better video hosting:
export const VIDEO_HOSTING_TIPS = `
For better video playback, consider:

1. Upload to YouTube (recommended):
   - Upload your video to YouTube
   - Use YouTube embed URL for background video
   - Better compression and delivery

2. Use a CDN service:
   - Cloudinary, AWS S3, or similar
   - Direct video URLs work better than Google Drive

3. Host locally:
   - Add video file to public/videos/ folder
   - Use relative path: /videos/hero-video.mp4

4. Use Vimeo:
   - Upload to Vimeo
   - Use Vimeo embed or direct video URL
`;
