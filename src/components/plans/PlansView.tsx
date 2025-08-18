import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { PlanCard } from "./PlanCard";
import { guidedPlans } from "@/data/plans";

interface PlansViewProps {
  onBack: () => void;
  onStartPlan: (planId: string) => void;
}

export const PlansView = ({ onBack, onStartPlan }: PlansViewProps) => {
  return (
    <>
      <CategoryHeader 
        title="Planos Guiados" 
        subtitle="Programas estruturados para resultados garantidos" 
        onBack={onBack} 
      />
      
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-white mb-2">🎯 Planos para Iniciantes</h2>
          <div className="space-y-4">
            {guidedPlans.filter(plan => plan.difficulty === 'Iniciante').map((plan) => (
              <PlanCard 
                key={plan.id} 
                plan={plan} 
                onStart={onStartPlan} 
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-white mb-2">⚡ Planos Intermediários</h2>
          <div className="space-y-4">
            {guidedPlans.filter(plan => plan.difficulty === 'Intermediário').map((plan) => (
              <PlanCard 
                key={plan.id} 
                plan={plan} 
                onStart={onStartPlan} 
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold text-white mb-2">🔥 Planos Avançados</h2>
          <div className="space-y-4">
            {guidedPlans.filter(plan => plan.difficulty === 'Avançado').map((plan) => (
              <PlanCard 
                key={plan.id} 
                plan={plan} 
                onStart={onStartPlan} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};