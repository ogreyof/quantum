import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

interface StreakCardProps {
  streak?: number;
}

export const StreakCard: React.FC<StreakCardProps> = ({ streak = 5 }) => {
  return (
    <div className="p-6">
      <Card className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 border-0 text-white shadow-lg shadow-purple-500/25">
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