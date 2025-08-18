import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { Program } from "@/types";

interface CategoryViewProps {
  title: string;
  subtitle: string;
  programs: Program[];
  onBack: () => void;
  onStartProgram: (programId: string) => void;
}

export const CategoryView = ({ title, subtitle, programs, onBack, onStartProgram }: CategoryViewProps) => {
  return (
    <>
      <CategoryHeader title={title} subtitle={subtitle} onBack={onBack} />
      <div className="p-6 space-y-4">
        {programs.map((program) => (
          <ProgramCard 
            key={program.id} 
            program={program} 
            onStart={onStartProgram} 
          />
        ))}
      </div>
    </>
  );
};