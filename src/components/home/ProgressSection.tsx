import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame, Trophy, Star } from "lucide-react";

interface ProgressSectionProps {
  userProgress?: {
    totalMinutes: number;
    streak: number;
    completedSessions: number;
    level: number;
    points: number;
  };
}

export const ProgressSection = ({ userProgress }: ProgressSectionProps) => {
  const progress = userProgress || {
    totalMinutes: 245,
    streak: 5,
    completedSessions: 12,
    level: 3,
    points: 1250
  };

  const levelProgress = (progress.points % 1000) / 10; // Progresso para próximo nível

  return (
    <div className="px-6 pb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Seu Progresso</h2>
        <Badge className="bg-gradient-quantum text-white animate-pulse">
          Nível {progress.level}
        </Badge>
      </div>
      
      {/* Barra de Nível */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Nível {progress.level}</span>
          <span>{progress.points} pts</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-quantum h-2 rounded-full transition-all duration-300"
            style={{ width: `${levelProgress}%` }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-card border border-primary/30 rounded-2xl">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{progress.totalMinutes}</div>
            <p className="text-xs text-muted-foreground">Minutos Totais</p>
          </CardContent>
        </Card>

        <Card className="bg-card border border-primary/30 rounded-2xl">
          <CardContent className="p-4 text-center">
            <Flame className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{progress.streak} dias</div>
            <p className="text-xs text-muted-foreground">Sequência Atual</p>
          </CardContent>
        </Card>

        <Card className="bg-card border border-primary/30 rounded-2xl">
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{progress.completedSessions}</div>
            <p className="text-xs text-muted-foreground">Sessões</p>
          </CardContent>
        </Card>

        <Card className="bg-card border border-primary/30 rounded-2xl">
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{progress.points}</div>
            <p className="text-xs text-muted-foreground">Pontos</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};