"use client";

import { Trophy, Flame, Clock, Target } from "lucide-react";
import { UserProgress } from "@/lib/mock-data";

interface ProgressStatsProps {
  progress: UserProgress;
}

export function ProgressStats({ progress }: ProgressStatsProps) {
  const stats = [
    {
      icon: Clock,
      label: "Minutos Totais",
      value: progress.totalMinutes,
      color: "text-quantum-primary"
    },
    {
      icon: Flame,
      label: "Sequência Atual",
      value: `${progress.currentStreak} dias`,
      color: "text-orange-400"
    },
    {
      icon: Target,
      label: "Programas Concluídos",
      value: progress.completedPrograms,
      color: "text-green-400"
    },
    {
      icon: Trophy,
      label: "Pontos",
      value: progress.points,
      color: "text-quantum-accent"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Seu Progresso</h2>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-quantum-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">{progress.level}</span>
          </div>
          <span className="text-sm text-gray-400">Nível {progress.level}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="quantum-card text-center">
              <Icon size={24} className={`${stat.color} mx-auto mb-2`} />
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Barra de progresso para próximo nível */}
      <div className="quantum-card">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Progresso para Nível {progress.level + 1}</span>
          <span className="text-sm text-quantum-accent">75%</span>
        </div>
        <div className="w-full bg-quantum-muted rounded-full h-2">
          <div className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
}