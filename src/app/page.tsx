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
            onNavigate={navigateToCategory} 
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
      
      case 'planos':
        return (
          <CategoryView
            title="Planos Guiados"
            subtitle="Programas estruturados de 7, 15 e 30 dias"
            programs={[]} // Implementar planos futuramente
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