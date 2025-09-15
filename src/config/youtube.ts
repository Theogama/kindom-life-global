// YouTube API Configuration
// Get your API key from: https://console.developers.google.com/

export const YOUTUBE_CONFIG = {
  // Your YouTube Data API v3 key
  API_KEY: (typeof process !== 'undefined' && process.env?.REACT_APP_YOUTUBE_API_KEY) || 'AIzaSyCpn9d8g2UpznNvuOa4TXAJPDTiiqoRnyY',
  
  // Your channel handle (without @)
  CHANNEL_HANDLE: 'kingdommindedworshipminist8528',
  
  // Default settings
  DEFAULT_MAX_RESULTS: 4,
  DEFAULT_CHANNEL_URL: 'https://www.youtube.com/@kingdommindedworshipminist8528'
};

// Helper function to get the API key
export const getYouTubeApiKey = (): string => {
  const apiKey = (typeof process !== 'undefined' && process.env?.REACT_APP_YOUTUBE_API_KEY) || YOUTUBE_CONFIG.API_KEY;
  
  if (!apiKey) {
    console.warn('YouTube API key not found. Please set REACT_APP_YOUTUBE_API_KEY environment variable or update src/config/youtube.ts');
  }
  return apiKey;
};
