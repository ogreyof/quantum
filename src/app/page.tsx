"use client";

import { useState } from "react";
import { MadeWithLasy } from "@/components/made-with-lasy";
import { HomePage } from "@/components/home/HomePage";
import { CategoryView } from "@/components/categories/CategoryView";
import { PlansView } from "@/components/plans/PlansView";
import { SessionView } from "@/components/session/SessionView";
import { CompletionView } from "@/components/session/CompletionView";
import { BottomNavigation } from "@/components/shared/BottomNavigation";
import { useNavigation } from "@/hooks/useNavigation";
import { programsByCategory } from "@/data/programs";

type AppState = 'navigation' | 'session' | 'completion';

export default function Home() {
  const { currentCategory, navigateToCategory, navigateToHome } = useNavigation();
  const [appState, setAppState] = useState<AppState>('navigation');
  const [currentSession, setCurrentSession] = useState<{title: string, duration: string} | null>(null);

  const handleButtonClick = (action: string) => {
    console.log(`Ação: ${action}`);
  };

  const handleStartProgram = (programId: string) => {
    // Encontrar o programa nos dados
    const allPrograms = Object.values(programsByCategory).flat();
    const program = allPrograms.find(p => p.id === programId);
    
    if (program) {
      setCurrentSession({
        title: program.title,
        duration: program.duration
      });
      setAppState('session');
    }
  };

  const handleStartPlan = (planId: string) => {
    console.log(`Iniciando plano: ${planId}`);
    // Aqui você pode implementar a lógica para iniciar um plano guiado
  };

  const handleSessionComplete = () => {
    setAppState('completion');
  };

  const handleBackToNavigation = () => {
    setAppState('navigation');
    setCurrentSession(null);
  };

  const handleBackToHome = () => {
    setAppState('navigation');
    setCurrentSession(null);
    navigateToHome();
  };

  const renderCurrentView = () => {
    if (appState === 'session' && currentSession) {
      return (
        <SessionView
          programTitle={currentSession.title}
          duration={currentSession.duration}
          onBack={handleBackToNavigation}
          onComplete={handleSessionComplete}
        />
      );
    }

    if (appState === 'completion' && currentSession) {
      return (
        <CompletionView
          programTitle={currentSession.title}
          onBack={handleBackToNavigation}
          onHome={handleBackToHome}
        />
      );
    }

    // Navegação normal
    switch (currentCategory) {
      case 'home':
        return (
          <HomePage 
            onAction={handleButtonClick} 
            onNavigate={navigateToCategory} 
          />
        );
      
      case 'planos':
        return (
          <PlansView
            onBack={navigateToHome}
            onStartPlan={handleStartPlan}
          />
        );
      
      case 'coluna':
        return (
          <CategoryView
            title="Saúde da Coluna"
            subtitle="Programas para alívio e fortalecimento"
            programs={programsByCategory.coluna}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'articulacoes':
        return (
          <CategoryView
            title="Articulações & Mobilidade"
            subtitle="Artrite, artrose e rigidez articular"
            programs={programsByCategory.articulacoes}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'drenagem':
        return (
          <CategoryView
            title="Drenagem & Circulação"
            subtitle="Melhore sua circulação e reduza inchaços"
            programs={programsByCategory.drenagem}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'sono':
        return (
          <CategoryView
            title="Sono & Relaxamento"
            subtitle="Relaxe profundamente e durma melhor"
            programs={programsByCategory.sono}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'estetica':
        return (
          <CategoryView
            title="Estética Facial"
            subtitle="Rejuvenesça e tonifique seu rosto"
            programs={programsByCategory.estetica}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'cabelos':
        return (
          <CategoryView
            title="Cabelos"
            subtitle="Fortalecimento e crescimento capilar"
            programs={programsByCategory.cabelos}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'emagrecimento':
        return (
          <CategoryView
            title="Emagrecimento & Tonificação"
            subtitle="Queima localizada e firmeza da pele"
            programs={programsByCategory.emagrecimento}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'performance':
        return (
          <CategoryView
            title="Performance & Recuperação"
            subtitle="Maximize seu desempenho atlético"
            programs={programsByCategory.performance}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'bem-estar':
        return (
          <CategoryView
            title="Bem-Estar Geral"
            subtitle="Energia, foco e disposição diária"
            programs={programsByCategory['bem-estar']}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      default:
        return (
          <HomePage 
            onAction={handleButtonClick} 
            onNavigate={navigateToCategory} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Conteúdo principal */}
      <div className="pb-24">
        {renderCurrentView()}
      </div>

      {/* Barra de navegação sempre visível (exceto durante sessões) */}
      {appState === 'navigation' && (
        <BottomNavigation 
          currentCategory={currentCategory}
          onNavigate={navigateToCategory}
          onAction={handleButtonClick}
        />
      )}

      {/* Made with Lasy */}
      <div className="pb-4">
        <MadeWithLasy />
      </div>
    </div>
  );
}