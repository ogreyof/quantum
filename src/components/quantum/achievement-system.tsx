"use client";

import { useState } from "react";
import { Trophy, Star, Target, Flame, Clock, Award, Lock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: 'streak' | 'time' | 'programs' | 'special';
  requirement: number;
  currentProgress: number;
  points: number;
  unlocked: boolean;
  unlockedAt?: Date;
}

interface AchievementSystemProps {
  className?: string;
}

export function AchievementSystem({ className }: AchievementSystemProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Primeira Sessão',
      description: 'Complete sua primeira sessão de massagem',
      icon: Star,
      category: 'special',
      requirement: 1,
      currentProgress: 1,
      points: 50,
      unlocked: true,
      unlockedAt: new Date('2024-01-10')
    },
    {
      id: '2',
      title: 'Sequência de Ferro',
      description: 'Mantenha uma sequência de 7 dias consecutivos',
      icon: Flame,
      category: 'streak',
      requirement: 7,
      currentProgress: 5,
      points: 200,
      unlocked: false
    },
    {
      id: '3',
      title: 'Maratonista',
      description: 'Acumule 60 minutos de sessões',
      icon: Clock,
      category: 'time',
      requirement: 60,
      currentProgress: 45,
      points: 150,
      unlocked: false
    },
    {
      id: '4',
      title: 'Explorador',
      description: 'Experimente 5 programas diferentes',
      icon: Target,
      category: 'programs',
      requirement: 5,
      currentProgress: 3,
      points: 100,
      unlocked: false
    },
    {
      id: '5',
      title: 'Dedicado',
      description: 'Complete 30 sessões no total',
      icon: Trophy,
      category: 'programs',
      requirement: 30,
      currentProgress: 18,
      points: 300,
      unlocked: false
    },
    {
      id: '6',
      title: 'Mestre Quantum',
      description: 'Desbloqueie todas as outras conquistas',
      icon: Award,
      category: 'special',
      requirement: 5,
      currentProgress: 1,
      points: 500,
      unlocked: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Todas', count: achievements.length },
    { id: 'streak', label: 'Sequência', count: achievements.filter(a => a.category === 'streak').length },
    { id: 'time', label: 'Tempo', count: achievements.filter(a => a.category === 'time').length },
    { id: 'programs', label: 'Programas', count: achievements.filter(a => a.category === 'programs').length },
    { id: 'special', label: 'Especiais', count: achievements.filter(a => a.category === 'special').length }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header Stats */}
      <div className="quantum-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Conquistas</h2>
          <div className="flex items-center gap-2">
            <Trophy size={20} className="text-quantum-accent" />
            <span className="text-quantum-accent font-bold">{totalPoints} pts</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{unlockedCount}</div>
            <div className="text-sm text-gray-400">Desbloqueadas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{achievements.length - unlockedCount}</div>
            <div className="text-sm text-gray-400">Restantes</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progresso Geral</span>
            <span>{Math.round((unlockedCount / achievements.length) * 100)}%</span>
          </div>
          <div className="w-full bg-quantum-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200",
              selectedCategory === category.id
                ? "bg-quantum-primary text-white"
                : "bg-quantum-secondary text-gray-400 hover:text-white"
            )}
          >
            {category.label}
            <span className="bg-quantum-muted px-2 py-1 rounded-full text-xs">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-4">
        {filteredAchievements.map((achievement) => {
          const Icon = achievement.icon;
          const progress = (achievement.currentProgress / achievement.requirement) * 100;
          
          return (
            <div
              key={achievement.id}
              className={cn(
                "quantum-card transition-all duration-300",
                achievement.unlocked 
                  ? "border-quantum-accent bg-quantum-accent/5" 
                  : "hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-3 rounded-lg flex-shrink-0",
                  achievement.unlocked 
                    ? "bg-quantum-accent/20" 
                    : "bg-quantum-muted"
                )}>
                  {achievement.unlocked ? (
                    <Icon size={24} className="text-quantum-accent" />
                  ) : (
                    <Lock size={24} className="text-gray-500" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className={cn(
                        "font-semibold",
                        achievement.unlocked ? "text-white" : "text-gray-300"
                      )}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {achievement.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {achievement.unlocked && (
                        <CheckCircle size={16} className="text-quantum-accent" />
                      )}
                      <span className={cn(
                        "text-sm font-medium",
                        achievement.unlocked ? "text-quantum-accent" : "text-gray-400"
                      )}>
                        +{achievement.points} pts
                      </span>
                    </div>
                  </div>
                  
                  {!achievement.unlocked && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Progresso</span>
                        <span>{achievement.currentProgress}/{achievement.requirement}</span>
                      </div>
                      <div className="w-full bg-quantum-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {achievement.unlocked && achievement.unlockedAt && (
                    <div className="mt-2 text-xs text-gray-500">
                      Desbloqueada em {achievement.unlockedAt.toLocaleDateString('pt-BR')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Achievement Preview */}
      {unlockedCount < achievements.length && (
        <div className="quantum-card border-2 border-quantum-primary/30">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-quantum-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Target size={24} className="text-quantum-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Próxima Conquista</h3>
              <p className="text-sm text-gray-400">
                Continue usando o app para desbloquear mais conquistas e ganhar pontos!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}