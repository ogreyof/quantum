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
}

export const HomePage = ({ onAction, onNavigate }: HomePageProps) => {
  return (
    <>
      <Header onAction={onAction} />
      <StreakCard />
      
      {/* Início Rápido */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-white">Início Rápido</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickStartPrograms.map((program) => (
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

      <ProgressSection />
    </>
  );
};