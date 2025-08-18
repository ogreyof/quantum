import { MadeWithLasy } from "@/components/made-with-lasy";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Play, 
  Clock, 
  Flame, 
  User, 
  Calendar, 
  Music, 
  Home as HomeIcon,
  Search,
  Bell,
  Settings,
  Target
} from "lucide-react";

export default function Home() {
  const handleButtonClick = (action: string) => {
    console.log(`Ação: ${action}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
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
            onClick={() => handleButtonClick('search')}
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:bg-purple-500/20"
            onClick={() => handleButtonClick('notifications')}
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
            onClick={() => handleButtonClick('settings')}
          >
            <Settings className="h-5 w-5 text-white" />
          </Button>
        </div>
      </header>

      {/* Sequência Destaque */}
      <div className="p-6">
        <Card className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 border-0 text-white shadow-lg shadow-purple-500/25">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-xl font-bold">Sequência de 5 dias! 🔥</h3>
                <p className="text-white/80">
                  Continue assim para manter sua sequência
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Início Rápido */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-white">Início Rápido</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Card Cervical */}
          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-black">Cervical</h3>
                  <p className="text-sm text-gray-600">10min</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                onClick={() => handleButtonClick('cervical')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Card Drenagem */}
          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-black">Drenagem Pernas</h3>
                  <p className="text-sm text-gray-600">15min</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                onClick={() => handleButtonClick('drenagem')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Card Sono */}
          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-cyan-400" />
                <div>
                  <h3 className="font-semibold text-black">Sono</h3>
                  <p className="text-sm text-gray-600">12min</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                onClick={() => handleButtonClick('sono')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Card Relax */}
          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <User className="h-5 w-5 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-black">Relax</h3>
                  <p className="text-sm text-gray-600">8min</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                onClick={() => handleButtonClick('relax')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Progresso */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Seu Progresso</h2>
          <Badge className="bg-purple-600 text-white animate-pulse">
            Nível 3
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Minutos Totais */}
          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">245</div>
              <p className="text-sm text-gray-600">Minutos Totais</p>
            </CardContent>
          </Card>

          {/* Sequência Atual */}
          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl">
            <CardContent className="p-4 text-center">
              <Flame className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">5 dias</div>
              <p className="text-sm text-gray-600">Sequência Atual</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-purple-500/20 p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-purple-500 hover:bg-purple-500/20"
            onClick={() => handleButtonClick('home')}
          >
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs">Início</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
            onClick={() => handleButtonClick('programs')}
          >
            <Play className="h-5 w-5" />
            <span className="text-xs">Programas</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
            onClick={() => handleButtonClick('plans')}
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs">Planos</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
            onClick={() => handleButtonClick('sounds')}
          >
            <Music className="h-5 w-5" />
            <span className="text-xs">Sons</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
            onClick={() => handleButtonClick('profile')}
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </nav>

      <div className="pb-20">
        <MadeWithLasy />
      </div>
    </div>
  );
}