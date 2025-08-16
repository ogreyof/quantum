"use client";

import { useState } from "react";
import { Target, Droplets, Scissors, Zap, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Ponteira {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  uses: string[];
  techniques: string[];
  color: string;
  image: string;
}

interface PonteirasCatalogProps {
  className?: string;
}

export function PonteirasCatalog({ className }: PonteirasCatalogProps) {
  const [selectedPonteira, setSelectedPonteira] = useState<string | null>(null);

  const ponteiras: Ponteira[] = [
    {
      id: 'localizada',
      name: 'Localizada (Cervical)',
      icon: Target,
      description: 'Ideal para alívio cervical, tensões e pontos específicos',
      uses: [
        'Dores cervicais e no pescoço',
        'Tensões musculares localizadas',
        'Pontos de gatilho (trigger points)',
        'Dores de cabeça tensionais',
        'Rigidez nos ombros'
      ],
      techniques: [
        'Movimentos circulares suaves',
        'Pressão moderada nos pontos tensos',
        'Tempo: 3-5 minutos por região',
        'Frequência: diária para melhores resultados'
      ],
      color: 'from-blue-500 to-blue-600',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'nodulos',
      name: 'Nódulos & Drenagem',
      icon: Droplets,
      description: 'Libera nódulos musculares e faz drenagem linfática',
      uses: [
        'Nódulos musculares (contrações)',
        'Drenagem linfática facial',
        'Redução de inchaço',
        'Melhora da circulação',
        'Papada e contorno facial'
      ],
      techniques: [
        'Movimentos ascendentes para drenagem',
        'Pressão leve e constante',
        'Do centro para as extremidades',
        'Tempo: 5-7 minutos por sessão'
      ],
      color: 'from-cyan-500 to-blue-500',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'capilar',
      name: 'Capilar & Facial',
      icon: Scissors,
      description: 'Fortalece folículos, trata papada e linhas de expressão',
      uses: [
        'Fortalecimento capilar',
        'Estimulação do couro cabeludo',
        'Redução de linhas de expressão',
        'Tratamento de papada',
        'Áreas faciais sensíveis'
      ],
      techniques: [
        'Movimentos circulares no couro cabeludo',
        'Pressão suave em áreas sensíveis',
        'Da testa à nuca para cabelo',
        'Tempo: 5-10 minutos por sessão'
      ],
      color: 'from-purple-500 to-pink-500',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'profunda',
      name: 'Profunda (Pernas & Pés)',
      icon: Zap,
      description: 'Para fascite plantar, esporão, circulação e alívio profundo',
      uses: [
        'Fascite plantar',
        'Esporão de calcâneo',
        'Pernas pesadas',
        'Má circulação',
        'Dores profundas musculares'
      ],
      techniques: [
        'Movimentos ascendentes nas pernas',
        'Pressão firme na sola dos pés',
        'Foco em pontos dolorosos',
        'Tempo: 7-10 minutos por região'
      ],
      color: 'from-orange-500 to-red-500',
      image: '/api/placeholder/300/200'
    }
  ];

  const selectedPonteiraData = ponteiras.find(p => p.id === selectedPonteira);

  if (selectedPonteira && selectedPonteiraData) {
    return (
      <div className="fixed inset-0 bg-quantum-dark z-50">
        <div className="max-w-md mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-quantum-muted">
            <button 
              onClick={() => setSelectedPonteira(null)}
              className="p-2 bg-quantum-secondary rounded-full"
            >
              <ChevronRight size={20} className="text-gray-400 rotate-180" />
            </button>
            <h1 className="text-lg font-bold text-white">{selectedPonteiraData.name}</h1>
            <div className="w-10" />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Image */}
            <div className={cn(
              "w-full h-48 rounded-xl flex items-center justify-center bg-gradient-to-br",
              selectedPonteiraData.color
            )}>
              <selectedPonteiraData.icon size={64} className="text-white" />
            </div>

            {/* Description */}
            <div className="quantum-card">
              <h3 className="font-semibold text-white mb-2">Descrição</h3>
              <p className="text-gray-300 text-sm">{selectedPonteiraData.description}</p>
            </div>

            {/* Uses */}
            <div className="quantum-card">
              <h3 className="font-semibold text-white mb-3">Indicações de Uso</h3>
              <ul className="space-y-2">
                {selectedPonteiraData.uses.map((use, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-quantum-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300">{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques */}
            <div className="quantum-card">
              <h3 className="font-semibold text-white mb-3">Como Usar</h3>
              <ul className="space-y-2">
                {selectedPonteiraData.techniques.map((technique, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-300">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <button className="w-full quantum-button flex items-center justify-center gap-2">
              <Play size={16} />
              Usar Esta Ponteira Agora
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-2">Como usar meu Relaxion Plus</h2>
        <p className="text-gray-400">Conheça suas 4 ponteiras e suas aplicações</p>
      </div>

      {/* Ponteiras Grid */}
      <div className="grid gap-4">
        {ponteiras.map((ponteira) => {
          const Icon = ponteira.icon;
          
          return (
            <button
              key={ponteira.id}
              onClick={() => setSelectedPonteira(ponteira.id)}
              className="quantum-card hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-3 rounded-lg bg-gradient-to-br flex-shrink-0",
                  ponteira.color
                )}>
                  <Icon size={24} className="text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{ponteira.name}</h3>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-3">{ponteira.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {ponteira.uses.slice(0, 2).map((use, index) => (
                      <span key={index} className="text-xs bg-quantum-muted text-gray-300 px-2 py-1 rounded-full">
                        {use}
                      </span>
                    ))}
                    {ponteira.uses.length > 2 && (
                      <span className="text-xs bg-quantum-muted text-gray-300 px-2 py-1 rounded-full">
                        +{ponteira.uses.length - 2} mais
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Tips */}
      <div className="quantum-card border-2 border-quantum-primary/30">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-quantum-primary/20 rounded-full flex items-center justify-center mx-auto">
            <Target size={24} className="text-quantum-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Dica Importante</h3>
            <p className="text-sm text-gray-400">
              Sempre comece com pressão leve e aumente gradualmente. Cada ponteira foi desenvolvida para áreas específicas do corpo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}