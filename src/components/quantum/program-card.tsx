"use client";

import { Play, Clock, Star } from "lucide-react";
import { Program } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: Program;
  onPlay?: () => void;
  className?: string;
}

export function ProgramCard({ program, onPlay, className }: ProgramCardProps) {
  const categoryColors = {
    cervical: "bg-blue-500/20 text-blue-400",
    lombar: "bg-green-500/20 text-green-400", 
    drenagem: "bg-cyan-500/20 text-cyan-400",
    relax: "bg-purple-500/20 text-purple-400",
    sono: "bg-indigo-500/20 text-indigo-400",
    treino: "bg-orange-500/20 text-orange-400"
  };

  const difficultyColors = {
    iniciante: "text-green-400",
    intermediario: "text-yellow-400",
    avancado: "text-red-400"
  };

  return (
    <div className={cn("quantum-card hover:scale-105 transition-all duration-300 cursor-pointer", className)}>
      <div className="relative">
        <div className="w-full h-32 bg-gradient-to-br from-quantum-primary/20 to-quantum-accent/20 rounded-lg mb-3 flex items-center justify-center">
          <Play size={32} className="text-quantum-primary" />
        </div>
        
        <div className="absolute top-2 right-2 flex gap-1">
          <span className={cn("px-2 py-1 rounded-full text-xs font-medium", categoryColors[program.category])}>
            {program.category}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-white text-lg">{program.title}</h3>
        
        <p className="text-gray-400 text-sm line-clamp-2">{program.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-gray-300">
            <Clock size={14} />
            <span>{program.duration} min</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Star size={14} className={difficultyColors[program.difficulty]} />
            <span className={difficultyColors[program.difficulty]}>{program.difficulty}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-2">
          {program.benefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="text-xs bg-quantum-muted text-gray-300 px-2 py-1 rounded-full">
              {benefit}
            </span>
          ))}
        </div>

        {onPlay && (
          <button 
            onClick={onPlay}
            className="w-full quantum-button mt-3 flex items-center justify-center gap-2"
          >
            <Play size={16} />
            Iniciar Programa
          </button>
        )}
      </div>
    </div>
  );
}