"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Target, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingFlowProps {
  onComplete: (answers: OnboardingAnswers) => void;
}

export interface OnboardingAnswers {
  objective: string;
  painAreas: string[];
  availableTime: string;
  experience: string;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<OnboardingAnswers>({
    objective: '',
    painAreas: [],
    availableTime: '',
    experience: ''
  });

  const steps = [
    {
      title: "Bem-vindo ao Quantum Experience! 🎉",
      subtitle: "Vamos personalizar sua experiência",
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-quantum-primary rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl font-bold text-white">Q</span>
          </div>
          <p className="text-gray-300">
            Em poucos passos, vamos criar um plano personalizado para suas necessidades de bem-estar.
          </p>
        </div>
      )
    },
    {
      title: "Qual é seu principal objetivo?",
      subtitle: "Escolha o que mais se adequa ao seu momento",
      content: (
        <div className="space-y-3">
          {[
            { id: 'relaxamento', label: 'Relaxamento e alívio do estresse', icon: '🧘' },
            { id: 'dor', label: 'Alívio de dores musculares', icon: '💆' },
            { id: 'circulacao', label: 'Melhorar circulação', icon: '🦵' },
            { id: 'sono', label: 'Melhorar qualidade do sono', icon: '😴' },
            { id: 'postura', label: 'Correção postural', icon: '🏃' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setAnswers(prev => ({ ...prev, objective: option.id }))}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
                answers.objective === option.id
                  ? "border-quantum-primary bg-quantum-primary/10"
                  : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <span className="text-white font-medium">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Onde você sente mais desconforto?",
      subtitle: "Pode selecionar múltiplas áreas",
      content: (
        <div className="space-y-3">
          {[
            { id: 'pescoco', label: 'Pescoço e cervical', icon: '🦴' },
            { id: 'ombros', label: 'Ombros e trapézio', icon: '💪' },
            { id: 'costas', label: 'Costas e lombar', icon: '🏃' },
            { id: 'pernas', label: 'Pernas e pés', icon: '🦵' },
            { id: 'bracos', label: 'Braços e mãos', icon: '✋' },
            { id: 'nenhum', label: 'Não tenho dores específicas', icon: '✨' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => {
                setAnswers(prev => {
                  const newPainAreas = prev.painAreas.includes(option.id)
                    ? prev.painAreas.filter(area => area !== option.id)
                    : [...prev.painAreas, option.id];
                  return { ...prev, painAreas: newPainAreas };
                });
              }}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
                answers.painAreas.includes(option.id)
                  ? "border-quantum-primary bg-quantum-primary/10"
                  : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <span className="text-white font-medium">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Quanto tempo você tem disponível?",
      subtitle: "Para suas sessões diárias",
      content: (
        <div className="space-y-3">
          {[
            { id: '5-10', label: '5-10 minutos', subtitle: 'Sessões rápidas', icon: <Clock size={24} /> },
            { id: '10-15', label: '10-15 minutos', subtitle: 'Equilibrio ideal', icon: <Clock size={24} /> },
            { id: '15-20', label: '15-20 minutos', subtitle: 'Sessões completas', icon: <Clock size={24} /> },
            { id: '20+', label: 'Mais de 20 minutos', subtitle: 'Experiência total', icon: <Clock size={24} /> }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setAnswers(prev => ({ ...prev, availableTime: option.id }))}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
                answers.availableTime === option.id
                  ? "border-quantum-primary bg-quantum-primary/10"
                  : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="text-quantum-accent">{option.icon}</div>
                <div>
                  <div className="text-white font-medium">{option.label}</div>
                  <div className="text-gray-400 text-sm">{option.subtitle}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Qual sua experiência com massagem?",
      subtitle: "Isso nos ajuda a recomendar a intensidade ideal",
      content: (
        <div className="space-y-3">
          {[
            { id: 'iniciante', label: 'Iniciante', subtitle: 'Primeira vez ou pouca experiência', icon: '🌱' },
            { id: 'intermediario', label: 'Intermediário', subtitle: 'Já fiz algumas vezes', icon: '🌿' },
            { id: 'avancado', label: 'Avançado', subtitle: 'Faço regularmente', icon: '🌳' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setAnswers(prev => ({ ...prev, experience: option.id }))}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
                answers.experience === option.id
                  ? "border-quantum-primary bg-quantum-primary/10"
                  : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <div className="text-white font-medium">{option.label}</div>
                  <div className="text-gray-400 text-sm">{option.subtitle}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Perfeito! Seu plano está pronto! 🎯",
      subtitle: "Baseado nas suas respostas, criamos um plano personalizado",
      content: (
        <div className="space-y-6">
          <div className="quantum-gradient rounded-xl p-6 text-center">
            <Target size={48} className="text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Plano Personalizado</h3>
            <p className="text-white/80">
              Programas selecionados especialmente para você
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-quantum-accent rounded-full"></div>
              <span className="text-gray-300">Programas recomendados baseados no seu objetivo</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-quantum-accent rounded-full"></div>
              <span className="text-gray-300">Duração adequada ao seu tempo disponível</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-quantum-accent rounded-full"></div>
              <span className="text-gray-300">Intensidade ajustada à sua experiência</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true;
      case 1: return answers.objective !== '';
      case 2: return answers.painAreas.length > 0;
      case 3: return answers.availableTime !== '';
      case 4: return answers.experience !== '';
      default: return true;
    }
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      onComplete(answers);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="fixed inset-0 bg-quantum-dark z-50">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Progress Bar */}
        <div className="p-4">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Passo {currentStep + 1} de {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-quantum-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">
                {steps[currentStep].title}
              </h1>
              <p className="text-gray-400">
                {steps[currentStep].subtitle}
              </p>
            </div>
            
            {steps[currentStep].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4 border-t border-quantum-muted">
          <div className="flex gap-3">
            {currentStep > 0 && (
              <button 
                onClick={handlePrevious}
                className="flex items-center gap-2 px-4 py-3 bg-quantum-secondary text-gray-300 rounded-xl hover:bg-quantum-muted transition-colors"
              >
                <ChevronLeft size={20} />
                Voltar
              </button>
            )}
            
            <button 
              onClick={handleNext}
              disabled={!canProceed()}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200",
                canProceed()
                  ? "quantum-button"
                  : "bg-quantum-muted text-gray-500 cursor-not-allowed"
              )}
            >
              {currentStep === steps.length - 1 ? 'Finalizar' : 'Continuar'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}