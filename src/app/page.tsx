"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Play, Calendar, Music, User, Bell, Search, Clock, Trophy, Target, Flame, 
  ChevronRight, Star, Volume2, Pause, X, ArrowLeft, CheckCircle, Award, TrendingUp,
  Droplets, Scissors, Moon, Shield, Activity, Zap, Brain, Heart, Coffee, Wind
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { RegisterScreen } from "@/components/auth/RegisterScreen";
import { ForgotPasswordScreen } from "@/components/auth/ForgotPasswordScreen";
import { QuizFlow } from "@/components/quiz/QuizFlow";
import { QuizResponse, QuizRecommendations } from "@/types/auth";
import { Category } from "@/types";

// Mock data atualizado
const mockUserProgress = {
  totalMinutes: 245,
  currentStreak: 5,
  longestStreak: 12,
  completedPrograms: 18,
  points: 1250,
  level: 3,
  nextLevelPoints: 1500
};

// Dados completos dos programas
const programsData = {
  drenagem: {
    title: 'Drenagem & Circulação',
    subtitle: 'Pernas, linfática, varizes',
    icon: Droplets,
    color: 'text-blue-500',
    subcategories: [
      {
        id: 'pernas',
        title: 'Drenagem de Pernas',
        description: 'Reduz inchaço e melhora circulação',
        exercises: [
          { id: 'pernas-1', title: 'Drenagem Básica', duration: '8min', level: 'Iniciante' },
          { id: 'pernas-2', title: 'Circulação Intensa', duration: '12min', level: 'Intermediário' },
          { id: 'pernas-3', title: 'Pernas Leves', duration: '15min', level: 'Avançado' }
        ]
      },
      {
        id: 'linfatica',
        title: 'Drenagem Linfática',
        description: 'Estimula o sistema linfático',
        exercises: [
          { id: 'linf-1', title: 'Linfática Suave', duration: '10min', level: 'Iniciante' },
          { id: 'linf-2', title: 'Detox Completo', duration: '18min', level: 'Intermediário' },
          { id: 'linf-3', title: 'Renovação Total', duration: '25min', level: 'Avançado' }
        ]
      },
      {
        id: 'varizes',
        title: 'Varizes & Circulação',
        description: 'Fortalece vasos sanguíneos',
        exercises: [
          { id: 'var-1', title: 'Circulação Ativa', duration: '12min', level: 'Iniciante' },
          { id: 'var-2', title: 'Fortalecimento Vascular', duration: '16min', level: 'Intermediário' },
          { id: 'var-3', title: 'Prevenção Avançada', duration: '20min', level: 'Avançado' }
        ]
      }
    ]
  },
  sono: {
    title: 'Sono & Relaxamento',
    subtitle: 'Ansiedade, estresse, descanso',
    icon: Moon,
    color: 'text-purple-600',
    subcategories: [
      {
        id: 'ansiedade',
        title: 'Controle da Ansiedade',
        description: 'Acalma mente e corpo',
        exercises: [
          { id: 'ans-1', title: 'Respiração Calma', duration: '6min', level: 'Iniciante' },
          { id: 'ans-2', title: 'Relaxamento Profundo', duration: '10min', level: 'Intermediário' },
          { id: 'ans-3', title: 'Paz Interior', duration: '15min', level: 'Avançado' }
        ]
      },
      {
        id: 'estresse',
        title: 'Alívio do Estresse',
        description: 'Libera tensões acumuladas',
        exercises: [
          { id: 'est-1', title: 'Descompressão Rápida', duration: '8min', level: 'Iniciante' },
          { id: 'est-2', title: 'Reset Mental', duration: '12min', level: 'Intermediário' },
          { id: 'est-3', title: 'Renovação Completa', duration: '18min', level: 'Avançado' }
        ]
      },
      {
        id: 'descanso',
        title: 'Preparação para Dormir',
        description: 'Induz sono reparador',
        exercises: [
          { id: 'desc-1', title: 'Relaxamento Noturno', duration: '10min', level: 'Iniciante' },
          { id: 'desc-2', title: 'Sono Profundo', duration: '15min', level: 'Intermediário' },
          { id: 'desc-3', title: 'Descanso Total', duration: '20min', level: 'Avançado' }
        ]
      }
    ]
  },
  estetica: {
    title: 'Estética Facial',
    subtitle: 'Papada, rugas, rejuvenescimento',
    icon: Sparkles,
    color: 'text-cyan-400',
    subcategories: [
      {
        id: 'papada',
        title: 'Redução de Papada',
        description: 'Define contorno facial',
        exercises: [
          { id: 'pap-1', title: 'Tonificação Básica', duration: '8min', level: 'Iniciante' },
          { id: 'pap-2', title: 'Definição Avançada', duration: '12min', level: 'Intermediário' },
          { id: 'pap-3', title: 'Contorno Perfeito', duration: '16min', level: 'Avançado' }
        ]
      },
      {
        id: 'rugas',
        title: 'Suavização de Rugas',
        description: 'Reduz linhas de expressão',
        exercises: [
          { id: 'rug-1', title: 'Anti-idade Suave', duration: '6min', level: 'Iniciante' },
          { id: 'rug-2', title: 'Renovação Celular', duration: '10min', level: 'Intermediário' },
          { id: 'rug-3', title: 'Rejuvenescimento Total', duration: '14min', level: 'Avançado' }
        ]
      },
      {
        id: 'rejuvenescimento',
        title: 'Rejuvenescimento Completo',
        description: 'Programa anti-idade total',
        exercises: [
          { id: 'rej-1', title: 'Revitalização Facial', duration: '12min', level: 'Iniciante' },
          { id: 'rej-2', title: 'Lifting Natural', duration: '18min', level: 'Intermediário' },
          { id: 'rej-3', title: 'Transformação Total', duration: '25min', level: 'Avançado' }
        ]
      }
    ]
  },
  cabelos: {
    title: 'Cabelos',
    subtitle: 'Fortalecimento, queda, crescimento',
    icon: Scissors,
    color: 'text-green-500',
    subcategories: [
      {
        id: 'fortalecimento',
        title: 'Fortalecimento Capilar',
        description: 'Fortalece fios e raízes',
        exercises: [
          { id: 'fort-1', title: 'Nutrição Capilar', duration: '10min', level: 'Iniciante' },
          { id: 'fort-2', title: 'Fortalecimento Intenso', duration: '15min', level: 'Intermediário' },
          { id: 'fort-3', title: 'Cabelos de Ferro', duration: '20min', level: 'Avançado' }
        ]
      },
      {
        id: 'queda',
        title: 'Prevenção de Queda',
        description: 'Reduz queda capilar',
        exercises: [
          { id: 'qued-1', title: 'Proteção Básica', duration: '8min', level: 'Iniciante' },
          { id: 'qued-2', title: 'Ancoragem Forte', duration: '12min', level: 'Intermediário' },
          { id: 'qued-3', title: 'Fixação Total', duration: '18min', level: 'Avançado' }
        ]
      },
      {
        id: 'crescimento',
        title: 'Estímulo ao Crescimento',
        description: 'Acelera crescimento capilar',
        exercises: [
          { id: 'cresc-1', title: 'Ativação Folicular', duration: '12min', level: 'Iniciante' },
          { id: 'cresc-2', title: 'Crescimento Acelerado', duration: '16min', level: 'Intermediário' },
          { id: 'cresc-3', title: 'Densidade Máxima', duration: '22min', level: 'Avançado' }
        ]
      }
    ]
  },
  emagrecimento: {
    title: 'Emagrecimento & Tonificação',
    subtitle: 'Queima localizada, firmeza',
    icon: TrendingUp,
    color: 'text-orange-500',
    subcategories: [
      {
        id: 'queima',
        title: 'Queima Localizada',
        description: 'Elimina gordura específica',
        exercises: [
          { id: 'quei-1', title: 'Queima Suave', duration: '15min', level: 'Iniciante' },
          { id: 'quei-2', title: 'Metabolismo Ativo', duration: '20min', level: 'Intermediário' },
          { id: 'quei-3', title: 'Queima Intensa', duration: '25min', level: 'Avançado' }
        ]
      },
      {
        id: 'firmeza',
        title: 'Firmeza Corporal',
        description: 'Tonifica e define músculos',
        exercises: [
          { id: 'firm-1', title: 'Tonificação Básica', duration: '12min', level: 'Iniciante' },
          { id: 'firm-2', title: 'Definição Muscular', duration: '18min', level: 'Intermediário' },
          { id: 'firm-3', title: 'Corpo Esculpido', duration: '24min', level: 'Avançado' }
        ]
      }
    ]
  }
};

