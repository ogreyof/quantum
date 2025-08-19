"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { Sound } from "@/data/sounds";

interface SoundPlayerProps {
  sound: Sound;
  isPlaying: boolean;
  onPlayPause: () => void;
  onStop: () => void;
}

export const SoundPlayer = ({ sound, isPlaying, onPlayPause, onStop }: SoundPlayerProps) => {
  const [volume, setVolume] = useState([70]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume[0] / 100;
  }, [volume, isMuted]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRestart = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    setCurrentTime(0);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Card className="card-quantum">
      <CardContent className="p-6">
        <audio
          ref={audioRef}
          src={sound.audioUrl}
          loop
          onEnded={onStop}
        />

        <div className="space-y-4">
          {/* Informações do Som */}
          <div className="text-center">
            <div className="text-4xl mb-2">{sound.icon}</div>
            <h3 className="font-bold text-lg">{sound.title}</h3>
            <p className="text-sm text-muted-foreground">{sound.description}</p>
          </div>

          {/* Barra de Progresso */}
          <div className="space-y-2">
            <Slider
              value={[progress]}
              onValueChange={handleSeek}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRestart}
              className="h-10 w-10"
            >
              <RotateCcw className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              onClick={onPlayPause}
              className="h-12 w-12 bg-gradient-quantum hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-white" />
              ) : (
                <Play className="h-6 w-6 text-white ml-1" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
              className="h-10 w-10"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Controle de Volume */}
          <div className="flex items-center gap-3">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground w-8">
              {isMuted ? 0 : volume[0]}
            </span>
          </div>

          {/* Benefícios */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Benefícios:</h4>
            <div className="flex flex-wrap gap-1">
              {sound.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};