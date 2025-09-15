import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveStream from "@/components/LiveStream";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Radio, Tv, Download, Calendar, Eye, ExternalLink, RefreshCw } from "lucide-react";
import { useYouTubeVideos } from "@/hooks/useYouTubeVideos";
import { formatDate, extractSpeaker, truncateDescription, formatViewCount } from "@/utils/youtubeHelpers";
import { YOUTUBE_CONFIG, getYouTubeApiKey } from "@/config/youtube";

const Media = () => {
  const { videos, isLoading, error, refetch } = useYouTubeVideos({
    channelHandle: `@${YOUTUBE_CONFIG.CHANNEL_HANDLE}`,
    maxResults: YOUTUBE_CONFIG.DEFAULT_MAX_RESULTS,
    apiKey: getYouTubeApiKey()
  });

  const liveStreams = [
    {
      platform: "YouTube",
      title: "Sunday Service Live",
      time: "Sundays 10:00 AM",
      icon: Tv
    },
    {
      platform: "Facebook Live", 
      title: "Friday Fellowship",
      time: "Fridays 6:00 PM",
      icon: Radio
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
            Media{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our collection of sermons, teachings, and live streams. 
            Let God's Word transform your life wherever you are.
          </p>
        </div>
      </section>

      {/* YouTube Live Stream */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Live Stream
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Never miss a service! Watch our live streams on YouTube and get notified when we go live. Join us live from anywhere in the world.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <LiveStream 
              channelUrl="https://www.youtube.com/@kingdommindedworshipminist8528/streams"
            />
          </div>
        </div>
      </section>

      {/* Live Streaming Platforms */}
      

      {/* Recent Sermons */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Recent Sermons
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Catch up on our latest messages and teachings from our spiritual leaders.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={refetch} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </div>
          ) : (
            <>
          <div className="grid lg:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <Card key={video.id} className="church-card border-0 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                      {/* Large Thumbnail with Play Button */}
                      <div className="mb-4 relative group cursor-pointer" onClick={() => window.open(video.videoUrl, '_blank')}>
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors duration-200">
                            <Play className="h-8 w-8 text-black" />
                          </div>
                        </div>
                        {/* Duration Badge */}
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        {/* View Count Badge */}
                        <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {formatViewCount(video.viewCount)}
                        </div>
                      </div>
                      
                      {/* Video Info */}
                      <div className="space-y-2">
                        <CardTitle className="text-lg font-semibold leading-tight">
                          {video.title}
                      </CardTitle>
                      <p className="text-primary font-medium text-sm">
                          {extractSpeaker(video.title)}
                      </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                          {formatDate(video.publishedAt)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed mb-4">
                        {truncateDescription(video.description)}
                  </CardDescription>
                  <div className="flex gap-2">
                        <Button 
                          onClick={() => window.open(video.videoUrl, '_blank')}
                          className="btn-gold text-white font-semibold flex-1"
                        >
                      <Play className="h-4 w-4 mr-2" />
                          Watch on YouTube
                          <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => window.open(video.videoUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  className="font-semibold"
                  onClick={() => window.open(`${YOUTUBE_CONFIG.DEFAULT_CHANNEL_URL}/videos`, '_blank')}
                >
                  View All Sermons on YouTube
                  <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
            </>
          )}
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Glimpse into the life of our church community through photos from our services and events.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-secondary/30 rounded-lg flex items-center justify-center hover:bg-secondary/50 transition-colors cursor-pointer">
                <Eye className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button className="btn-royal text-white font-semibold">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;