"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Target, Clock, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantumOnboardingProps {
  onComplete: (answers: QuantumAnswers) => void;
}

export interface QuantumAnswers {
  focus: string;
  schedule: string;
  routine: string[];
}

export function QuantumOnboarding({ onComplete }: QuantumOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuantumAnswers>({
    focus: '',
    schedule: '',
    routine: []
  });

  const steps = [
    {
      title: "Bem-vindo ao Quantum Experience! 🎉",
      subtitle: "Vamos personalizar sua rotina diária em 3 perguntas",
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-quantum-primary rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl font-bold text-white">Q</span>
          </div>
          <p className="text-gray-300">
            Em 3 perguntas simples, vamos criar sua <strong>Rotina Diária 5-5-5</strong>: 15 minutos personalizados para seu bem-estar.
          </p>
        </div>
      )
    },
    {
      title: "Qual é seu foco principal?",
      subtitle: "Escolha sua prioridade de bem-estar",
      content: (
        <div className="space-y-3">
          {[
            { id: 'cervical', label: 'Cervical/Tensões', icon: '🦴', desc: 'Alívio de dores no pescoço e tensões musculares' },
            { id: 'drenagem', label: 'Drenagem Facial/Inchaço', icon: '💧', desc: 'Reduzir inchaço facial e melhorar contorno' },
            { id: 'capilar', label: 'Capilar (Fortalecimento)', icon: '💇', desc: 'Fortalecer folículos e estimular crescimento capilar' },
            { id: 'pernas', label: 'Pernas e Pés', icon: '🦵', desc: 'Alívio para pernas pesadas e fascite plantar' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setAnswers(prev => ({ ...prev, focus: option.id }))}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
                answers.focus === option.id
                  ? "border-quantum-primary bg-quantum-primary/10"
                  : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <div className="text-white font-medium">{option.label}</div>
                  <div className="text-gray-400 text-sm mt-1">{option.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Qual o melhor horário para você?",
      subtitle: "Vamos configurar seus lembretes automáticos",
      content: (
        <div className="space-y-3">
          {[
            { id: 'morning', label: 'Manhã (08:00)', icon: '🌅', desc: 'Bom dia! 5 minutos de cervical para começar sem tensão' },
            { id: 'lunch', label: 'Almoço (12:30)', icon: '☀️', desc: 'Pausa inteligente: vamos soltar os nódulos agora?' },
            { id: 'evening', label: 'Noite (19:30)', icon: '🌙', desc: 'Drenagem/estética: hora da sua sessão facial ou capilar' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setAnswers(prev => ({ ...prev, schedule: option.id }))}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
                answers.schedule === option.id
                  ? "border-quantum-primary bg-quantum-primary/10"
                  : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <div className="text-white font-medium">{option.label}</div>
                  <div className="text-gray-400 text-sm">{option.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Como é sua rotina diária?",
      subtitle: "Pode selecionar múltiplas opções",
      content: (
        <div className="space-y-3">
          {[
            { id: 'computer', label: 'Muitas horas no computador', icon: '💻', desc: 'Trabalho sedentário, tensão cervical frequente' },
            { id: 'standing', label: 'Muito tempo em pé', icon: '🚶', desc: 'Pernas cansadas, circulação comprometida' },
            { id: 'repetitive', label: 'Movimentos repetitivos', icon: '🔄', desc: 'Atividades que geram nódulos musculares' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => {
                setAnswers(prev => {
                  const newRoutine = prev.routine.includes(option.id)
                    ? prev.routine.filter(r => r !== option.id)
                    : [...prev.routine, option.id];
                  return { ...prev, routine: newRoutine };
                });
              }}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left",
                answers.routine.includes(option.id)
                  ? "border-quantum-primary bg-quantum-primary/10"
                  : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
              )}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <div className="text-white font-medium">{option.label}</div>
                  <div className="text-gray-400 text-sm mt-1">{option.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      title: "Perfeito! Sua Rotina 5-5-5 está pronta! 🎯",
      subtitle: "15 minutos diários personalizados para você",
      content: (
        <div className="space-y-6">
          <div className="quantum-gradient rounded-xl p-6 text-center">
            <Target size={48} className="text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Rotina Diária 5-5-5</h3>
            <p className="text-white/80">
              3 blocos de 5 minutos = 15 minutos de bem-estar
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-quantum-muted rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <div className="text-white font-medium">Cervical/Tensão (5 min)</div>
                <div className="text-gray-400 text-sm">Ponteira localizada</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-quantum-muted rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <div className="text-white font-medium">Foco do Dia (5 min)</div>
                <div className="text-gray-400 text-sm">
                  {answers.focus === 'cervical' && 'Ponteira localizada - variação'}
                  {answers.focus === 'drenagem' && 'Ponteira de drenagem'}
                  {answers.focus === 'capilar' && 'Ponteira capilar/facial'}
                  {answers.focus === 'pernas' && 'Ponteira profunda'}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-quantum-muted rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <div className="text-white font-medium">Relax Guiado (5 min)</div>
                <div className="text-gray-400 text-sm">Áudio relaxante + respiração</div>
              </div>
            </div>
          </div>
          
          <div className="bg-quantum-muted rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">Seus lembretes configurados:</h4>
            <div className="text-sm text-gray-300">
              {answers.schedule === 'morning' && '🌅 08:00 - Bom dia! 5 minutos de cervical para começar sem tensão'}
              {answers.schedule === 'lunch' && '☀️ 12:30 - Pausa inteligente: vamos soltar os nódulos agora?'}
              {answers.schedule === 'evening' && '🌙 19:30 - Drenagem/estética: hora da sua sessão'}
            </div>
          </div>
        </div>
      )
    }
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true;
      case 1: return answers.focus !== '';
      case 2: return answers.schedule !== '';
      case 3: return answers.routine.length > 0;
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
              {currentStep === steps.length - 1 ? 'Começar Rotina 5-5-5' : 'Continuar'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}