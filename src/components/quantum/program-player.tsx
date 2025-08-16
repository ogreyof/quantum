"use client";

import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, X, AlertTriangle } from "lucide-react";
import { Program } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ProgramPlayerProps {
  program: Program;
  onClose: () => void;
  onComplete?: () => void;
}

export function ProgramPlayer({ program, onClose, onComplete }: ProgramPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const [showContraindications, setShowContraindications] = useState(true);

  const totalTime = program.duration * 60; // converter para segundos
  const progress = (currentTime / totalTime) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < totalTime) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= totalTime) {
            setIsPlaying(false);
            onComplete?.();
            return totalTime;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, totalTime, onComplete]);

  const togglePlay = () => {
    if (showContraindications) {
      setShowContraindications(false);
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const skipTime = (seconds: number) => {
    setCurrentTime(prev => Math.max(0, Math.min(totalTime, prev + seconds)));
  };

  if (showContraindications && program.contraindications) {
    return (
      <div className="fixed inset-0 bg-quantum-dark z-50 flex items-center justify-center p-4">
        <div className="quantum-card max-w-md w-full">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={24} className="text-yellow-400" />
            <h2 className="text-xl font-bold text-white">Atenção - Contraindicações</h2>
          </div>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-300 text-sm">
              Este programa pode não ser adequado se você possui alguma das condições abaixo:
            </p>
            
            <ul className="space-y-2">
              {program.contraindications.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-xs text-gray-400 mt-4">
              Consulte um profissional de saúde em caso de dúvidas.
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="flex-1 quantum-button-outline"
            >
              Cancelar
            </button>
            <button 
              onClick={() => setShowContraindications(false)}
              className="flex-1 quantum-button"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-quantum-dark z-50">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-quantum-muted">
          <div>
            <h1 className="text-lg font-bold text-white">{program.title}</h1>
            <p className="text-sm text-gray-400">{program.duration} minutos</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-quantum-secondary rounded-full"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Video/Animation Area */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-quantum-primary/10 to-quantum-accent/10 m-4 rounded-xl">
          <div className="text-center">
            <div className="w-32 h-32 bg-quantum-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                isPlaying ? "bg-quantum-primary animate-pulse-glow" : "bg-quantum-primary/50"
              )}>
                {isPlaying ? (
                  <Pause size={24} className="text-white" />
                ) : (
                  <Play size={24} className="text-white ml-1" />
                )}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">
              {isPlaying ? "Sessão em Andamento" : "Pronto para Começar"}
            </h3>
            <p className="text-gray-400 text-sm px-4">
              {isPlaying 
                ? "Relaxe e aproveite sua sessão de massagem" 
                : "Toque play quando estiver confortável"
              }
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 mb-4">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
          <div className="w-full bg-quantum-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={() => skipTime(-30)}
              className="p-3 bg-quantum-secondary rounded-full"
            >
              <SkipBack size={20} className="text-gray-400" />
            </button>
            
            <button 
              onClick={togglePlay}
              className="p-4 bg-quantum-primary rounded-full hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause size={28} className="text-white" />
              ) : (
                <Play size={28} className="text-white ml-1" />
              )}
            </button>
            
            <button 
              onClick={() => skipTime(30)}
              className="p-3 bg-quantum-secondary rounded-full"
            >
              <SkipForward size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3">
            <Volume2 size={20} className="text-gray-400" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-2 bg-quantum-muted rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #7B61FF 0%, #7B61FF ${volume}%, #2A2F45 ${volume}%, #2A2F45 100%)`
              }}
            />
            <span className="text-sm text-gray-400 w-10">{volume}%</span>
          </div>

          {/* Benefits */}
          <div className="quantum-card">
            <h4 className="font-medium text-white mb-2">Benefícios desta sessão:</h4>
            <div className="flex flex-wrap gap-2">
              {program.benefits.map((benefit, index) => (
                <span key={index} className="text-xs bg-quantum-primary/20 text-quantum-accent px-2 py-1 rounded-full">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}