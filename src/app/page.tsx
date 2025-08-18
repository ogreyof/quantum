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
  Home,
  Search,
  Bell,
  Settings,
  Target
} from "lucide-react";

export default function Home() {
  const handleButtonClick = (action: string) => {
    console.log(`Ação: ${action}`);
    // Aqui você pode adicionar lógica específica para cada ação
  };

  return (
    <div className="min-h-screen bg-black text-ice-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-neon-purple/20">
        <div>
          <h1 className="text-2xl font-bold text-ice-white flex items-center gap-2">
            Olá, Maria! 👋
          </h1>
          <p className="text-muted-foreground">
            Pronta para sua sessão de hoje?
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => handleButtonClick('search')}
          >
            <Search className="h-5 w-5 text-ice-white" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => handleButtonClick('notifications')}
          >
            <Bell className="h-5 w-5 text-ice-white" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-turquoise text-black text-xs p-0 flex items-center justify-center">
              2
            </Badge>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => handleButtonClick('settings')}
          >
            <Settings className="h-5 w-5 text-ice-white" />
          </Button>
        </div>
      </header>

      {/* Sequência Destaque */}
      <div className="p-6">
        <Card className="gradient-primary neon-glow border-0 text-ice-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-ice-white" />
              <div>
                <h3 className="text-xl font-bold">Sequência de 5 dias! 🔥</h3>
                <p className="text-ice-white/80">
                  Continue assim para manter sua sequência
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Início Rápido */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-ice-white">Início Rápido</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Card Cervical */}
          <Card className="card-premium neon-border hover:neon-glow transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-neon-purple" />
                <div>
                  <h3 className="font-semibold text-black">Cervical</h3>
                  <p className="text-sm text-gray-600">10min</p>
                </div>
              </div>
              <Button 
                className="w-full btn-futuristic"
                onClick={() => handleButtonClick('cervical')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Card Drenagem */}
          <Card className="card-premium neon-border hover:neon-glow transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-electric-blue" />
                <div>
                  <h3 className="font-semibold text-black">Drenagem Pernas</h3>
                  <p className="text-sm text-gray-600">15min</p>
                </div>
              </div>
              <Button 
                className="w-full btn-futuristic"
                onClick={() => handleButtonClick('drenagem')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Card Sono */}
          <Card className="card-premium neon-border hover:neon-glow transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-turquoise" />
                <div>
                  <h3 className="font-semibold text-black">Sono</h3>
                  <p className="text-sm text-gray-600">12min</p>
                </div>
              </div>
              <Button 
                className="w-full btn-futuristic"
                onClick={() => handleButtonClick('sono')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          {/* Card Relax */}
          <Card className="card-premium neon-border hover:neon-glow transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <User className="h-5 w-5 text-neon-purple" />
                <div>
                  <h3 className="font-semibold text-black">Relax</h3>
                  <p className="text-sm text-gray-600">8min</p>
                </div>
              </div>
              <Button 
                className="w-full btn-futuristic"
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
          <h2 className="text-xl font-bold text-ice-white">Seu Progresso</h2>
          <Badge className="bg-neon-purple text-ice-white pulse-neon">
            Nível 3
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Minutos Totais */}
          <Card className="card-premium neon-border">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-electric-blue mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">245</div>
              <p className="text-sm text-gray-600">Minutos Totais</p>
            </CardContent>
          </Card>

          {/* Sequência Atual */}
          <Card className="card-premium neon-border">
            <CardContent className="p-4 text-center">
              <Flame className="h-8 w-8 text-turquoise mx-auto mb-2" />
              <div className="text-2xl font-bold text-black">5 dias</div>
              <p className="text-sm text-gray-600">Sequência Atual</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-neon-purple/20 p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-neon-purple"
            onClick={() => handleButtonClick('home')}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Início</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-ice-white/60"
            onClick={() => handleButtonClick('programs')}
          >
            <Play className="h-5 w-5" />
            <span className="text-xs">Programas</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-ice-white/60"
            onClick={() => handleButtonClick('plans')}
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs">Planos</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-ice-white/60"
            onClick={() => handleButtonClick('sounds')}
          >
            <Music className="h-5 w-5" />
            <span className="text-xs">Sons</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-ice-white/60"
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