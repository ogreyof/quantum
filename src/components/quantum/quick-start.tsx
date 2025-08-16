"use client";

import { quickStartPrograms } from "@/lib/mock-data";
import { Play, Zap } from "lucide-react";

interface QuickStartProps {
  onProgramSelect: (programId: string) => void;
}

export function QuickStart({ onProgramSelect }: QuickStartProps) {
  return (
    <div className="space-y-6 quantum-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-quantum rounded-lg flex items-center justify-center">
          <Zap size={16} className="text-white" />
        </div>
        <h2 className="text-xl font-bold text-quantum-text">Início Rápido</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {quickStartPrograms.map((program, index) => (
          <button
            key={program.id}
            onClick={() => onProgramSelect(program.id)}
            className="quantum-card-interactive text-left group/quick"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl group-hover/quick:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-quantum-text text-sm group-hover/quick:text-gradient transition-all duration-300">
                  {program.title}
                </h3>
                <p className="text-xs text-quantum-text-muted">{program.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-quantum-accent text-xs font-semibold">
                Começar agora
              </span>
              <div className="w-8 h-8 bg-quantum-primary/20 rounded-full flex items-center justify-center group-hover/quick:bg-quantum-primary/30 transition-all duration-300">
                <Play size={12} className="text-quantum-primary ml-0.5" />
              </div>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-quantum opacity-0 group-hover/quick:opacity-5 rounded-2xl transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
}