"use client";

import { useState } from "react";
import { Trophy, Flame, Star, Award, Target, Calendar, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Medal {
  id: string;
  title: string;
  description: string;
  requirement: number;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  type: 'streak' | 'program' | 'special';
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  reward: string;
  deadline?: Date;
  completed: boolean;
  type: 'daily' | 'weekly' | 'special';
}

interface GamificationSystemProps {
  currentStreak: number;
  totalPrograms: number;
  totalMinutes: number;
  className?: string;
}

export function GamificationSystem({ 
  currentStreak, 
  totalPrograms, 
  totalMinutes, 
  className 
}: GamificationSystemProps) {
  const [activeTab, setActiveTab] = useState<'medals' | 'challenges'>('medals');

  const medals: Medal[] = [
    {
      id: 'streak-7',
      title: 'Primeira Semana',
      description: '7 dias seguidos de uso',
      requirement: 7,
      icon: '🔥',
      unlocked: currentStreak >= 7,
      unlockedAt: currentStreak >= 7 ? new Date() : undefined,
      type: 'streak'
    },
    {
      id: 'streak-14',
      title: 'Duas Semanas Forte',
      description: '14 dias seguidos de uso',
      requirement: 14,
      icon: '💪',
      unlocked: currentStreak >= 14,
      unlockedAt: currentStreak >= 14 ? new Date() : undefined,
      type: 'streak'
    },
    {
      id: 'streak-21',
      title: 'Hábito Formado',
      description: '21 dias seguidos de uso',
      requirement: 21,
      icon: '🏆',
      unlocked: currentStreak >= 21,
      unlockedAt: currentStreak >= 21 ? new Date() : undefined,
      type: 'streak'
    },
    {
      id: 'streak-30',
      title: 'Mestre da Consistência',
      description: '30 dias seguidos de uso',
      requirement: 30,
      icon: '👑',
      unlocked: currentStreak >= 30,
      unlockedAt: currentStreak >= 30 ? new Date() : undefined,
      type: 'streak'
    },
    {
      id: 'programs-10',
      title: 'Explorador',
      description: '10 programas completados',
      requirement: 10,
      icon: '🗺️',
      unlocked: totalPrograms >= 10,
      unlockedAt: totalPrograms >= 10 ? new Date() : undefined,
      type: 'program'
    },
    {
      id: 'programs-50',
      title: 'Veterano',
      description: '50 programas completados',
      requirement: 50,
      icon: '⭐',
      unlocked: totalPrograms >= 50,
      unlockedAt: totalPrograms >= 50 ? new Date() : undefined,
      type: 'program'
    },
    {
      id: 'drenagem-specialist',
      title: 'Especialista em Drenagem',
      description: 'Complete o desafio de 7 dias de drenagem facial',
      requirement: 1,
      icon: '💧',
      unlocked: false, // Seria baseado em dados reais
      type: 'special'
    },
    {
      id: 'premium-unlock',
      title: 'Desbloqueador Premium',
      description: '21 dias de uso contínuo - dicas premium desbloqueadas',
      requirement: 21,
      icon: '🎯',
      unlocked: currentStreak >= 21,
      unlockedAt: currentStreak >= 21 ? new Date() : undefined,
      type: 'special'
    }
  ];

  const challenges: Challenge[] = [
    {
      id: 'daily-routine',
      title: 'Rotina Diária',
      description: 'Complete sua rotina 5-5-5 hoje',
      progress: 0,
      target: 1,
      reward: '+50 pontos',
      completed: false,
      type: 'daily'
    },
    {
      id: 'weekly-streak',
      title: 'Semana Perfeita',
      description: 'Use o app 7 dias seguidos esta semana',
      progress: currentStreak >= 7 ? 7 : currentStreak,
      target: 7,
      reward: 'Medalha + 200 pontos',
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      completed: currentStreak >= 7,
      type: 'weekly'
    },
    {
      id: 'drenagem-challenge',
      title: 'Desafio Drenagem Facial',
      description: '7 dias consecutivos de drenagem facial',
      progress: 0,
      target: 7,
      reward: 'Certificado digital + dicas premium',
      deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      completed: false,
      type: 'special'
    },
    {
      id: 'ponteiras-master',
      title: 'Mestre das Ponteiras',
      description: 'Use todas as 4 ponteiras esta semana',
      progress: 2,
      target: 4,
      reward: 'Título especial + 300 pontos',
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      completed: false,
      type: 'weekly'
    }
  ];

  const unlockedMedals = medals.filter(m => m.unlocked);
  const activeChallenges = challenges.filter(c => !c.completed);

  const getProgressPercentage = (progress: number, target: number) => {
    return Math.min((progress / target) * 100, 100);
  };

  const formatTimeLeft = (deadline: Date) => {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}h`;
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2">Gamificação</h2>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-orange-400" />
            <span className="text-white font-medium">{currentStreak} dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-yellow-400" />
            <span className="text-white font-medium">{unlockedMedals.length} medalhas</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('medals')}
          className={cn(
            "flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200",
            activeTab === 'medals'
              ? "bg-quantum-primary text-white"
              : "bg-quantum-secondary text-gray-400 hover:text-white"
          )}
        >
          Medalhas
        </button>
        <button
          onClick={() => setActiveTab('challenges')}
          className={cn(
            "flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200",
            activeTab === 'challenges'
              ? "bg-quantum-primary text-white"
              : "bg-quantum-secondary text-gray-400 hover:text-white"
          )}
        >
          Desafios
        </button>
      </div>

      {/* Medals Tab */}
      {activeTab === 'medals' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {medals.map((medal) => (
              <div
                key={medal.id}
                className={cn(
                  "quantum-card text-center transition-all duration-300",
                  medal.unlocked 
                    ? "border-2 border-yellow-500/30 bg-yellow-500/5" 
                    : "opacity-60"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3",
                  medal.unlocked ? "bg-yellow-500/20" : "bg-quantum-muted"
                )}>
                  {medal.unlocked ? (
                    <span className="text-2xl">{medal.icon}</span>
                  ) : (
                    <Lock size={24} className="text-gray-500" />
                  )}
                </div>
                
                <h3 className={cn(
                  "font-semibold text-sm mb-1",
                  medal.unlocked ? "text-white" : "text-gray-400"
                )}>
                  {medal.title}
                </h3>
                
                <p className="text-xs text-gray-400 mb-2">{medal.description}</p>
                
                {medal.unlocked ? (
                  <div className="flex items-center justify-center gap-1 text-xs text-yellow-400">
                    <CheckCircle size={12} />
                    <span>Desbloqueada</span>
                  </div>
                ) : (
                  <div className="text-xs text-gray-500">
                    {medal.requirement - (medal.type === 'streak' ? currentStreak : totalPrograms)} restantes
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges Tab */}
      {activeTab === 'challenges' && (
        <div className="space-y-4">
          {activeChallenges.map((challenge) => (
            <div key={challenge.id} className="quantum-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-white">{challenge.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{challenge.description}</p>
                </div>
                
                <div className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  challenge.type === 'daily' ? "bg-blue-500/20 text-blue-400" :
                  challenge.type === 'weekly' ? "bg-purple-500/20 text-purple-400" :
                  "bg-orange-500/20 text-orange-400"
                )}>
                  {challenge.type === 'daily' ? 'Diário' :
                   challenge.type === 'weekly' ? 'Semanal' : 'Especial'}
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Progresso</span>
                    <span className="text-white">{challenge.progress}/{challenge.target}</span>
                  </div>
                  <div className="w-full bg-quantum-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage(challenge.progress, challenge.target)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-quantum-accent font-medium">{challenge.reward}</span>
                  {challenge.deadline && (
                    <span className="text-gray-400">
                      {formatTimeLeft(challenge.deadline)} restantes
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Current Streak Highlight */}
      <div className="quantum-card border-2 border-orange-500/30">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
            <Flame size={32} className="text-orange-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{currentStreak}</h3>
            <p className="text-orange-400 font-medium">Dias seguidos</p>
            <p className="text-sm text-gray-400 mt-1">
              {currentStreak < 7 ? `${7 - currentStreak} dias para primeira medalha` :
               currentStreak < 14 ? `${14 - currentStreak} dias para próxima medalha` :
               currentStreak < 21 ? `${21 - currentStreak} dias para próxima medalha` :
               currentStreak < 30 ? `${30 - currentStreak} dias para medalha máxima` :
               'Você é um mestre da consistência!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}