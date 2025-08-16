"use client";

import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Sound } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface SoundPlayerProps {
  sound: Sound;
  className?: string;
}

export function SoundPlayer({ sound, className }: SoundPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const categoryColors = {
    spa: "from-purple-500/20 to-pink-500/20",
    natureza: "from-green-500/20 to-blue-500/20",
    binaural: "from-indigo-500/20 to-purple-500/20",
    respiracao: "from-cyan-500/20 to-teal-500/20"
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Aqui seria implementada a lógica real de reprodução de áudio
  };

  return (
    <div className={cn("quantum-card", className)}>
      <div className={cn(
        "w-full h-24 rounded-lg mb-3 flex items-center justify-center bg-gradient-to-br",
        categoryColors[sound.category]
      )}>
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          {isPlaying ? (
            <Pause size={20} className="text-white" />
          ) : (
            <Play size={20} className="text-white ml-1" />
          )}
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-white">{sound.title}</h3>
          <p className="text-sm text-gray-400">{sound.description}</p>
        </div>

        {sound.duration && (
          <div className="text-xs text-gray-500">
            Duração: {sound.duration} min
          </div>
        )}

        <div className="flex items-center gap-2">
          <Volume2 size={16} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 h-1 bg-quantum-muted rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #7B61FF 0%, #7B61FF ${volume}%, #2A2F45 ${volume}%, #2A2F45 100%)`
            }}
          />
          <span className="text-xs text-gray-400 w-8">{volume}%</span>
        </div>
      </div>
    </div>
  );
}