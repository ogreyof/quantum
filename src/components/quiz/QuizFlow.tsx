"use client";

import { useState } from "react";
import { QuizWelcome } from "./QuizWelcome";
import { QuizStep } from "./QuizStep";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { quizOptions, contraindicacoesText, lgpdText } from "@/data/quiz-options";
import { QuizResponse, QuizRecommendations } from "@/types/quiz";

interface QuizFlowProps {
  onComplete: (response: QuizResponse, recommendations: QuizRecommendations) => void;
}

export const QuizFlow = ({ onComplete }: QuizFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Partial<QuizResponse>>({
    regioes: [],
    condicoes: [],
    aparelhos: [],
    preferenciaSom: [],
    escalaDor: 0,
    contraindicacoes: false,
    lgpdConsent: false
  });

  const totalSteps = 11; // Welcome + 10 perguntas

  const updateResponse = (key: keyof QuizResponse, value: any) => {
    setResponses(prev => ({ ...prev, [key]: value }));
  };

  const toggleArrayItem = (key: 'regioes' | 'condicoes' | 'aparelhos' | 'preferenciaSom', item: string) => {
    const currentArray = responses[key] || [];
    const newArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item];
    updateResponse(key, newArray);
  };

  const generateRecommendations = (response: QuizResponse): QuizRecommendations => {
    // Lógica de recomendação baseada nas respostas
    const { objetivo, regioes, tempoDisponivel, preferenciaSom, horarioPreferido } = response;

    // Plano recomendado baseado no objetivo
    let planoRecomendado;
    switch (objetivo) {
      case 'cervical':
      case 'lombar':
        planoRecomendado = {
          id: 'plano-14-postura',
          title: '14D Postura de Ferro',
          duration: '14 dias',
          description: 'Programa intensivo para alívio e fortalecimento da coluna'
        };
        break;
      case 'drenagem':
        planoRecomendado = {
          id: 'plano-7-pernas',
          title: '7D Pernas Leves',
          duration: '7 dias',
          description: 'Programa focado em drenagem e circulação'
        };
        break;
      case 'estetica':
        planoRecomendado = {
          id: 'plano-15-rejuvenescimento',
          title: '15D Rejuvenescimento Facial',
          duration: '15 dias',
          description: 'Transformação facial completa'
        };
        break;
      default:
        planoRecomendado = {
          id: 'plano-7-iniciante',
          title: '7D Introdução',
          duration: '7 dias',
          description: 'Introdução completa ao Quantum'
        };
    }

    // Programas rápidos baseados no objetivo e regiões
    const programasRapidos = [];
    if (objetivo === 'cervical' || regioes.includes('cervical')) {
      programasRapidos.push({
        id: 'alivio-cervical',
        title: 'Alívio Cervical',
        duration: tempoDisponivel || '10min',
        category: 'coluna' as const
      });
    }
    if (objetivo === 'drenagem' || regioes.includes('pernas')) {
      programasRapidos.push({
        id: 'drenagem-pernas',
        title: 'Drenagem Pernas Leves',
        duration: '15min',
        category: 'drenagem' as const
      });
    }
    if (objetivo === 'sono') {
      programasRapidos.push({
        id: 'sono-profundo',
        title: 'Sono Profundo',
        duration: '12min',
        category: 'sono' as const
      });
    }
    if (objetivo === 'performance') {
      programasRapidos.push({
        id: 'pos-treino',
        title: 'Pós-Treino Express',
        duration: '12min',
        category: 'performance' as const
      });
    }

    // Garantir pelo menos 3 programas
    while (programasRapidos.length < 3) {
      programasRapidos.push({
        id: 'relax-total',
        title: 'Relax Total',
        duration: '8min',
        category: 'bem-estar' as const
      });
    }

    return {
      planoRecomendado,
      programasRapidos: programasRapidos.slice(0, 3),
      playlistSons: preferenciaSom,
      horarioNotificacao: horarioPreferido
    };
  };

  const handleNext = () => {
    if (currentStep === totalSteps - 1) {
      // Finalizar quiz
      const finalResponse: QuizResponse = {
        ...responses as QuizResponse,
        completedAt: new Date()
      };
      const recommendations = generateRecommendations(finalResponse);
      onComplete(finalResponse, recommendations);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!responses.objetivo;
      case 2: return (responses.regioes?.length || 0) > 0;
      case 3: return responses.escalaDor !== undefined;
      case 4: return (responses.condicoes?.length || 0) >= 0; // Opcional
      case 5: return (responses.aparelhos?.length || 0) > 0;
      case 6: return !!responses.tempoDisponivel;
      case 7: return (responses.preferenciaSom?.length || 0) > 0;
      case 8: return !!responses.horarioPreferido;
      case 9: return responses.contraindicacoes === true;
      case 10: return responses.lgpdConsent === true;
      default: return true;
    }
  };

  if (currentStep === 0) {
    return <QuizWelcome onStart={() => setCurrentStep(1)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Passo 1: Objetivo Principal */}
      {currentStep === 1 && (
        <QuizStep
          title="Qual é seu objetivo principal?"
          subtitle="Escolha o que mais te motiva a usar o Quantum"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          canProceed={canProceed()}
        >
          <div className="grid grid-cols-2 gap-3">
            {quizOptions.objetivos.map((objetivo) => (
              <Button
                key={objetivo.id}
                variant={responses.objetivo === objetivo.id ? "default" : "outline"}
                className={`h-auto p-4 flex flex-col items-center gap-2 ${
                  responses.objetivo === objetivo.id 
                    ? 'bg-gradient-quantum text-white' 
                    : 'hover:bg-muted'
                }`}
                onClick={() => updateResponse('objetivo', objetivo.id)}
              >
                <span className="text-2xl">{objetivo.icon}</span>
                <span className="text-sm font-medium text-center">{objetivo.label}</span>
              </Button>
            ))}
          </div>
        </QuizStep>
      )}

      {/* Passo 2: Regiões de Foco */}
      {currentStep === 2 && (
        <QuizStep
          title="Quais regiões você quer focar?"
          subtitle="Selecione todas as áreas que precisam de atenção"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <div className="grid grid-cols-2 gap-3">
            {quizOptions.regioes.map((regiao) => (
              <div key={regiao.id} className="flex items-center space-x-2">
                <Checkbox
                  id={regiao.id}
                  checked={responses.regioes?.includes(regiao.id)}
                  onCheckedChange={() => toggleArrayItem('regioes', regiao.id)}
                />
                <Label htmlFor={regiao.id} className="text-sm font-medium">
                  {regiao.label}
                </Label>
              </div>
            ))}
          </div>
        </QuizStep>
      )}

      {/* Passo 3: Escala de Dor */}
      {currentStep === 3 && (
        <QuizStep
          title="Qual seu nível de dor/desconforto?"
          subtitle="0 = Nenhuma dor, 10 = Dor muito intensa"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {responses.escalaDor ?? 0}
              </div>
              <p className="text-sm text-muted-foreground">
                {(responses.escalaDor ?? 0) === 0 && "Sem dor"}
                {(responses.escalaDor ?? 0) >= 1 && (responses.escalaDor ?? 0) <= 3 && "Dor leve"}
                {(responses.escalaDor ?? 0) >= 4 && (responses.escalaDor ?? 0) <= 6 && "Dor moderada"}
                {(responses.escalaDor ?? 0) >= 7 && (responses.escalaDor ?? 0) <= 8 && "Dor intensa"}
                {(responses.escalaDor ?? 0) >= 9 && "Dor muito intensa"}
              </p>
            </div>
            <Slider
              value={[responses.escalaDor || 0]}
              onValueChange={(value) => updateResponse('escalaDor', value[0])}
              max={10}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
        </QuizStep>
      )}

      {/* Passo 4: Condições/Temas */}
      {currentStep === 4 && (
        <QuizStep
          title="Você tem alguma dessas condições?"
          subtitle="Selecione todas que se aplicam (opcional)"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
            {quizOptions.condicoes.map((condicao) => (
              <div key={condicao.id} className="flex items-center space-x-2">
                <Checkbox
                  id={condicao.id}
                  checked={responses.condicoes?.includes(condicao.id)}
                  onCheckedChange={() => toggleArrayItem('condicoes', condicao.id)}
                />
                <Label htmlFor={condicao.id} className="text-sm">
                  {condicao.label}
                </Label>
              </div>
            ))}
          </div>
        </QuizStep>
      )}

      {/* Passo 5: Aparelhos */}
      {currentStep === 5 && (
        <QuizStep
          title="Quais aparelhos Quantum você possui?"
          subtitle="Selecione todos os seus equipamentos"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
            {quizOptions.aparelhos.map((aparelho) => (
              <div key={aparelho.id} className="flex items-center space-x-2">
                <Checkbox
                  id={aparelho.id}
                  checked={responses.aparelhos?.includes(aparelho.id)}
                  onCheckedChange={() => toggleArrayItem('aparelhos', aparelho.id)}
                />
                <Label htmlFor={aparelho.id} className="text-sm">
                  {aparelho.label}
                </Label>
              </div>
            ))}
          </div>
        </QuizStep>
      )}

      {/* Passo 6: Tempo Disponível */}
      {currentStep === 6 && (
        <QuizStep
          title="Quanto tempo você tem por dia?"
          subtitle="Escolha sua disponibilidade diária"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <RadioGroup
            value={responses.tempoDisponivel}
            onValueChange={(value) => updateResponse('tempoDisponivel', value)}
          >
            {quizOptions.tempoDisponivel.map((tempo) => (
              <div key={tempo.id} className="flex items-center space-x-2">
                <RadioGroupItem value={tempo.value} id={tempo.id} />
                <Label htmlFor={tempo.id} className="text-sm font-medium">
                  {tempo.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </QuizStep>
      )}

      {/* Passo 7: Preferências de Som */}
      {currentStep === 7 && (
        <QuizStep
          title="Que tipos de som você prefere?"
          subtitle="Selecione seus sons favoritos para relaxar"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <div className="grid grid-cols-2 gap-3">
            {quizOptions.preferenciaSom.map((som) => (
              <Button
                key={som.id}
                variant={responses.preferenciaSom?.includes(som.id) ? "default" : "outline"}
                className={`h-auto p-4 flex flex-col items-center gap-2 ${
                  responses.preferenciaSom?.includes(som.id)
                    ? 'bg-gradient-quantum text-white' 
                    : 'hover:bg-muted'
                }`}
                onClick={() => toggleArrayItem('preferenciaSom', som.id)}
              >
                <span className="text-2xl">{som.icon}</span>
                <span className="text-sm font-medium text-center">{som.label}</span>
              </Button>
            ))}
          </div>
        </QuizStep>
      )}

      {/* Passo 8: Horário Preferido */}
      {currentStep === 8 && (
        <QuizStep
          title="Qual seu horário preferido?"
          subtitle="Quando você gostaria de receber lembretes?"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <RadioGroup
            value={responses.horarioPreferido}
            onValueChange={(value) => updateResponse('horarioPreferido', value)}
          >
            {quizOptions.horarios.map((horario) => (
              <div key={horario.id} className="flex items-center space-x-2">
                <RadioGroupItem value={horario.value} id={horario.id} />
                <Label htmlFor={horario.id} className="text-sm font-medium">
                  {horario.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </QuizStep>
      )}

      {/* Passo 9: Contraindicações */}
      {currentStep === 9 && (
        <QuizStep
          title="Termo de Ciência - Contraindicações"
          subtitle="Leia atentamente e confirme sua ciência"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
        >
          <div className="space-y-4">
            <Textarea
              value={contraindicacoesText}
              readOnly
              className="min-h-32 text-sm"
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="contraindicacoes"
                checked={responses.contraindicacoes}
                onCheckedChange={(checked) => updateResponse('contraindicacoes', checked)}
              />
              <Label htmlFor="contraindicacoes" className="text-sm">
                Li e estou ciente das contraindicações acima
              </Label>
            </div>
          </div>
        </QuizStep>
      )}

      {/* Passo 10: LGPD */}
      {currentStep === 10 && (
        <QuizStep
          title="Consentimento LGPD"
          subtitle="Autorização para uso dos dados"
          currentStep={currentStep}
          totalSteps={totalSteps - 1}
          onNext={handleNext}
          onPrev={handlePrev}
          canProceed={canProceed()}
          isLastStep={true}
        >
          <div className="space-y-4">
            <Textarea
              value={lgpdText}
              readOnly
              className="min-h-20 text-sm"
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lgpd"
                checked={responses.lgpdConsent}
                onCheckedChange={(checked) => updateResponse('lgpdConsent', checked)}
              />
              <Label htmlFor="lgpd" className="text-sm">
                Autorizo o uso dos meus dados conforme descrito
              </Label>
            </div>
          </div>
        </QuizStep>
      )}
    </div>
  );
};