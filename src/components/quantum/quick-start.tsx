"use client";

import { quickStartPrograms } from "@/lib/mock-data";
import { Play } from "lucide-react";

interface QuickStartProps {
  onProgramSelect: (programId: string) => void;
}

export function QuickStart({ onProgramSelect }: QuickStartProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Início Rápido</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {quickStartPrograms.map((program) => (
          <button
            key={program.id}
            onClick={() => onProgramSelect(program.id)}
            className="quantum-card hover:scale-105 transition-all duration-200 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">{program.icon}</div>
              <div>
                <h3 className="font-medium text-white text-sm">{program.title}</h3>
                <p className="text-xs text-gray-400">{program.duration}</p>
              </div>
            </div>
            
            <div className="mt-3 flex items-center justify-between">
              <span className="text-quantum-accent text-xs font-medium">Começar agora</span>
              <Play size={14} className="text-quantum-primary" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}