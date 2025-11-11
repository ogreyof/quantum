"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Play, Calendar, Music, User, Bell, Search, Clock, 
  Trophy, Target, Flame, ChevronRight, Star, X, ArrowLeft,
  Droplets, Scissors, TrendingUp, Shield, Activity, Moon,
  Heart, Coffee, Zap, Award, Users, BarChart3, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { RegisterScreen } from "@/components/auth/RegisterScreen";
import { ForgotPasswordScreen } from "@/components/auth/ForgotPasswordScreen";
import { QuizFlow } from "@/components/quiz/QuizFlow";
import { ProgramsView } from "@/components/programs/ProgramsView";
import { PlansView } from "@/components/plans/PlansView";
import { SoundsView } from "@/components/sounds/SoundsView";
import { ProfileView } from "@/components/profile/ProfileView";
import { SessionView } from "@/components/session/SessionView";
import { CompletionView } from "@/components/session/CompletionView";
import { QuizResponse, QuizRecommendations } from "@/types/auth";

// Mock data
const mockUserProgress = {
  totalMinutes: 245,
  currentStreak: 5,
  longestStreak: 12,
  completedPrograms: 18,
  points: 1250,
  level: 3,
  nextLevelPoints: 1500
};

const quickStartPrograms = [
  { id: 'cervical-rapido', title: 'Cervical', duration: '10min', icon: '🦴', category: 'coluna' },
  { id: 'drenagem-rapido', title: 'Drenagem', duration: '15min', icon: '💧', category: 'drenagem' },
  { id: 'sono-rapido', title: 'Sono', duration: '12min', icon: '😴', category: 'sono' },
  { id: 'estetica-rapido', title: 'Estética', duration: '8min', icon: '✨', category: 'estetica' }
];

const mainCategories = [
  {
    id: 'drenagem',
    title: 'Drenagem & Circulação',
    subtitle: 'Pernas, linfática, varizes',
    icon: Droplets,
    color: 'text-blue-500'
  },
  {
    id: 'sono',
    title: 'Sono & Relaxamento',
    subtitle: 'Ansiedade, estresse, descanso',
    icon: Moon,
    color: 'text-purple-600'
  },
  {
    id: 'estetica',
    title: 'Estética Facial',
    subtitle: 'Papada, rugas, rejuvenescimento',
    icon: Sparkles,
    color: 'text-cyan-400'
  },
  {
    id: 'cabelos',
    title: 'Cabelos',
    subtitle: 'Fortalecimento, queda, crescimento',
    icon: Scissors,
    color: 'text-green-500'
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento & Tonificação',
    subtitle: 'Queima localizada, firmeza',
    icon: TrendingUp,
    color: 'text-orange-500'
  }
];

