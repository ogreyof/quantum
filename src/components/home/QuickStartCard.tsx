import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { QuickStartProgram, Category } from "@/types";

interface QuickStartCardProps {
  program: QuickStartProgram;
  onStart: (id: string) => void;
  onNavigate?: (category: Category) => void;
}

export const QuickStartCard = ({ program, onStart, onNavigate }: QuickStartCardProps) => {
  const IconComponent = program.icon;

  const handleClick = () => {
    if (program.category && onNavigate) {
      onNavigate(program.category);
    } else {
      onStart(program.id);
    }
  };

  return (
    <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <IconComponent className={`h-5 w-5 ${program.color}`} />
          <div>
            <h3 className="font-semibold text-black">{program.title}</h3>
            <p className="text-sm text-gray-600">{program.duration}</p>
          </div>
        </div>
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
          onClick={handleClick}
        >
          <Play className="h-4 w-4 mr-2" />
          Começar agora
        </Button>
      </CardContent>
    </Card>
  );
};