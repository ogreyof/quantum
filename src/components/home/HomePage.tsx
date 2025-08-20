"use client";

import { Header } from "./Header";
import { StreakCard } from "./StreakCard";
import { QuickStartCard } from "./QuickStartCard";
import { CategoryButton } from "./CategoryButton";
import { ProgressSection } from "./ProgressSection";
import { quickStartPrograms, mainCategories } from "@/data/programs";
import { Category } from "@/types";

interface HomePageProps {
  onAction: (action: string) => void;
  onNavigate: (category: Category) => void;
  userProgress?: {
    totalMinutes: number;
    streak: number;
    completedSessions: number;
    level: number;
    points: number;
  };
  quickStartRecommendations?: Array<{
    id: string;
    title: string;
    duration: string;
    category?: Category;
  }>;
}

export const HomePage = (props: HomePageProps) => {
  const { onAction, onNavigate, userProgress, quickStartRecommendations } = props;
  const displayPrograms = quickStartRecommendations || quickStartPrograms;

  return (
    <div className="min-h-screen bg-background">
      <Header onAction={onAction} />
      
      <StreakCard streak={userProgress?.streak} />
      
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-white">
          {quickStartRecommendations ? "Recomendado para Você" : "Início Rápido"}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {displayPrograms.slice(0, 4).map((program) => {
            return (
              <QuickStartCard 
                key={program.id} 
                program={program} 
                onStart={onAction}
                onNavigate={onNavigate}
              />
            );
          })}
        </div>
      </div>

      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-white">Programas Completos</h2>
        <div className="space-y-3">
          {mainCategories.map((category) => {
            return (
              <CategoryButton 
                key={category.id} 
                category={category} 
                onNavigate={onNavigate} 
              />
            );
          })}
        </div>
      </div>

      <ProgressSection userProgress={userProgress} />
    </div>
  );
};