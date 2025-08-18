import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Target } from "lucide-react";
import { GuidedPlan } from "@/data/plans";

interface PlanCardProps {
  plan: GuidedPlan;
  onStart: (planId: string) => void;
}

export const PlanCard = ({ plan, onStart }: PlanCardProps) => {
  const IconComponent = plan.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante':
        return 'bg-green-100 text-green-700';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-700';
      case 'Avançado':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <IconComponent className="h-6 w-6 text-purple-600" />
            <div>
              <h3 className="font-bold text-black text-lg">{plan.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{plan.duration}</span>
              </div>
            </div>
          </div>
          <Badge className={`text-xs ${getDifficultyColor(plan.difficulty)}`}>
            {plan.difficulty}
          </Badge>
        </div>

        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
            <Target className="h-4 w-4 text-purple-600" />
            Benefícios:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {plan.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
          onClick={() => onStart(plan.id)}
        >
          <Play className="h-4 w-4 mr-2" />
          Iniciar Plano
        </Button>
      </CardContent>
    </Card>
  );
};