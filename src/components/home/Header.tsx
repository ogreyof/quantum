import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, Settings } from "lucide-react";

interface HeaderProps {
  onAction: (action: string) => void;
}

export const Header = ({ onAction }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-purple-500/20">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          Olá, Maria! 👋
        </h1>
        <p className="text-gray-400">
          Pronta para sua sessão de hoje?
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-purple-500/20"
          onClick={() => onAction('search')}
        >
          <Search className="h-5 w-5 text-white" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-purple-500/20"
          onClick={() => onAction('notifications')}
        >
          <Bell className="h-5 w-5 text-white" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-cyan-400 text-black text-xs p-0 flex items-center justify-center">
            2
          </Badge>
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-purple-500/20"
          onClick={() => onAction('settings')}
        >
          <Settings className="h-5 w-5 text-white" />
        </Button>
      </div>
    </header>
  );
};