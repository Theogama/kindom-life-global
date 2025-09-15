import { useState, useEffect, useCallback } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  viewCount: string;
  videoUrl: string;
  channelTitle: string;
}

interface UseYouTubeVideosOptions {
  channelId?: string;
  channelHandle?: string;
  maxResults?: number;
  apiKey?: string;
}

export const useYouTubeVideos = ({
  channelId,
  channelHandle = '@kingdommindedworshipminist8528',
  maxResults = 4,
  apiKey
}: UseYouTubeVideosOptions = {}) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      let actualChannelId = channelId;

      // If no channel ID provided, try to get it from the handle
      if (!actualChannelId && channelHandle && apiKey) {
        try {
          const channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${channelHandle.replace('@', '')}&key=${apiKey}`
          );
          const channelData = await channelResponse.json();
          
          if (channelData.items && channelData.items.length > 0) {
            actualChannelId = channelData.items[0].id;
          }
        } catch (err) {
          console.warn('Could not fetch channel ID from handle:', err);
        }
      }

      // Use real YouTube API if we have the required data
      if (apiKey && actualChannelId) {
        // First, search for recent videos from the channel
        const searchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${actualChannelId}&type=video&order=date&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!searchResponse.ok) {
          throw new Error(`YouTube API error: ${searchResponse.status}`);
        }

        const searchData = await searchResponse.json();

        if (!searchData.items || searchData.items.length === 0) {
          throw new Error('No videos found for this channel');
        }

        // Get video details for duration and view count
        const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');
        const videoDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`
        );

        if (!videoDetailsResponse.ok) {
          throw new Error(`YouTube API error: ${videoDetailsResponse.status}`);
        }

        const videoDetailsData = await videoDetailsResponse.json();

        // Combine search results with video details
        const processedVideos: YouTubeVideo[] = searchData.items.map((item: any, index: number) => {
          const details = videoDetailsData.items[index];
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
            publishedAt: item.snippet.publishedAt,
            duration: details?.contentDetails?.duration || '0:00',
            viewCount: details?.statistics?.viewCount || '0',
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelTitle: item.snippet.channelTitle
          };
        });

        setVideos(processedVideos);
        return;
      }

      // Fallback to mock data if no API key or channel ID
      console.warn('Using mock data - provide API key and channel ID for real data');

      // Simulate realistic church sermon videos
      const mockVideos: YouTubeVideo[] = [
        {
          id: '1',
          title: "Walking in Divine Purpose - Kingdom Life Global",
          description: "Discover God's plan for your life and learn to walk in the purpose He has designed for you. Join Apostle Michael Rhema as he shares powerful insights from God's Word.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
          duration: "45:32",
          viewCount: "2,156",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          channelTitle: "Kingdom Life Global"
        },
        {
          id: '2',
          title: "Faith That Moves Mountains - Sunday Service",
          description: "Learn how to develop unshakeable faith that can overcome any obstacle in your path. A powerful message from Apostle Refiloe Rhema.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
          duration: "52:18",
          viewCount: "1,847",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          channelTitle: "Kingdom Life Global"
        },
        {
          id: '3',
          title: "The Power of Prayer - Friday Fellowship",
          description: "Understanding the principles and power of effective prayer in the believer's life. Join us for this transformative teaching.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 2 weeks ago
          duration: "38:45",
          viewCount: "3,234",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          channelTitle: "Kingdom Life Global"
        },
        {
          id: '4',
          title: "Living in Victory - Kingdom Life Global",
          description: "How to live in the victory that Christ has already won for us on the cross. A life-changing message for every believer.",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          publishedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(), // 3 weeks ago
          duration: "41:12",
          viewCount: "2,567",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          channelTitle: "Kingdom Life Global"
        }
      ];

      setVideos(mockVideos);
    } catch (err) {
      setError('Unable to load recent videos. Please try again later.');
      console.error('Error fetching YouTube videos:', err);
    } finally {
      setIsLoading(false);
    }
  }, [channelId, maxResults, apiKey]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return {
    videos,
    isLoading,
    error,
    refetch: fetchVideos
  };
};

export default useYouTubeVideos;
