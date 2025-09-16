// YouTube API Configuration
// Get your API key from: https://console.developers.google.com/

export const YOUTUBE_CONFIG = {
  // Your YouTube Data API v3 key
  API_KEY: import.meta.env.VITE_YOUTUBE_API_KEY,
  
  // Your channel handle (without @)
  CHANNEL_HANDLE: 'kingdommindedworshipminist8528',
  
  // Default settings
  DEFAULT_MAX_RESULTS: 4,
  DEFAULT_CHANNEL_URL: 'https://www.youtube.com/@kingdommindedworshipminist8528'
};

// Helper function to get the API key
export const getYouTubeApiKey = (): string => {
  const apiKey = YOUTUBE_CONFIG.API_KEY;
  
  if (!apiKey) {
    console.warn('YouTube API key not found. Please set VITE_YOUTUBE_API_KEY environment variable in your .env file');
  }
  return apiKey;
};
