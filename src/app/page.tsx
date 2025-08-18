"use client";

import { MadeWithLasy } from "@/components/made-with-lasy";
import { HomePage } from "@/components/home/HomePage";
import { CategoryView } from "@/components/categories/CategoryView";
import { BottomNavigation } from "@/components/shared/BottomNavigation";
import { useNavigation } from "@/hooks/useNavigation";
import { programsByCategory } from "@/data/programs";

export default function Home() {
  const { currentCategory, navigateToCategory, navigateToHome } = useNavigation();

  const handleButtonClick = (action: string) => {
    console.log(`Ação: ${action}`);
  };

  const handleStartProgram = (programId: string) => {
    console.log(`Iniciando programa: ${programId}`);
  };

  const renderCurrentView = () => {
    switch (currentCategory) {
      case 'home':
        return (
          <HomePage 
            onAction={handleButtonClick} 
            onNavigate={navig ateToCategory} 
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
      {renderCurrentView()}

      <BottomNavigation 
        currentCategory={currentCategory}
        onNavigate={navigateToCategory}
        onAction={handleButtonClick}
      />

      <div className="pb-20">
        <MadeWithLasy />
      </div>
    </div>
  );
}