// Dados dos planos
const plansData = [
  {
    id: 'basic',
    title: 'Plano Básico',
    price: 47,
    originalPrice: 97,
    period: 'mensal',
    discount: '51% OFF',
    features: [
      'Acesso a programas básicos',
      'Sons relaxantes inclusos',
      'Suporte por email',
      'Atualizações gratuitas'
    ],
    popular: false
  },
  {
    id: 'premium',
    title: 'Plano Premium',
    price: 97,
    originalPrice: 197,
    period: 'mensal',
    discount: '51% OFF',
    features: [
      'Todos os programas disponíveis',
      'Planos personalizados',
      'Suporte prioritário',
      'Consultoria individual',
      'Acesso antecipado'
    ],
    popular: true
  },
  {
    id: 'annual',
    title: 'Plano Anual',
    price: 497,
    originalPrice: 1164,
    period: 'anual',
    discount: '57% OFF',
    features: [
      'Todos os benefícios Premium',
      '2 meses grátis',
      'Garantia de 30 dias',
      'Bônus exclusivos',
      'Acesso vitalício'
    ],
    popular: false
  }
];

// Dados dos sons
const soundsData = {
  chuva: [
    { id: 'chuva-1', title: 'Chuva Suave', duration: '30min', description: 'Som relaxante de chuva leve' },
    { id: 'chuva-2', title: 'Tempestade Distante', duration: '45min', description: 'Trovões suaves ao longe' },
    { id: 'chuva-3', title: 'Chuva na Floresta', duration: '60min', description: 'Chuva entre as árvores' }
  ],
  meditacao: [
    { id: 'med-1', title: 'Meditação Guiada', duration: '15min', description: 'Sessão de meditação completa' },
    { id: 'med-2', title: 'Mindfulness', duration: '20min', description: 'Atenção plena e consciência' },
    { id: 'med-3', title: 'Paz Interior', duration: '25min', description: 'Encontre sua paz interior' }
  ],
  respiracao: [
    { id: 'resp-1', title: 'Respiração 4-7-8', duration: '10min', description: 'Técnica de respiração relaxante' },
    { id: 'resp-2', title: 'Respiração Box', duration: '12min', description: 'Respiração quadrada equilibrante' },
    { id: 'resp-3', title: 'Pranayama', duration: '18min', description: 'Técnicas avançadas de respiração' }
  ],
  piano: [
    { id: 'piano-1', title: 'Piano Clássico', duration: '40min', description: 'Melodias clássicas relaxantes' },
    { id: 'piano-2', title: 'Piano Moderno', duration: '35min', description: 'Composições contemporâneas' },
    { id: 'piano-3', title: 'Piano Ambiente', duration: '50min', description: 'Sons ambientais com piano' }
  ]
};

