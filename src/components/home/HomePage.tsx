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

export const HomePage = ({ 
  onAction, 
  onNavigate, 
  userProgress,
  quickStartRecommendations 
}: HomePageProps) => {
  // Usar recomendações personalizadas se disponíveis, senão usar padrão
  const displayPrograms = quickStartRecommendations || quickStartPrograms;

  return (
    <>
      <Header onAction={onAction} />
      <StreakCard streak={userProgress?.streak || 5} />
      
      {/* Início Rápido Personalizado */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-white">
          {quickStartRecommendations ? 'Recomendado para Você' : 'Início Rápido'}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {displayPrograms.slice(0, 4).map((program) => (
            <QuickStartCard 
              key={program.id} 
              program={program} 
              onStart={onAction}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>

      {/* Categorias Principais */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-white">Programas Completos</h2>
        <div className="space-y-3">
          {mainCategories.map((category) => (
            <CategoryButton 
              key={category.id} 
              category={category} 
              onNavigate={onNavigate} 
            />
          ))}
        </div>
      </div>

      <ProgressSection userProgress={userProgress} />
    </>
  );
};
</l

<lasy-write path="src/components/home/StreakCard.tsx" description="Card de sequência atualizado">
import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

interface StreakCardProps {
  streak: number;
}

export const StreakCard = ({ streak }: StreakCardProps) => {
  return (
    <div className="p-6">
      <Card className="bg-gradient-quantum border-0 text-white shadow-lg shadow-purple-500/25">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Flame className="h-8 w-8 text-white" />
            <div>
              <h3 className="text-xl font-bold">Sequência de {streak} dias! 🔥</h3>
              <p className="text-white/80">
                Continue assim para manter sua sequência
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};