export default function QuantumExperience() {
  const [authState, setAuthState] = useState<'login' | 'register' | 'forgot' | 'authenticated'>('login');
  const [currentView, setCurrentView] = useState('home');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendations, setRecommendations] = useState<QuizRecommendations | null>(null);
  const [currentSession, setCurrentSession] = useState<any>(null);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    console.log('Login:', email, password);
    setAuthState('authenticated');
    if (!quizCompleted) {
      setShowQuiz(true);
    }
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    console.log('Register:', name, email, password);
    setAuthState('authenticated');
    setShowQuiz(true);
  };

  const handleForgotPassword = async (email: string) => {
    console.log('Forgot password:', email);
  };

  const handleQuizComplete = (response: QuizResponse, recs: QuizRecommendations) => {
    setRecommendations(recs);
    setQuizCompleted(true);
    setShowQuiz(false);
    console.log('Quiz completed:', response, recs);
  };

  const handleStartProgram = (programId: string, programTitle: string, duration: string) => {
    setCurrentSession({ id: programId, title: programTitle, duration });
    setCurrentView('session');
  };

  const handleSessionComplete = () => {
    setSessionCompleted(true);
    setCurrentView('completion');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentSession(null);
    setSessionCompleted(false);
  };

  // Renderizar telas de autenticação
  if (authState === 'login') {
    return (
      <LoginScreen
        onLogin={handleLogin}
        onRegister={() => setAuthState('register')}
        onForgotPassword={() => setAuthState('forgot')}
      />
    );
  }

  if (authState === 'register') {
    return (
      <RegisterScreen
        onRegister={handleRegister}
        onBackToLogin={() => setAuthState('login')}
      />
    );
  }

  if (authState === 'forgot') {
    return (
      <ForgotPasswordScreen
        onSendReset={handleForgotPassword}
        onBackToLogin={() => setAuthState('login')}
      />
    );
  }

  // Mostrar quiz se não foi completado
  if (showQuiz) {
    return <QuizFlow onComplete={handleQuizComplete} />;
  }

  // Renderizar sessão ativa
  if (currentView === 'session' && currentSession) {
    return (
      <SessionView
        programTitle={currentSession.title}
        duration={currentSession.duration}
        onBack={handleBackToHome}
        onComplete={handleSessionComplete}
      />
    );
  }

  // Renderizar tela de conclusão
  if (currentView === 'completion' && currentSession) {
    return (
      <CompletionView
        programTitle={currentSession.title}
        onBack={handleBackToHome}
        onHome={handleBackToHome}
      />
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <Logo size="md" />
                <h1 className="text-2xl font-bold text-foreground mt-2">Olá, Maria! 👋</h1>
                <p className="text-muted-foreground">Pronta para sua sessão de hoje?</p>
              </div>
              <div className="flex gap-3">
                <ThemeToggle />
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/20">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="relative text-foreground hover:bg-primary/20">
                  <Bell size={20} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                </Button>
              </div>
            </div>

            {/* Quiz CTA se não completado */}
            {!quizCompleted && (
              <Card className="card-quantum border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-primary" size={24} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">Personalize sua experiência</h3>
                      <p className="text-sm text-muted-foreground">
                        Responda nosso quiz e receba recomendações personalizadas
                      </p>
                    </div>
                    <Button onClick={() => setShowQuiz(true)} size="sm" className="btn-quantum">
                      Começar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Recomendações do Quiz */}
            {recommendations && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-bold text-foreground">Recomendado para você</h2>
                
                {/* Plano Recomendado */}
                <Card className="card-quantum border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Plano Recomendado</Badge>
                    </div>
                    <CardTitle className="text-lg text-card-foreground">{recommendations.planoRecomendado.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{recommendations.planoRecomendado.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full btn-quantum"
                      onClick={() => setCurrentView('plans')}
                    >
                      Iniciar Plano
                    </Button>
                  </CardContent>
                </Card>

                {/* Programas Rápidos */}
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Seus programas rápidos</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {recommendations.programasRapidos?.map((program) => (
                      <Card key={program.id} className="card-quantum cursor-pointer hover:bg-gray-50 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-card-foreground">{program.title}</h4>
                              <p className="text-sm text-muted-foreground">{program.duration}</p>
                            </div>
                            <Button 
                              size="sm" 
                              className="btn-quantum"
                              onClick={() => handleStartProgram(program.id, program.title, program.duration)}
                            >
                              <Play size={16} className="mr-1" />
                              Iniciar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Streak Banner */}
            <Card className="card-quantum bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Flame className="text-orange-500" size={24} />
                  <div>
                    <h3 className="font-bold text-card-foreground">Sequência de {mockUserProgress.currentStreak} dias! 🔥</h3>
                    <p className="text-sm text-muted-foreground">Continue assim para manter sua sequência</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Início Rápido</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickStartPrograms.map((program) => (
                  <Card key={program.id} className="card-quantum cursor-pointer hover:scale-105 transition-transform">
                    <CardContent className="p-4">
                      <div className="text-center space-y-2">
                        <div className="text-2xl">{program.icon}</div>
                        <h3 className="font-medium text-sm text-card-foreground">{program.title}</h3>
                        <p className="text-xs text-muted-foreground">{program.duration}</p>
                        <Button 
                          size="sm" 
                          className="w-full btn-quantum"
                          onClick={() => handleStartProgram(program.id, program.title, program.duration)}
                        >
                          <Play size={14} className="mr-1" />
                          Iniciar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categorias Principais */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Programas Completos</h2>
              <div className="space-y-3">
                {mainCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Card 
                      key={category.id} 
                      className="card-quantum cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setCurrentView('programs')}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`h-6 w-6 ${category.color}`} />
                          <div className="flex-1">
                            <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                          </div>
                          <ChevronRight size={16} className="text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Progress Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Seu Progresso</h2>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{mockUserProgress.level}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Nível {mockUserProgress.level}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Card className="card-quantum">
                  <CardContent className="p-4 text-center">
                    <Clock className="text-primary mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-card-foreground">{mockUserProgress.totalMinutes}</div>
                    <div className="text-xs text-muted-foreground">Minutos Totais</div>
                  </CardContent>
                </Card>
                <Card className="card-quantum">
                  <CardContent className="p-4 text-center">
                    <Flame className="text-orange-500 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-card-foreground">{mockUserProgress.currentStreak}</div>
                    <div className="text-xs text-muted-foreground">Dias Seguidos</div>
                  </CardContent>
                </Card>
                <Card className="card-quantum">
                  <CardContent className="p-4 text-center">
                    <Target className="text-green-500 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-card-foreground">{mockUserProgress.completedPrograms}</div>
                    <div className="text-xs text-muted-foreground">Programas</div>
                  </CardContent>
                </Card>
                <Card className="card-quantum">
                  <CardContent className="p-4 text-center">
                    <Trophy className="text-accent mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-card-foreground">{mockUserProgress.points}</div>
                    <div className="text-xs text-muted-foreground">Pontos</div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress bar para próximo nível */}
              <Card className="card-quantum">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progresso para Nível {mockUserProgress.level + 1}</span>
                    <span className="text-sm text-accent">
                      {Math.round((mockUserProgress.points / mockUserProgress.nextLevelPoints) * 100)}%
                    </span>
                  </div>
                  <Progress value={(mockUserProgress.points / mockUserProgress.nextLevelPoints) * 100} />
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'programs':
        return (
          <ProgramsView 
            onBack={() => setCurrentView('home')}
            onStartProgram={handleStartProgram}
          />
        );

      case 'plans':
        return (
          <PlansView 
            onBack={() => setCurrentView('home')}
            onStartPlan={(planId) => console.log('Starting plan:', planId)}
          />
        );

      case 'sounds':
        return (
          <SoundsView 
            onBack={() => setCurrentView('home')}
          />
        );

      case 'profile':
        return (
          <ProfileView 
            onBack={() => setCurrentView('home')}
            onLogout={() => setAuthState('login')}
          />
        );

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Página não encontrada</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--quantum-background)' }}>
      {/* Container principal */}
      <div className="max-w-md mx-auto pb-20">
        <div className="p-4">
          {renderContent()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bottom-nav z-40">
        <div className="flex justify-around items-center py-2 max-w-md mx-auto">
          {[
            { id: 'home', label: 'Início', icon: Sparkles },
            { id: 'programs', label: 'Programas', icon: Play },
            { id: 'plans', label: 'Planos', icon: Calendar },
            { id: 'sounds', label: 'Sons', icon: Music },
            { id: 'profile', label: 'Perfil', icon: User },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = currentView === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 nav-button ${
                  isActive ? "active" : ""
                }`}
              >
                <Icon size={20} className="mb-1" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}