export default function QuantumExperience() {
  const [authState, setAuthState] = useState<'login' | 'register' | 'forgot' | 'authenticated'>('login');
  const [activeTab, setActiveTab] = useState('home');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendations, setRecommendations] = useState<QuizRecommendations | null>(null);
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [playingType, setPlayingType] = useState<'program' | 'sound' | null>(null);
  const [sessionTime, setSessionTime] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [volume, setVolume] = useState(50);
  const [selectedSoundCategory, setSelectedSoundCategory] = useState('chuva');

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSessionActive]);

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

  const handleProgramPlay = (exerciseId: string) => {
    setCurrentlyPlaying(exerciseId);
    setPlayingType('program');
    setIsSessionActive(true);
    setSessionTime(0);
  };

  const handleSoundPlay = (soundId: string) => {
    if (currentlyPlaying === soundId) {
      setCurrentlyPlaying(null);
      setPlayingType(null);
    } else {
      setCurrentlyPlaying(soundId);
      setPlayingType('sound');
    }
  };

  const stopSession = () => {
    setCurrentlyPlaying(null);
    setPlayingType(null);
    setIsSessionActive(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const navigateBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory('');
      setCurrentView('category');
    } else if (selectedCategory) {
      setSelectedCategory('');
      setCurrentView('programs');
    } else {
      setCurrentView('home');
      setActiveTab('home');
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('category');
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
    setCurrentView('exercises');
  };

  const handlePlanSubscribe = (planId: string) => {
    alert(`Redirecionando para pagamento do plano: ${planId}`);
    // Aqui seria integrado com gateway de pagamento
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

  if (showQuiz) {
    return <QuizFlow onComplete={handleQuizComplete} />;
  }

  const renderContent = () => {
    // HOME
    if (currentView === 'home') {
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
                    onClick={() => {
                      setActiveTab('plans');
                      setCurrentView('plans');
                    }}
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
                            onClick={() => handleProgramPlay(program.id)}
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
              {[
                { id: 'cervical', title: 'Cervical', duration: '10min', icon: '🦴', category: 'coluna' },
                { id: 'drenagem', title: 'Drenagem', duration: '15min', icon: '💧', category: 'drenagem' },
                { id: 'sono', title: 'Sono', duration: '12min', icon: '😴', category: 'sono' },
                { id: 'estetica', title: 'Estética', duration: '8min', icon: '✨', category: 'estetica' }
              ].map((program) => (
                <Card key={program.id} className="card-quantum cursor-pointer hover:scale-105 transition-transform">
                  <CardContent className="p-4">
                    <div className="text-center space-y-2">
                      <div className="text-2xl">{program.icon}</div>
                      <h3 className="font-medium text-sm text-card-foreground">{program.title}</h3>
                      <p className="text-xs text-muted-foreground">{program.duration}</p>
                      <Button 
                        size="sm" 
                        className="w-full btn-quantum"
                        onClick={() => {
                          setSelectedCategory(program.category);
                          setCurrentView('category');
                          setActiveTab('programs');
                        }}
                      >
                        <Play size={14} className="mr-1" />
                        Começar agora
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
              {Object.entries(programsData).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={key} 
                    className="card-quantum cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setSelectedCategory(key);
                      setCurrentView('category');
                      setActiveTab('programs');
                    }}
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
    }

    // PROGRAMAS - Lista de categorias
    if (currentView === 'programs') {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={navigateBack}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Programas</h1>
              <p className="text-muted-foreground">Escolha sua categoria</p>
            </div>
          </div>

          <div className="space-y-3">
            {Object.entries(programsData).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={key} 
                  className="card-quantum cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleCategoryClick(key)}
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
      );
    }

    // CATEGORIA - Lista de subcategorias
    if (currentView === 'category' && selectedCategory) {
      const category = programsData[selectedCategory as keyof typeof programsData];
      const IconComponent = category.icon;

      return (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={navigateBack}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{category.title}</h1>
              <p className="text-muted-foreground">{category.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            {category.subcategories.map((subcategory) => (
              <Card 
                key={subcategory.id} 
                className="card-quantum cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => handleSubcategoryClick(subcategory.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-card-foreground">{subcategory.title}</h3>
                      <p className="text-sm text-muted-foreground">{subcategory.description}</p>
                      <p className="text-xs text-accent mt-1">{subcategory.exercises.length} exercícios disponíveis</p>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    // EXERCÍCIOS - Lista de exercícios da subcategoria
    if (currentView === 'exercises' && selectedCategory && selectedSubcategory) {
      const category = programsData[selectedCategory as keyof typeof programsData];
      const subcategory = category.subcategories.find(sub => sub.id === selectedSubcategory);

      if (!subcategory) return null;

      return (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={navigateBack}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{subcategory.title}</h1>
              <p className="text-muted-foreground">{subcategory.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            {subcategory.exercises.map((exercise, index) => (
              <Card key={exercise.id} className="card-quantum">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{exercise.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock size={14} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exercise.duration}</span>
                          <Badge variant="outline" className="text-xs">
                            {exercise.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="bg-muted/30 rounded-lg p-3 mb-3">
                      <p className="text-sm text-muted-foreground">
                        📹 Vídeo demonstrativo disponível
                      </p>
                    </div>
                    <div className="text-sm text-card-foreground">
                      <p className="mb-2"><strong>Instruções:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Posicione o aparelho conforme demonstrado no vídeo</li>
                        <li>Ajuste a intensidade gradualmente</li>
                        <li>Mantenha respiração regular durante o exercício</li>
                        <li>Pare se sentir qualquer desconforto</li>
                      </ul>
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-quantum"
                    onClick={() => handleProgramPlay(exercise.id)}
                  >
                    <Play size={16} className="mr-2" />
                    Iniciar Exercício
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    // PLANOS
    if (currentView === 'plans') {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={navigateBack}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Planos</h1>
              <p className="text-muted-foreground">Escolha o melhor plano para você</p>
            </div>
          </div>

          <div className="space-y-4">
            {plansData.map((plan) => (
              <Card key={plan.id} className={`card-quantum ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium rounded-t-lg">
                    MAIS POPULAR
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{plan.title}</h3>
                    <div className="mb-4">
                      <span className="text-sm text-muted-foreground line-through">R$ {plan.originalPrice}</span>
                      <div className="text-3xl font-bold text-card-foreground">R$ {plan.price}</div>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <Badge variant="destructive">{plan.discount}</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full py-3 ${plan.popular ? 'btn-quantum' : ''}`}
                    onClick={() => handlePlanSubscribe(plan.id)}
                  >
                    Assinar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    // SONS
    if (currentView === 'sounds') {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={navigateBack}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Sons Relaxantes</h1>
              <p className="text-muted-foreground">Escolha seus sons favoritos</p>
            </div>
          </div>

          {/* Categorias de Sons */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Object.keys(soundsData).map((category) => (
              <Button
                key={category}
                variant={selectedSoundCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSoundCategory(category)}
                className={selectedSoundCategory === category ? 'bg-gradient-quantum text-white' : ''}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          {/* Lista de Sons */}
          <div className="space-y-4">
            {soundsData[selectedSoundCategory as keyof typeof soundsData].map((sound) => (
              <Card key={sound.id} className="card-quantum">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Music size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{sound.title}</h3>
                        <p className="text-sm text-muted-foreground">{sound.description}</p>
                        <p className="text-xs text-accent">{sound.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {currentlyPlaying === sound.id && playingType === 'sound' && (
                        <div className="flex gap-1">
                          <div className="w-1 h-4 bg-primary rounded-full animate-pulse"></div>
                          <div className="w-1 h-4 bg-primary rounded-full animate-pulse delay-100"></div>
                          <div className="w-1 h-4 bg-primary rounded-full animate-pulse delay-200"></div>
                        </div>
                      )}
                      <Button
                        size="sm"
                        className="btn-quantum"
                        onClick={() => handleSoundPlay(sound.id)}
                      >
                        {currentlyPlaying === sound.id && playingType === 'sound' ? (
                          <Pause size={16} />
                        ) : (
                          <Play size={16} />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Player de Som */}
          {currentlyPlaying && playingType === 'sound' && (
            <Card className="card-quantum">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-card-foreground">Reproduzindo</h4>
                    <p className="text-sm text-muted-foreground">
                      {soundsData[selectedSoundCategory as keyof typeof soundsData].find(s => s.id === currentlyPlaying)?.title}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-4 w-4 text-muted-foreground" />
                    <Slider
                      value={[volume]}
                      onValueChange={(value) => setVolume(value[0])}
                      max={100}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-sm text-muted-foreground w-8">{volume}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      );
    }

    // PERFIL
    if (currentView === 'profile') {
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={navigateBack}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Perfil</h1>
              <p className="text-muted-foreground">Gerencie sua conta</p>
            </div>
          </div>

          {/* Informações do Usuário */}
          <Card className="card-quantum">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gradient-quantum text-white text-xl">M</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-card-foreground">Maria Silva</h2>
                  <p className="text-muted-foreground">maria@email.com</p>
                  <Badge className="bg-gradient-quantum text-white mt-2">
                    Nível {mockUserProgress.level}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progresso do Nível</span>
                  <span className="text-card-foreground">{mockUserProgress.points} pts</span>
                </div>
                <Progress value={(mockUserProgress.points / mockUserProgress.nextLevelPoints) * 100} />
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="card-quantum">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">{mockUserProgress.totalMinutes}</div>
                <p className="text-xs text-muted-foreground">Minutos Totais</p>
              </CardContent>
            </Card>
            <Card className="card-quantum">
              <CardContent className="p-4 text-center">
                <Flame className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">{mockUserProgress.currentStreak}</div>
                <p className="text-xs text-muted-foreground">Dias Seguidos</p>
              </CardContent>
            </Card>
            <Card className="card-quantum">
              <CardContent className="p-4 text-center">
                <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">{mockUserProgress.completedPrograms}</div>
                <p className="text-xs text-muted-foreground">Programas</p>
              </CardContent>
            </Card>
            <Card className="card-quantum">
              <CardContent className="p-4 text-center">
                <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">{mockUserProgress.points}</div>
                <p className="text-xs text-muted-foreground">Pontos</p>
              </CardContent>
            </Card>
          </div>

          {/* Ações do Perfil */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              Editar Perfil
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Notificações
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Award className="h-4 w-4 mr-2" />
              Conquistas
            </Button>
            <Button variant="outline" className="w-full justify-start text-red-600">
              Suporte
            </Button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--quantum-background)' }}>
      {/* Player fixo no topo quando ativo */}
      <AnimatePresence>
        {currentlyPlaying && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-50 bg-card border-b shadow-lg"
          >
            <div className="max-w-md mx-auto p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    {playingType === 'program' ? (
                      <Play size={20} className="text-primary" />
                    ) : (
                      <Music size={20} className="text-primary" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-card-foreground">
                      {playingType === 'program' ? 'Exercício em andamento' : 'Som reproduzindo'}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {playingType === 'program' ? formatTime(sessionTime) : 'Reproduzindo...'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={stopSession}>
                    <X size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Container principal */}
      <div className="max-w-md mx-auto pb-20" style={{ paddingTop: currentlyPlaying ? '80px' : '0' }}>
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
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentView(tab.id);
                  setSelectedCategory('');
                  setSelectedSubcategory('');
                }}
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