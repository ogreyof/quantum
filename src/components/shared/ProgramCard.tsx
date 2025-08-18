import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { Program } from "@/types";

interface ProgramCardProps {
  program: Program;
  onStart: (programId: string) => void;
}

export const ProgramCard = ({ program, onStart }: ProgramCardProps) => {
  const IconComponent = program.icon;

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
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <IconComponent className="h-5 w-5 text-purple-600" />
            <div>
              <h3 className="font-semibold text-black">{program.title}</h3>
              <p className="text-sm text-gray-600">{program.duration}</p>
            </div>
          </div>
          <Badge className={`text-xs ${getDifficultyColor(program.difficulty)}`}>
            {program.difficulty}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3">{program.description}</p>
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
          onClick={() => onStart(program.id)}
        >
          <Play className="h-4 w-4 mr-2" />
          Iniciar Programa
        </Button>
      </CardContent>
    </Card>
  );
};