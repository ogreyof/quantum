"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Play, Calendar, Music, User, Bell, Search, Zap, Clock, Trophy, Target, Flame, ChevronRight, Star, Volume2, Pause, SkipForward, SkipBack, X, Settings, Moon, Sun, Palette, Droplets, Scissors, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuizFlow } from "@/components/quiz/QuizFlow";
import { QuizResponse, QuizRecommendations } from "@/types/quiz";
import { Category } from "@/types";

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
  { id: '1', title: 'Cervical', duration: '10min', icon: '🦴', category: 'coluna' as Category },
  { id: '3', title: 'Drenagem', duration: '15min', icon: '💧', category: 'drenagem' as Category },
  { id: '5', title: 'Sono', duration: '12min', icon: '😴', category: 'sono' as Category },
  { id: '4', title: 'Estética', duration: '8min', icon: '✨', category: 'estetica' as Category }
];

const mockPrograms = [
  {
    id: '1',
    title: 'Drenagem de Pernas',
    duration: '15min',
    description: 'Reduz inchaço e melhora circulação nas pernas',
    category: 'drenagem' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz inchaço', 'Melhora circulação', 'Sensação de leveza'],
    rating: 4.8,
    completions: 1250
  },
  {
    id: '2',
    title: 'Relaxamento Profundo',
    duration: '12min',
    description: 'Libera tensões e prepara para o descanso',
    category: 'sono' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz ansiedade', 'Melhora sono', 'Relaxa músculos'],
    rating: 4.9,
    completions: 980
  },
  {
    id: '3',
    title: 'Redução de Papada',
    duration: '12min',
    description: 'Tonifica músculos do pescoço e reduz papada',
    category: 'estetica' as Category,
    difficulty: 'intermediario' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz papada', 'Tonifica pescoço', 'Melhora contorno'],
    rating: 4.7,
    completions: 750
  },
  {
    id: '4',
    title: 'Fortalecimento Capilar',
    duration: '15min',
    description: 'Fortalece folículos e raízes capilares',
    category: 'cabelos' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Fortalece cabelos', 'Previne queda', 'Estimula crescimento'],
    rating: 4.6,
    completions: 1100
  },
  {
    id: '5',
    title: 'Queima Localizada',
    duration: '25min',
    description: 'Queima gordura em áreas específicas',
    category: 'emagrecimento' as Category,
    difficulty: 'intermediario' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Queima gordura', 'Tonifica músculos', 'Modela corpo'],
    rating: 4.8,
    completions: 890
  },
  {
    id: '6',
    title: 'Alívio Cervical',
    duration: '10min',
    description: 'Alívio de tensões na região cervical',
    category: 'coluna' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Alivia dor', 'Melhora postura', 'Relaxa músculos'],
    rating: 4.5,
    completions: 650
  }
];

const mockPlans = [
  {
    id: '1',
    title: '7 Dias - Pernas Leves',
    duration: '7 dias',
    description: 'Plano focado em drenagem e circulação das pernas',
    programs: ['1'],
    benefits: ['Reduz inchaço', 'Melhora circulação', 'Alívio imediato'],
    difficulty: 'iniciante' as const,
    price: 'Incluído na assinatura',
    progress: 0
  },
  {
    id: '2',
    title: '14 Dias - Rejuvenescimento Facial',
    duration: '14 dias',
    description: 'Programa completo de estética facial',
    programs: ['3'],
    benefits: ['Reduz papada', 'Suaviza rugas', 'Rejuvenesce'],
    difficulty: 'intermediario' as const,
    price: 'Incluído na assinatura',
    progress: 35
  },
  {
    id: '3',
    title: '21 Dias - Cabelos Fortes',
    duration: '21 dias',
    description: 'Fortalecimento e crescimento capilar',
    programs: ['4'],
    benefits: ['Fortalece cabelos', 'Previne queda', 'Estimula crescimento'],
    difficulty: 'intermediario' as const,
    price: 'Incluído na assinatura',
    progress: 0
  }
];

const mockSounds = [
  {
    id: '1',
    title: 'Spa Relaxante',
    category: 'spa' as const,
    description: 'Sons suaves de spa para relaxamento profundo',
    duration: null,
    thumbnail: '/api/placeholder/200/200',
    isPlaying: false
  },
  {
    id: '2',
    title: 'Água Corrente',
    category: 'natureza' as const,
    description: 'Som relaxante de água corrente',
    duration: null,
    thumbnail: '/api/placeholder/200/200',
    isPlaying: false
  },
  {
    id: '3',
    title: 'Chuva Suave',
    category: 'natureza' as const,
    description: 'Som de chuva leve para relaxamento',
    duration: null,
    thumbnail: '/api/placeholder/200/200',
    isPlaying: false
  },
  {
    id: '4',
    title: 'Binaural - Sono',
    category: 'binaural' as const,
    description: 'Frequências binaurais para induzir sono profundo',
    duration: 30,
    thumbnail: '/api/placeholder/200/200',
    isPlaying: false
  },
  {
    id: '5',
    title: 'Respiração 4-7-8',
    category: 'respiracao' as const,
    duration: 10,
    description: 'Técnica de respiração para relaxamento',
    thumbnail: '/api/placeholder/200/200',
    isPlaying: false
  }
];

