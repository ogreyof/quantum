"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Maximize2, Volume2 } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  autoplay?: boolean;
  showControls?: boolean;
  className?: string;
}

export const VideoPlayer = ({ 
  videoUrl, 
  title = "Vídeo do Exercício",
  autoplay = false,
  showControls = true,
  className = ""
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Converter URL do YouTube para embed
  const getEmbedUrl = (url: string) => {
    const videoId = url.includes('youtu.be/') 
      ? url.split('youtu.be/')[1].split('?')[0]
      : url.split('v=')[1]?.split('&')[0];
    
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}`;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <Card className={`card-quantum overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="relative aspect-video bg-black">
          {isPlaying || autoplay ? (
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              {/* Thumbnail placeholder */}
              <div className="absolute inset-0 bg-black/50"></div>
              <Button
                size="icon"
                className="h-16 w-16 bg-gradient-quantum hover:scale-110 transition-transform duration-200 relative z-10"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="h-8 w-8 text-white ml-1" />
              </Button>
              
              {/* Overlay com título */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-white/80 text-sm">Clique para assistir</p>
              </div>
            </div>
          )}
        </div>
        
        {showControls && (
          <div className="p-4 bg-card">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-card-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">Vídeo demonstrativo do exercício</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};