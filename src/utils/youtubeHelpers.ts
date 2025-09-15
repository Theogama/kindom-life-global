// Helper functions for YouTube video processing

export const formatDuration = (duration: string): string => {
  // Convert ISO 8601 duration (PT45M32S) to readable format (45:32)
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return duration;

  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const formatViewCount = (count: string | number): string => {
  const num = typeof count === 'string' ? parseInt(count.replace(/,/g, '')) : count;
  
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return 'Yesterday';
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 14) {
    return '1 week ago';
  } else if (diffDays < 30) {
    return `${Math.floor(diffDays / 7)} weeks ago`;
  } else if (diffDays < 365) {
    return `${Math.floor(diffDays / 30)} months ago`;
  } else {
    return `${Math.floor(diffDays / 365)} years ago`;
  }
};

export const extractSpeaker = (title: string): string => {
  // Try to extract speaker name from title
  const speakerPatterns = [
    /(?:by|from|with)\s+([A-Za-z\s]+?)(?:\s*[-–]|\s*\||\s*$)/i,
    /([A-Za-z\s]+?)\s*[-–]\s*(?:sermon|message|teaching)/i,
    /(?:Apostle|Pastor|Reverend|Dr\.)\s+([A-Za-z\s]+?)(?:\s*[-–]|\s*$)/i
  ];

  for (const pattern of speakerPatterns) {
    const match = title.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  // Default speakers based on common patterns
  if (title.toLowerCase().includes('michael')) {
    return 'Apostle Michael Rhema';
  } else if (title.toLowerCase().includes('refiloe')) {
    return 'Apostle Refiloe Rhema';
  }

  return 'Kingdom Life Global';
};

export const truncateDescription = (description: string, maxLength: number = 150): string => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength).trim() + '...';
};
