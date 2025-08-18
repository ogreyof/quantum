"use client";

import { useState } from "react";
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
  Target,
  ArrowLeft,
  Star,
  Award,
  TrendingUp,
  Heart,
  Brain,
  Dumbbell,
  Sparkles,
  Shield,
  Moon,
  Smile,
  Activity
} from "lucide-react";

type Category = 'home' | 'coluna' | 'articulacoes' | 'drenagem' | 'sono' | 'estetica' | 'cabelos' | 'emagrecimento' | 'performance' | 'bem-estar' | 'planos';

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState<Category>('home');

  const handleButtonClick = (action: string) => {
    console.log(`Ação: ${action}`);
  };

  const navigateToCategory = (category: Category) => {
    setCurrentCategory(category);
  };

  const renderHome = () => (
    <>
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
              <Flame className="h-8 w-8 text-white" />
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

          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-black">Drenagem</h3>
                  <p className="text-sm text-gray-600">15min</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                onClick={() => navigateToCategory('drenagem')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Moon className="h-5 w-5 text-cyan-400" />
                <div>
                  <h3 className="font-semibold text-black">Sono</h3>
                  <p className="text-sm text-gray-600">12min</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                onClick={() => navigateToCategory('sono')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-black">Estética</h3>
                  <p className="text-sm text-gray-600">8min</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                onClick={() => navigateToCategory('estetica')}
              >
                <Play className="h-4 w-4 mr-2" />
                Começar agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Categorias Principais */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold mb-4 text-white">Programas Completos</h2>
        
        <div className="space-y-3">
          <Button 
            className="w-full bg-gray-100 text-black hover:bg-gray-200 rounded-xl p-4 h-auto justify-start"
            onClick={() => navigateToCategory('coluna')}
          >
            <Shield className="h-6 w-6 text-purple-600 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Saúde da Coluna</div>
              <div className="text-sm text-gray-600">Hérnia, lombalgia, postura</div>
            </div>
          </Button>

          <Button 
            className="w-full bg-gray-100 text-black hover:bg-gray-200 rounded-xl p-4 h-auto justify-start"
            onClick={() => navigateToCategory('articulacoes')}
          >
            <Activity className="h-6 w-6 text-blue-500 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Articulações & Mobilidade</div>
              <div className="text-sm text-gray-600">Artrite, artrose, rigidez</div>
            </div>
          </Button>

          <Button 
            className="w-full bg-gray-100 text-black hover:bg-gray-200 rounded-xl p-4 h-auto justify-start"
            onClick={() => navigateToCategory('performance')}
          >
            <Dumbbell className="h-6 w-6 text-cyan-400 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Performance & Recuperação</div>
              <div className="text-sm text-gray-600">Atletas, pós-treino</div>
            </div>
          </Button>

          <Button 
            className="w-full bg-gray-100 text-black hover:bg-gray-200 rounded-xl p-4 h-auto justify-start"
            onClick={() => navigateToCategory('emagrecimento')}
          >
            <TrendingUp className="h-6 w-6 text-purple-600 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Emagrecimento & Tonificação</div>
              <div className="text-sm text-gray-600">Queima localizada, firmeza</div>
            </div>
          </Button>
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
    </>
  );

  const renderCategoryHeader = (title: string, subtitle: string) => (
    <header className="flex items-center justify-between p-6 border-b border-purple-500/20">
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-purple-500/20"
          onClick={() => setCurrentCategory('home')}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-gray-400">{subtitle}</p>
        </div>
      </div>
    </header>
  );

  const renderProgramCard = (title: string, duration: string, description: string, icon: any, difficulty: 'Iniciante' | 'Intermediário' | 'Avançado') => (
    <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {icon}
            <div>
              <h3 className="font-semibold text-black">{title}</h3>
              <p className="text-sm text-gray-600">{duration}</p>
            </div>
          </div>
          <Badge className={`text-xs ${difficulty === 'Iniciante' ? 'bg-green-100 text-green-700' : difficulty === 'Intermediário' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
            {difficulty}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
          onClick={() => handleButtonClick(`start-${title}`)}
        >
          <Play className="h-4 w-4 mr-2" />
          Iniciar Programa
        </Button>
      </CardContent>
    </Card>
  );

  const renderColuna = () => (
    <>
      {renderCategoryHeader("Saúde da Coluna", "Programas para alívio e fortalecimento")}
      <div className="p-6 space-y-4">
        {renderProgramCard(
          "Hérnia de Disco",
          "20min",
          "Alívio da dor e fortalecimento da musculatura de suporte",
          <Shield className="h-5 w-5 text-red-500" />,
          "Intermediário"
        )}
        {renderProgramCard(
          "Lombalgia",
          "15min",
          "Redução da dor lombar e melhora da mobilidade",
          <Target className="h-5 w-5 text-purple-600" />,
          "Iniciante"
        )}
        {renderProgramCard(
          "Correção Postural",
          "25min",
          "Fortalecimento e alinhamento da coluna vertebral",
          <Activity className="h-5 w-5 text-blue-500" />,
          "Intermediário"
        )}
        {renderProgramCard(
          "Bico de Papagaio",
          "18min",
          "Alívio da rigidez e melhora da flexibilidade cervical",
          <Zap className="h-5 w-5 text-cyan-400" />,
          "Avançado"
        )}
        {renderProgramCard(
          "Escoliose",
          "30min",
          "Programa completo para correção e fortalecimento",
          <TrendingUp className="h-5 w-5 text-purple-600" />,
          "Avançado"
        )}
      </div>
    </>
  );

  const renderDrenagem = () => (
    <>
      {renderCategoryHeader("Drenagem & Circulação", "Melhore sua circulação e reduza inchaços")}
      <div className="p-6 space-y-4">
        {renderProgramCard(
          "Drenagem de Pernas",
          "15min",
          "Reduz inchaço e melhora circulação nas pernas",
          <Zap className="h-5 w-5 text-blue-500" />,
          "Iniciante"
        )}
        {renderProgramCard(
          "Drenagem Linfática Completa",
          "35min",
          "Programa completo para todo o corpo",
          <Heart className="h-5 w-5 text-purple-600" />,
          "Intermediário"
        )}
        {renderProgramCard(
          "Varizes & Má Circulação",
          "20min",
          "Estimula circulação e fortalece vasos sanguíneos",
          <Activity className="h-5 w-5 text-cyan-400" />,
          "Intermediário"
        )}
        {renderProgramCard(
          "Retenção de Líquidos",
          "25min",
          "Elimina toxinas e reduz retenção",
          <Sparkles className="h-5 w-5 text-purple-600" />,
          "Iniciante"
        )}
      </div>
    </>
  );

  const renderSono = () => (
    <>
      {renderCategoryHeader("Sono & Relaxamento", "Relaxe profundamente e durma melhor")}
      <div className="p-6 space-y-4">
        {renderProgramCard(
          "Relaxamento Profundo",
          "8min",
          "Libera tensões e prepara para o descanso",
          <Moon className="h-5 w-5 text-purple-600" />,
          "Iniciante"
        )}
        {renderProgramCard(
          "Ansiedade & Estresse",
          "12min",
          "Acalma o sistema nervoso e reduz ansiedade",
          <Brain className="h-5 w-5 text-blue-500" />,
          "Iniciante"
        )}
        {renderProgramCard(
          "Preparação para Dormir",
          "15min",
          "Rotina completa para uma noite tranquila",
          <Clock className="h-5 w-5 text-cyan-400" />,
          "Iniciante"
        )}
        {renderProgramCard(
          "Alongamento Relaxante",
          "10min",
          "Alonga músculos e relaxa profundamente",
          <Activity className="h-5 w-5 text-purple-600" />,
          "Iniciante"
        )}
      </div>
    </>
  );

  const renderEstetica = () => (
    <>
      {renderCategoryHeader("Estética Facial", "Rejuvenesça e tonifique seu rosto")}
      <div className="p-6 space-y-4">
        {renderProgramCard(
          "Papada",
          "12min",
          "Tonifica músculos do pescoço e reduz papada",
          <Smile className="h-5 w-5 text-purple-600" />,
          "Intermediário"
        )}
        {renderProgramCard(
          "Bigode Chinês",
          "8min",
          "Suaviza linhas de expressão ao redor da boca",
          <Sparkles className="h-5 w-5 text-cyan-400" />,
          "Iniciante"
        )}
        {renderProgramCard(
          "Olheiras",
          "6min",
          "Melhora circulação e reduz olheiras",
          <Star className="h-5 w-5 text-blue-500" />,
          "Iniciante"
        )}
        {renderProgramCard(
          "Rejuvenescimento Facial",
          "20min",
          "Programa completo anti-idade",
          <Award className="h-5 w-5 text-purple-600" />,
          "Avançado"
        )}
      </div>
    </>
  );

  const renderPerformance = () => (
    <>
      {renderCategoryHeader("Performance & Recuperação", "Maximize seu desempenho atlético")}
      <div className="p-6 space-y-4">
        {renderProgramCard(
          "Recuperação Pós-Treino",
          "18min",
          "Acelera recuperação muscular após exercícios",
          <Dumbbell className="h-5 w-5 text-purple-600" />,
          "Intermediário"
        )}
        {renderProgramCard(
          "Prevenção de Lesões",
          "15min",
          "Fortalece músculos e previne lesões",
          <Shield className="h-5 w-5 text-blue-500" />,
          "Intermediário"
        )}
        {renderProgramCard(
          "Flexibilidade Avançada",
          "25min",
          "Melhora amplitude de movimento",
          <Activity className="h-5 w-5 text-cyan-400" />,
          "Avançado"
        )}
        {renderProgramCard(
          "Energia Pré-Treino",
          "10min",
          "Ativa músculos e prepara para exercícios",
          <Zap className="h-5 w-5 text-purple-600" />,
          "Iniciante"
        )}
      </div>
    </>
  );

  const renderCurrentCategory = () => {
    switch (currentCategory) {
      case 'home':
        return renderHome();
      case 'coluna':
        return renderColuna();
      case 'drenagem':
        return renderDrenagem();
      case 'sono':
        return renderSono();
      case 'estetica':
        return renderEstetica();
      case 'performance':
        return renderPerformance();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {renderCurrentCategory()}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-purple-500/20 p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Button 
            variant="ghost" 
            className={`flex flex-col items-center gap-1 ${currentCategory === 'home' ? 'text-purple-500' : 'text-gray-400'} hover:bg-purple-500/20 hover:text-white`}
            onClick={() => setCurrentCategory('home')}
          >
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs">Início</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col items-center gap-1 text-gray-400 hover:bg-purple-500/20 hover:text-white"
            onClick={() => navigateToCategory('planos')}
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