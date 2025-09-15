import { useState, useEffect, useCallback } from 'react';

interface LiveStreamData {
  isLive: boolean;
  streamTitle?: string;
  viewerCount?: number;
  thumbnail?: string;
  streamUrl?: string;
}

interface UseLiveStreamOptions {
  channelId?: string;
  checkInterval?: number;
  apiKey?: string;
}

export const useLiveStream = ({
  channelId = 'UCmindedworshipminist8528',
  checkInterval = 30000, // 30 seconds
  apiKey
}: UseLiveStreamOptions = {}) => {
  const [streamData, setStreamData] = useState<LiveStreamData>({ isLive: false });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkLiveStatus = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // For demo purposes, we'll simulate the API call
      // In production, you would use the YouTube Data API v3
      if (apiKey) {
        // Real API implementation would look like this:
        // const response = await fetch(
        //   `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live&key=${apiKey}`
        // );
        // const data = await response.json();
        
        // For now, we'll simulate with random data
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Simulate live status (replace with actual API response parsing)
      const isCurrentlyLive = Math.random() > 0.8; // 20% chance of being live for demo

      if (isCurrentlyLive) {
        setStreamData({
          isLive: true,
          streamTitle: "Kingdom Life Global - Sunday Service Live",
          viewerCount: Math.floor(Math.random() * 500) + 50,
          thumbnail: "/api/placeholder/800/450",
          streamUrl: "https://www.youtube.com/@kingdommindedworshipminist8528/streams"
        });
      } else {
        setStreamData({ isLive: false });
      }
    } catch (err) {
      setError('Unable to check live status. Please try again later.');
      console.error('Error checking live status:', err);
    } finally {
      setIsLoading(false);
    }
  }, [channelId, apiKey]);

  useEffect(() => {
    checkLiveStatus();
    
    const interval = setInterval(checkLiveStatus, checkInterval);
    return () => clearInterval(interval);
  }, [checkLiveStatus, checkInterval]);

  return {
    ...streamData,
    isLoading,
    error,
    refetch: checkLiveStatus
  };
};

export default useLiveStream;
