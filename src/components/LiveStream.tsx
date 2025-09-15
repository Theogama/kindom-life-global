import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Bell, BellOff, ExternalLink, Wifi, WifiOff, Eye } from "lucide-react";
import { useLiveStream } from "@/hooks/useLiveStream";
import { YOUTUBE_CONFIG, getYouTubeApiKey } from "@/config/youtube";

interface LiveStreamProps {
  channelId?: string;
  channelUrl?: string;
}

const LiveStream = ({ 
  channelId = "UCmindedworshipminist8528", 
  channelUrl = "https://www.youtube.com/@kingdommindedworshipminist8528/streams" 
}: LiveStreamProps) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [wasLive, setWasLive] = useState(false);
  
  const { 
    isLive, 
    streamTitle, 
    viewerCount, 
    isLoading, 
    error, 
    refetch 
  } = useLiveStream({ 
    channelId,
    apiKey: getYouTubeApiKey()
  });

  // Check if browser supports notifications
  const notificationSupported = 'Notification' in window;

  // Track when stream goes live to show notification
  useEffect(() => {
    if (isLive && !wasLive && notificationsEnabled) {
      showNotification("🔴 Kingdom Life Global is now LIVE!", "Join us for our Sunday service live stream.");
    }
    setWasLive(isLive);
  }, [isLive, wasLive, notificationsEnabled]);

  const showNotification = async (title: string, body: string) => {
    if (!notificationSupported) return;

    if (Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/favicon.ico',
        tag: 'kingdom-life-live'
      });
    } else if (Notification.permission !== 'denied') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification(title, {
          body,
          icon: '/favicon.ico',
          tag: 'kingdom-life-live'
        });
      }
    }
  };

  const toggleNotifications = async () => {
    if (!notificationSupported) {
      alert("Your browser doesn't support notifications.");
      return;
    }

    if (Notification.permission === 'denied') {
      alert("Notifications are blocked. Please enable them in your browser settings.");
      return;
    }

    if (Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setNotificationsEnabled(true);
      } else {
        alert("Notifications permission denied.");
        return;
      }
    } else {
      setNotificationsEnabled(!notificationsEnabled);
    }
  };

  const handleWatchLive = () => {
    if (isLive && streamTitle) {
      // Open the live stream in a new tab
      window.open(channelUrl, '_blank');
    } else {
      // Open the channel's live streams page
      window.open(channelUrl, '_blank');
    }
  };

  return (
    <Card className="church-card border-0 bg-gradient-to-br from-primary/5 to-gold/5">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className={`w-4 h-4 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`}></div>
          <CardTitle className="text-2xl font-semibold">
            {isLive ? 'LIVE NOW' : 'Live Stream'}
          </CardTitle>
        </div>
        
        {isLive && streamTitle && (
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground">
              {streamTitle}
            </p>
            {viewerCount && (
              <div className="flex justify-center items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {viewerCount} watching
                </span>
              </div>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="text-center space-y-6">
        {isLoading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 py-4">
            <p>{error}</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={refetch}
              className="mt-2"
            >
              Try Again
            </Button>
          </div>
        ) : (
          <>
            {isLive ? (
              <div className="space-y-4">
                <Badge variant="destructive" className="animate-pulse">
                  <Wifi className="h-3 w-3 mr-1" />
                  LIVE
                </Badge>
                <p className="text-muted-foreground">
                  Join us now for our live service!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <Badge variant="secondary">
                  <WifiOff className="h-3 w-3 mr-1" />
                  OFFLINE
                </Badge>
                <p className="text-muted-foreground">
                  No live stream at the moment. Check back during service times!
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Service Times:</p>
                  <p>Friday: 18:00 - 20:00</p>
                  <p>Sunday: 10:00 - 13:00</p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleWatchLive}
                className={`font-semibold w-full ${
                  isLive 
                    ? 'btn-gold text-white animate-pulse' 
                    : 'btn-royal text-white'
                }`}
                size="lg"
              >
                <Play className="h-4 w-4 mr-2" />
                {isLive ? 'Watch Live Now' : 'View Live Streams'}
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>

              {notificationSupported && (
                <Button
                  variant="outline"
                  onClick={toggleNotifications}
                  className="w-full"
                  size="sm"
                >
                  {notificationsEnabled ? (
                    <>
                      <BellOff className="h-4 w-4 mr-2" />
                      Disable Notifications
                    </>
                  ) : (
                    <>
                      <Bell className="h-4 w-4 mr-2" />
                      Get Live Notifications
                    </>
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveStream;
