import { Button } from "@/components/ui/button";
import { Home, Calendar, Music, User } from "lucide-react";
import { Category } from "@/types";

interface BottomNavigationProps {
  currentCategory: Category;
  onNavigate: (category: Category) => void;
  onAction: (action: string) => void;
}

export const BottomNavigation = ({ currentCategory, onNavigate, onAction }: BottomNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-purple-500/20 p-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 ${currentCategory === 'home' ? 'text-purple-500' : 'text-gray-400'} hover:bg-purple-500/20 hover:text-white`}
          onClick={() => onNavigate('home')}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">Início</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
          onClick={() => onNavigate('planos')}
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs">Planos</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
          onClick={() => onAction('sounds')}
        >
          <Music className="h-5 w-5" />
          <span className="text-xs">Sons</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
          onClick={() => onAction('profile')}
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Perfil</span>
        </Button>
      </div>
    </nav>
  );
};