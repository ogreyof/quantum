import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame } from "lucide-react";

export const ProgressSection = () => {
  return (
    <div className="px-6 pb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Seu Progresso</h2>
        <Badge className="bg-purple-600 text-white animate-pulse">
          Nível 3
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">245</div>
            <p className="text-sm text-gray-600">Minutos Totais</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl">
          <CardContent className="p-4 text-center">
            <Flame className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">5 dias</div>
            <p className="text-sm text-gray-600">Sequência Atual</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};