"use client";

import { Play, Clock, Star, Sparkles } from "lucide-react";
import { Program } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: Program;
  onPlay?: () => void;
  className?: string;
}

export function ProgramCard({ program, onPlay, className }: ProgramCardProps) {
  const categoryColors = {
    cervical: "from-blue-500/20 to-cyan-500/20",
    lombar: "from-green-500/20 to-emerald-500/20", 
    drenagem: "from-cyan-500/20 to-teal-500/20",
    relax: "from-purple-500/20 to-pink-500/20",
    sono: "from-indigo-500/20 to-purple-500/20",
    treino: "from-orange-500/20 to-red-500/20"
  };

  const categoryGradients = {
    cervical: "from-blue-500 to-cyan-500",
    lombar: "from-green-500 to-emerald-500", 
    drenagem: "from-cyan-500 to-teal-500",
    relax: "from-purple-500 to-pink-500",
    sono: "from-indigo-500 to-purple-500",
    treino: "from-orange-500 to-red-500"
  };

  const difficultyColors = {
    iniciante: "text-green-400",
    intermediario: "text-yellow-400",
    avancado: "text-red-400"
  };

  return (
    <div className={cn("quantum-card-interactive group", className)}>
      <div className="relative overflow-hidden">
        <div className={cn(
          "w-full h-40 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br",
          categoryColors[program.category]
        )}>
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-quantum-pattern opacity-30" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <Sparkles size={20} className="text-white animate-float" />
          </div>
          
          {/* Play Button */}
          <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-white/20">
            <Play size={24} className="text-white ml-1 drop-shadow-lg" />
          </div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 quantum-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r backdrop-blur-sm border border-white/20",
            categoryGradients[program.category]
          )}>
            {program.category}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-quantum-text text-lg mb-2 group-hover:text-gradient transition-all duration-300">
            {program.title}
          </h3>
          <p className="text-quantum-text-muted text-sm leading-relaxed line-clamp-2">
            {program.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-quantum-text-muted">
            <Clock size={16} className="text-quantum-accent" />
            <span className="text-sm font-medium">{program.duration} min</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Star size={16} className={difficultyColors[program.difficulty]} />
            <span className={cn("text-sm font-medium", difficultyColors[program.difficulty])}>
              {program.difficulty}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {program.benefits.slice(0, 2).map((benefit, index) => (
            <span 
              key={index} 
              className="text-xs bg-quantum-muted/50 text-quantum-text-muted px-3 py-1 rounded-full border border-quantum-border/30 backdrop-blur-sm"
            >
              {benefit}
            </span>
          ))}
        </div>

        {onPlay && (
          <button 
            onClick={onPlay}
            className="w-full quantum-button flex items-center justify-center gap-2 group/btn"
          >
            <Play size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
            <span>Iniciar Programa</span>
          </button>
        )}
      </div>
    </div>
  );
}