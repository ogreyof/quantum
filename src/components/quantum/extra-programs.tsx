"use client";

import { useState } from "react";
import { Calendar, Clock, Star, Play, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtraProgram {
  id: string;
  title: string;
  duration: number; // em dias
  sessionTime: number; // em minutos
  description: string;
  ponteira: string;
  benefits: string[];
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
  category: string;
  unlocked: boolean;
  completed: boolean;
  progress?: number;
}

interface ExtraProgramsProps {
  className?: string;
  onProgramSelect: (programId: string) => void;
}

export function ExtraPrograms({ className, onProgramSelect }: ExtraProgramsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const extraPrograms: ExtraProgram[] = [
    {
      id: 'fim-dia',
      title: 'Fim do Dia Sem Tensão',
      duration: 21,
      sessionTime: 10,
      description: 'Programa de 21 dias para eliminar tensões acumuladas',
      ponteira: 'Ponteira Cervical',
      benefits: ['Reduz tensão cervical', 'Melhora qualidade do sono', 'Alívio de dores de cabeça'],
      difficulty: 'iniciante',
      category: 'cervical',
      unlocked: true,
      completed: false,
      progress: 0
    },
    {
      id: 'anti-nodulos',
      title: 'Anti-Nódulos',
      duration: 7,
      sessionTime: 15,
      description: 'Programa intensivo para liberar nódulos musculares',
      ponteira: 'Ponteira de Nódulos',
      benefits: ['Libera contrações musculares', 'Melhora mobilidade', 'Reduz dor localizada'],
      difficulty: 'intermediario',
      category: 'nodulos',
      unlocked: true,
      completed: false,
      progress: 0
    },
    {
      id: 'drenagem-facial',
      title: 'Drenagem Facial',
      duration: 21,
      sessionTime: 7,
      description: 'Programa estético com fotos de antes e depois',
      ponteira: 'Ponteira de Drenagem',
      benefits: ['Reduz inchaço facial', 'Melhora contorno', 'Efeito lifting natural'],
      difficulty: 'iniciante',
      category: 'estetica',
      unlocked: true,
      completed: false,
      progress: 0
    },
    {
      id: 'forca-capilar',
      title: 'Força Capilar',
      duration: 30,
      sessionTime: 8,
      description: 'Fortalecimento intensivo dos folículos capilares',
      ponteira: 'Ponteira Capilar',
      benefits: ['Fortalece folículos', 'Estimula crescimento', 'Melhora circulação capilar'],
      difficulty: 'intermediario',
      category: 'capilar',
      unlocked: true,
      completed: false,
      progress: 0
    },
    {
      id: 'pernas-leves',
      title: 'Pernas Leves',
      duration: 14,
      sessionTime: 10,
      description: 'Programa para melhorar circulação das pernas',
      ponteira: 'Ponteira Profunda',
      benefits: ['Melhora circulação', 'Reduz sensação de peso', 'Alívio de varizes'],
      difficulty: 'iniciante',
      category: 'circulacao',
      unlocked: true,
      completed: false,
      progress: 0
    },
    {
      id: 'fascite-express',
      title: 'Fascite Plantar Express',
      duration: 7,
      sessionTime: 7,
      description: 'Alívio rápido para dores na sola do pé',
      ponteira: 'Ponteira Profunda',
      benefits: ['Alívio da fascite plantar', 'Reduz dor no calcanhar', 'Melhora mobilidade'],
      difficulty: 'avancado',
      category: 'pes',
      unlocked: true,
      completed: false,
      progress: 0
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos', count: extraPrograms.length },
    { id: 'cervical', label: 'Cervical', count: extraPrograms.filter(p => p.category === 'cervical').length },
    { id: 'estetica', label: 'Estética', count: extraPrograms.filter(p => p.category === 'estetica').length },
    { id: 'circulacao', label: 'Circulação', count: extraPrograms.filter(p => p.category === 'circulacao').length },
    { id: 'capilar', label: 'Capilar', count: extraPrograms.filter(p => p.category === 'capilar').length }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? extraPrograms 
    : extraPrograms.filter(p => p.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'iniciante': return 'text-green-400 bg-green-500/20';
      case 'intermediario': return 'text-yellow-400 bg-yellow-500/20';
      case 'avancado': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2">Programas Extras</h2>
        <p className="text-gray-400">Programas especializados para necessidades específicas</p>
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

      {/* Programs Grid */}
      <div className="grid gap-4">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className={cn(
              "quantum-card transition-all duration-300",
              program.unlocked ? "hover:scale-105 cursor-pointer" : "opacity-60"
            )}
            onClick={() => program.unlocked && onProgramSelect(program.id)}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "p-3 rounded-lg flex-shrink-0",
                program.unlocked ? "bg-quantum-primary/20" : "bg-quantum-muted"
              )}>
                {program.unlocked ? (
                  program.completed ? (
                    <CheckCircle size={24} className="text-green-400" />
                  ) : (
                    <Play size={24} className="text-quantum-primary" />
                  )
                ) : (
                  <Lock size={24} className="text-gray-500" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className={cn(
                      "font-semibold",
                      program.unlocked ? "text-white" : "text-gray-400"
                    )}>
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{program.description}</p>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
                      <Calendar size={14} />
                      <span>{program.duration} dias</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock size={14} />
                      <span>{program.sessionTime} min</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-quantum-muted text-gray-300 px-2 py-1 rounded-full">
                    {program.ponteira}
                  </span>
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    getDifficultyColor(program.difficulty)
                  )}>
                    {program.difficulty}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {program.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="text-xs bg-quantum-primary/20 text-quantum-accent px-2 py-1 rounded-full">
                      {benefit}
                    </span>
                  ))}
                  {program.benefits.length > 2 && (
                    <span className="text-xs bg-quantum-muted text-gray-400 px-2 py-1 rounded-full">
                      +{program.benefits.length - 2}
                    </span>
                  )}
                </div>
                
                {program.unlocked && !program.completed && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onProgramSelect(program.id);
                    }}
                    className="w-full quantum-button text-sm py-2"
                  >
                    Iniciar Programa
                  </button>
                )}
                
                {program.completed && (
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <CheckCircle size={16} />
                    <span>Programa Concluído</span>
                  </div>
                )}
                
                {!program.unlocked && (
                  <div className="text-sm text-gray-500">
                    Desbloqueie completando outros programas
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Info */}
      <div className="quantum-card border-2 border-quantum-accent/30">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-quantum-accent/20 rounded-full flex items-center justify-center mx-auto">
            <Star size={24} className="text-quantum-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Desbloqueie Mais Programas</h3>
            <p className="text-sm text-gray-400">
              Complete programas e mantenha sua sequência diária para desbloquear novos conteúdos especializados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}