"use client";

import { useState, useEffect } from "react";
import { Play, Pause, SkipForward, CheckCircle, Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DailyRoutine555Props {
  userFocus: string;
  onComplete: () => void;
  onClose: () => void;
}

interface RoutineBlock {
  id: number;
  title: string;
  duration: number;
  description: string;
  ponteira: string;
  instructions: string[];
}

export function DailyRoutine555({ userFocus, onComplete, onClose }: DailyRoutine555Props) {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [completedBlocks, setCompletedBlocks] = useState<number[]>([]);

  const getRoutineBlocks = (focus: string): RoutineBlock[] => {
    const baseBlocks = [
      {
        id: 1,
        title: "Cervical/Tensão",
        duration: 300, // 5 minutos em segundos
        description: "Alívio de tensões cervicais",
        ponteira: "Localizada",
        instructions: [
          "Posicione a ponteira localizada na base do pescoço",
          "Movimentos circulares suaves",
          "Foque nos pontos de maior tensão"
        ]
      }
    ];

    // Segundo bloco baseado no foco do usuário
    let secondBlock: RoutineBlock;
    switch (focus) {
      case 'drenagem':
        secondBlock = {
          id: 2,
          title: "Drenagem Facial",
          duration: 300,
          description: "Redução de inchaço facial",
          ponteira: "Drenagem",
          instructions: [
            "Use a ponteira de drenagem no rosto",
            "Movimentos ascendentes do queixo às têmporas",
            "Pressão leve e constante"
          ]
        };
        break;
      case 'capilar':
        secondBlock = {
          id: 2,
          title: "Fortalecimento Capilar",
          duration: 300,
          description: "Estimulação dos folículos capilares",
          ponteira: "Capilar/Facial",
          instructions: [
            "Ponteira capilar no couro cabeludo",
            "Movimentos circulares da testa à nuca",
            "Estimule toda a área capilar"
          ]
        };
        break;
      case 'pernas':
        secondBlock = {
          id: 2,
          title: "Pernas e Pés",
          duration: 300,
          description: "Alívio para pernas pesadas",
          ponteira: "Profunda",
          instructions: [
            "Ponteira profunda nas panturrilhas",
            "Movimentos ascendentes dos pés aos joelhos",
            "Foque na sola dos pés se houver fascite"
          ]
        };
        break;
      default:
        secondBlock = {
          id: 2,
          title: "Cervical Avançado",
          duration: 300,
          description: "Variação cervical profunda",
          ponteira: "Localizada",
          instructions: [
            "Ponteira localizada nos ombros",
            "Trabalhe os músculos trapézio",
            "Movimentos mais profundos"
          ]
        };
    }

    const thirdBlock: RoutineBlock = {
      id: 3,
      title: "Relax Guiado",
      duration: 300,
      description: "Relaxamento com respiração",
      ponteira: "Livre",
      instructions: [
        "Posição confortável",
        "Respiração profunda e lenta",
        "Foque na sensação de relaxamento"
      ]
    };

    return [baseBlocks[0], secondBlock, thirdBlock];
  };

  const routineBlocks = getRoutineBlocks(userFocus);
  const currentRoutineBlock = routineBlocks[currentBlock];
  const progress = (currentTime / currentRoutineBlock.duration) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < currentRoutineBlock.duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= currentRoutineBlock.duration) {
            setIsPlaying(false);
            setCompletedBlocks(prev => [...prev, currentBlock]);
            return currentRoutineBlock.duration;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, currentRoutineBlock.duration, currentBlock]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentBlock < routineBlocks.length - 1) {
      setCurrentBlock(prev => prev + 1);
      setCurrentTime(0);
      setIsPlaying(false);
    } else {
      // Rotina completa
      onComplete();
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const isBlockCompleted = completedBlocks.includes(currentBlock);
  const allBlocksCompleted = completedBlocks.length === routineBlocks.length;

  return (
    <div className="fixed inset-0 bg-quantum-dark z-50">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-quantum-muted">
          <div>
            <h1 className="text-lg font-bold text-white">Rotina Diária 5-5-5</h1>
            <p className="text-sm text-gray-400">15 minutos de bem-estar</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-quantum-secondary rounded-full"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Progress Blocks */}
        <div className="p-4 border-b border-quantum-muted">
          <div className="flex gap-2">
            {routineBlocks.map((block, index) => (
              <div
                key={block.id}
                className={cn(
                  "flex-1 h-2 rounded-full transition-all duration-300",
                  completedBlocks.includes(index) 
                    ? "bg-green-500" 
                    : index === currentBlock 
                      ? "bg-quantum-primary" 
                      : "bg-quantum-muted"
                )}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>Bloco {currentBlock + 1} de {routineBlocks.length}</span>
            <span>{completedBlocks.length}/{routineBlocks.length} completos</span>
          </div>
        </div>

        {/* Current Block */}
        <div className="flex-1 p-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {currentRoutineBlock.title}
            </h2>
            <p className="text-gray-400 mb-1">{currentRoutineBlock.description}</p>
            <p className="text-quantum-accent text-sm font-medium">
              Ponteira: {currentRoutineBlock.ponteira}
            </p>
          </div>

          {/* Timer Circle */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgb(42, 47, 69)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#12D6DF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {formatTime(currentRoutineBlock.duration - currentTime)}
                </div>
                <div className="text-sm text-gray-400">restantes</div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="quantum-card mb-6">
            <h3 className="font-medium text-white mb-3">Como fazer:</h3>
            <ul className="space-y-2">
              {currentRoutineBlock.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-quantum-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={togglePlay}
              disabled={isBlockCompleted}
              className={cn(
                "p-4 rounded-full transition-all duration-200",
                isBlockCompleted 
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-quantum-primary hover:scale-105"
              )}
            >
              {isBlockCompleted ? (
                <CheckCircle size={28} className="text-white" />
              ) : isPlaying ? (
                <Pause size={28} className="text-white" />
              ) : (
                <Play size={28} className="text-white ml-1" />
              )}
            </button>
            
            {isBlockCompleted && currentBlock < routineBlocks.length - 1 && (
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-quantum-accent rounded-xl text-white font-medium"
              >
                Próximo Bloco
                <SkipForward size={20} />
              </button>
            )}
            
            {allBlocksCompleted && (
              <button 
                onClick={onComplete}
                className="flex items-center gap-2 px-6 py-3 bg-green-500 rounded-xl text-white font-medium"
              >
                Finalizar Rotina
                <CheckCircle size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}