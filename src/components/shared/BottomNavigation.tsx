import { Button } from "@/components/ui/button";
import { Home, Calendar, Music, User, Play } from "lucide-react";
import { Category } from "@/types";

interface BottomNavigationProps {
  currentCategory: Category;
  onNavigate: (category: Category) => void;
  onAction: (action: string) => void;
}

export const BottomNavigation = ({ currentCategory, onNavigate, onAction }: BottomNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-purple-500/20 p-4 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 px-3 py-2 ${
            currentCategory === 'home' 
              ? 'text-purple-500' 
              : 'text-gray-400'
          } hover:bg-purple-500/20 hover:text-white transition-colors`}
          onClick={() => onNavigate('home')}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs font-medium">Início</span>
        </Button>

        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 px-3 py-2 ${
            ['coluna', 'articulacoes', 'drenagem', 'sono', 'estetica', 'cabelos', 'emagrecimento', 'performance', 'bem-estar'].includes(currentCategory)
              ? 'text-purple-500' 
              : 'text-gray-400'
          } hover:bg-purple-500/20 hover:text-white transition-colors`}
          onClick={() => onAction('programs')}
        >
          <Play className="h-5 w-5" />
          <span className="text-xs font-medium">Programas</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 px-3 py-2 ${
            currentCategory === 'planos' 
              ? 'text-purple-500' 
              : 'text-gray-400'
          } hover:bg-purple-500/20 hover:text-white transition-colors`}
          onClick={() => onNavigate('planos')}
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-medium">Planos</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1 px-3 py-2 text-gray-400 hover:bg-purple-500/20 hover:text-white transition-colors"
          onClick={() => onAction('sounds')}
        >
          <Music className="h-5 w-5" />
          <span className="text-xs font-medium">Sons</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1 px-3 py-2 text-gray-400 hover:bg-purple-500/20 hover:text-white transition-colors"
          onClick={() => onAction('profile')}
        >
          <User className="h-5 w-5" />
          <span className="text-xs font-medium">Perfil</span>
        </Button>
      </div>
    </nav>
  );
};