// Categorias principais atualizadas
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
  const [activeTab, setActiveTab] = useState('home');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendations, setRecommendations] = useState<QuizRecommendations | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [playingType, setPlayingType] = useState<'program' | 'sound' | null>(null);
  const [sessionTime, setSessionTime] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sounds, setSounds] = useState(mockSounds);
  const [volume, setVolume] = useState(50);
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);

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

  const handleQuizComplete = (response: QuizResponse, recs: QuizRecommendations) => {
    setRecommendations(recs);
    setQuizCompleted(true);
    setShowQuiz(false);
    console.log('Quiz completed:', response, recs);
  };

  const handleProgramPlay = (programId: string) => {
    setCurrentlyPlaying(programId);
    setPlayingType('program');
    setIsSessionActive(true);
    setSessionTime(0);
  };

  const handleSoundPlay = (soundId: string) => {
    setSounds(prev => prev.map(sound => ({
      ...sound,
      isPlaying: sound.id === soundId ? !sound.isPlaying : false
    })));
    
    const sound = sounds.find(s => s.id === soundId);
    if (sound && !sound.isPlaying) {
      setCurrentlyPlaying(soundId);
      setPlayingType('sound');
    } else {
      setCurrentlyPlaying(null);
      setPlayingType(null);
    }
  };

  const stopSession = () => {
    setCurrentlyPlaying(null);
    setPlayingType(null);
    setIsSessionActive(false);
    setSounds(prev => prev.map(sound => ({ ...sound, isPlaying: false })));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentProgram = () => {
    if (playingType === 'program') {
      return mockPrograms.find(p => p.id === currentlyPlaying);
    }
    return null;
  };

  const getCurrentSound = () => {
    if (playingType === 'sound') {
      return sounds.find(s => s.id === currentlyPlaying);
    }
    return null;
  };

  // Mostrar quiz se não foi completado
  if (showQuiz) {
    return <QuizFlow onComplete={handleQuizComplete} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Olá, Maria! 👋</h1>
                <p className="text-gray-400">Pronta para sua sessão de hoje?</p>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
                  <Bell size={20} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
                </Button>
              </div>
            </div>

            {/* Quiz CTA se não completado */}
            {!quizCompleted && (
              <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-4">
                  
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-primary" size={24} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-black">Personalize sua experiência</h3>
                      <p className="text-sm text-gray-600">
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
                <h2 className="text-xl font-bold text-white">Recomendado para você</h2>
                
                {/* Plano Recomendado */}
                <Card className="border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Plano Recomendado</Badge>
                    </div>
                    <CardTitle className="text-lg text-black">{recommendations.planoRecomendado.title}</CardTitle>
                    <CardDescription className="text-gray-600">{recommendations.planoRecomendado.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full btn-quantum">Iniciar Plano</Button>
                  </CardContent>
                </Card>

                {/* Programas Rápidos */}
                <div>
                  <h3 className="font-semibold mb-3 text-white">Seus programas rápidos</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {recommendations.programasRapidos?.map((program) => (
                      <Card key={program.id} className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-black">{program.title}</h4>
                              <p className="text-sm text-gray-600">{program.duration}</p>
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
            <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Flame className="text-orange-500" size={24} />
                  <div>
                    <h3 className="font-bold text-black">Sequência de {mockUserProgress.currentStreak} dias! 🔥</h3>
                    <p className="text-sm text-gray-600">Continue assim para manter sua sequência</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Início Rápido</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickStartPrograms.map((program) => (
                  <Card key={program.id} className="cursor-pointer hover:scale-105 transition-transform">
                    <CardContent className="p-4">
                      <div className="text-center space-y-2">
                        <div className="text-2xl">{program.icon}</div>
                        <h3 className="font-medium text-sm text-black">{program.title}</h3>
                        <p className="text-xs text-gray-600">{program.duration}</p>
                        <Button 
                          size="sm" 
                          className="w-full btn-quantum"
                          onClick={() => handleProgramPlay(program.id)}
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
              <h2 className="text-xl font-bold text-white">Programas Completos</h2>
              <div className="space-y-3">
                {mainCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={category.id} className="cursor-pointer hover:bg-gray-50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`h-6 w-6 ${category.color}`} />
                          <div className="flex-1">
                            <h3 className="font-semibold text-black">{category.title}</h3>
                            <p className="text-sm text-gray-600">{category.subtitle}</p>
                          </div>
                          <ChevronRight size={16} className="text-gray-400" />
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
                <h2 className="text-xl font-bold text-white">Seu Progresso</h2>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{mockUserProgress.level}</span>
                  </div>
                  <span className="text-sm text-gray-400">Nível {mockUserProgress.level}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="text-primary mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-black">{mockUserProgress.totalMinutes}</div>
                    <div className="text-xs text-gray-600">Minutos Totais</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Flame className="text-orange-500 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-black">{mockUserProgress.currentStreak}</div>
                    <div className="text-xs text-gray-600">Dias Seguidos</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Target className="text-green-500 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-black">{mockUserProgress.completedPrograms}</div>
                    <div className="text-xs text-gray-600">Programas</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Trophy className="text-accent mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold text-black">{mockUserProgress.points}</div>
                    <div className="text-xs text-gray-600">Pontos</div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress bar para próximo nível */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progresso para Nível {mockUserProgress.level + 1}</span>
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
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Programas</h1>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Search size={20} />
              </Button>
            </div>

            <div className="space-y-4">
              {mockPrograms.map((program) => (
                <Card key={program.id} className="overflow-hidden">
                  <div className="flex">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Play className="text-primary" size={24} />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-black">{program.title}</h3>
                          <p className="text-sm text-gray-600">{program.description}</p>
                        </div>
                        <Badge variant="outline">{program.category}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500" />
                          <span>{program.rating}</span>
                        </div>
                        <span>{program.completions} conclusões</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {program.benefits.slice(0, 2).map((benefit, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          size="sm"
                          className="btn-quantum"
                          onClick={() => handleProgramPlay(program.id)}
                        >
                          <Play size={14} className="mr-1" />
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'plans':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">Planos</h1>

            <div className="space-y-4">
              {mockPlans.map((plan) => (
                <Card key={plan.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-black">{plan.title}</CardTitle>
                        <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{plan.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {plan.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-black">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {plan.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-black">Progresso</span>
                          <span className="text-black">{plan.progress}%</span>
                        </div>
                        <Progress value={plan.progress} />
                      </div>
                    )}

                    <Button className="w-full btn-quantum">
                      {plan.progress > 0 ? 'Continuar Plano' : 'Iniciar Plano'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'sounds':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Sons Relaxantes</h1>
              <div className="flex items-center gap-2">
                <Volume2 size={16} className="text-white" />
                <Slider
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  step={1}
                  className="w-20"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {sounds.map((sound) => (
                <Card key={sound.id} className="overflow-hidden">
                  <div className="flex">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSoundPlay(sound.id)}
                        className="rounded-full"
                
                      >
                        {sound.isPlaying ? (
                          <Pause size={20} />
                        ) : (
                          <Play size={20} />
                        )}
                      </Button>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-black">{sound.title}</h3>
                          <p className="text-sm text-gray-600">{sound.description}</p>
                        </div>
                        <Badge variant="outline">{sound.category}</Badge>
                      </div>
                      
                      {sound.duration && (
                        <div className="text-xs text-gray-600">
                          Duração: {sound.duration} min
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="/api/placeholder/80/80" />
                <AvatarFallback className="text-2xl">M</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold text-white">Maria Silva</h1>
              <p className="text-gray-400">maria@email.com</p>
              <Badge className="mt-2">Nível {mockUserProgress.level}</Badge>
            </div>

            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-3">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold text-black">{mockUserProgress.totalMinutes}</div>
                  <div className="text-xs text-gray-600">Minutos Totais</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Flame className="text-orange-500 mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold text-black">{mockUserProgress.currentStreak}</div>
                  <div className="text-xs text-gray-600">Dias Seguidos</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Target className="text-green-500 mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold text-black">{mockUserProgress.completedPrograms}</div>
                  <div className="text-xs text-gray-600">Programas</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Trophy className="text-accent mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold text-black">{mockUserProgress.points}</div>
                  <div className="text-xs text-gray-600">Pontos</div>
                </CardContent>
              </Card>
            </div>

            {/* Menu Options */}
            <div className="space-y-3">
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Settings size={20} className="text-black" />
                      <span className="text-black">Configurações</span>
                    </div>
                    <ChevronRight size={16} className="text-black" />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-black" />
                      <span className="text-black">Histórico de Sessões</span>
                    </div>
                    <ChevronRight size={16} className="text-black" />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} className="text-black" />
                      <span className="text-black">Assinatura Premium</span>
                    </div>
                    <ChevronRight size={16} className="text-black" />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell size={20} className="text-black" />
                      <span className="text-black">Suporte</span>
                    </div>
                    <ChevronRight size={16} className="text-black" />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-red-50 transition-colors border-destructive/20">
                <CardContent className="p-4">
                  <span className="text-destructive">Sair</span>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
                    <h4 className="font-medium text-sm text-black">
                      {getCurrentProgram()?.title || getCurrentSound()?.title}
                    </h4>
                    <p className="text-xs text-gray-600">
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
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? "text-primary" 
                    : "text-gray-400 hover:text-white"
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