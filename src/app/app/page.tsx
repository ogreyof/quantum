"use client";

import { useState } from "react";
import { BottomNavigation } from "@/components/quantum/bottom-navigation";
import { QuickStart } from "@/components/quantum/quick-start";
import { ProgressStats } from "@/components/quantum/progress-stats";
import { ProgramCard } from "@/components/quantum/program-card";
import { SoundPlayer } from "@/components/quantum/sound-player";
import { ProgramPlayer } from "@/components/quantum/program-player";
import { OnboardingFlow, OnboardingAnswers } from "@/components/quantum/onboarding-flow";
import { SettingsPage } from "@/components/quantum/settings-page";
import { NotificationSystem } from "@/components/quantum/notification-system";
import { mockPrograms, mockPlans, mockSounds, mockUserProgress } from "@/lib/mock-data";
import { Search, Zap, Settings } from "lucide-react";

export default function QuantumApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [userOnboarded, setUserOnboarded] = useState(true);

  const handleProgramSelect = (programId: string) => {
    setSelectedProgram(programId);
  };

  const handleProgramComplete = () => {
    console.log('Programa completado!');
    setSelectedProgram(null);
  };

  const handleOnboardingComplete = (answers: OnboardingAnswers) => {
    console.log('Onboarding completado:', answers);
    setShowOnboarding(false);
    setUserOnboarded(true);
  };

  const currentProgram = selectedProgram 
    ? mockPrograms.find(p => p.id === selectedProgram)
    : null;

  if (!userOnboarded && showOnboarding) {
    return (
      <div className="quantum-app">
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      </div>
    );
  }

  if (currentProgram) {
    return (
      <div className="quantum-app">
        <ProgramPlayer 
          program={currentProgram}
          onClose={() => setSelectedProgram(null)}
          onComplete={handleProgramComplete}
        />
      </div>
    );
  }

  if (showSettings) {
    return (
      <div className="quantum-app">
        <SettingsPage onClose={() => setShowSettings(false)} />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Olá, Maria! 👋</h1>
                <p className="text-gray-400">Pronta para sua sessão de hoje?</p>
              </div>
              <div className="flex gap-3">
                <button className="p-2 bg-gray-700 rounded-full">
                  <Search size={20} className="text-gray-400" />
                </button>
                <div className="relative">
                  <NotificationSystem />
                </div>
                <button 
                  onClick={() => setShowSettings(true)}
                  className="p-2 bg-gray-700 rounded-full"
                >
                  <Settings size={20} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="quantum-gradient rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Zap size={24} className="text-white" />
                <div>
                  <h3 className="font-bold text-white">Sequência de 5 dias! 🔥</h3>
                  <p className="text-white/80 text-sm">Continue assim para manter sua sequência</p>
                </div>
              </div>
            </div>

            {!userOnboarded && (
              <div className="quantum-card border-2 border-purple-600">
                <div className="text-center space-y-3">
                  <h3 className="font-bold text-white">Personalize sua experiência</h3>
                  <p className="text-gray-400 text-sm">
                    Responda algumas perguntas para receber recomendações personalizadas
                  </p>
                  <button 
                    onClick={() => setShowOnboarding(true)}
                    className="quantum-button w-full"
                  >
                    Começar Quiz
                  </button>
                </div>
              </div>
            )}

            <QuickStart onProgramSelect={handleProgramSelect} />
            <ProgressStats progress={mockUserProgress} />
          </div>
        );

      case 'programs':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Programas</h1>
              <button className="p-2 bg-gray-700 rounded-full">
                <Search size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="grid gap-4">
              {mockPrograms.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  onPlay={() => handleProgramSelect(program.id)}
                />
              ))}
            </div>
          </div>
        );

      case 'plans':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Planos</h1>
            </div>

            <div className="space-y-4">
              {mockPlans.map((plan) => (
                <div key={plan.id} className="quantum-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-white text-lg">{plan.title}</h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {plan.duration} dias
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {plan.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full quantum-button">
                    Iniciar Plano
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'sounds':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Sons Relaxantes</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockSounds.map((sound) => (
                <SoundPlayer key={sound.id} sound={sound} />
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <h1 className="text-2xl font-bold text-white">Maria Silva</h1>
              <p className="text-gray-400">maria@email.com</p>
            </div>

            <ProgressStats progress={mockUserProgress} />

            <div className="space-y-3">
              <button 
                onClick={() => setShowSettings(true)}
                className="w-full quantum-card text-left"
              >
                <span className="text-white">Configurações</span>
              </button>
              <button className="w-full quantum-card text-left">
                <span className="text-white">Histórico de Sessões</span>
              </button>
              <button className="w-full quantum-card text-left">
                <span className="text-white">Assinatura</span>
              </button>
              <button className="w-full quantum-card text-left">
                <span className="text-white">Suporte</span>
              </button>
              <button 
                onClick={() => setShowOnboarding(true)}
                className="w-full quantum-card text-left"
              >
                <span className="text-blue-400">Refazer Quiz de Personalização</span>
              </button>
              <button className="w-full quantum-card text-left">
                <span className="text-red-400">Sair</span>
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="quantum-app min-h-screen">
      <div className="max-w-md mx-auto pb-20">
        <div className="p-4">
          {renderContent()}
        </div>
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}