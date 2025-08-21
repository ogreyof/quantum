"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Play, Calendar, Music, User, Bell, Search, Zap, Clock, Trophy, Target, Flame, ChevronRight, Star, Volume2, Pause, SkipForward, SkipBack, X, Settings, Moon, Sun, Palette } from "lucide-react";
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
  { id: '3', title: 'Drenagem Pernas', duration: '15min', icon: '🦵', category: 'drenagem' as Category },
  { id: '5', title: 'Sono', duration: '12min', icon: '😴', category: 'sono' as Category },
  { id: '4', title: 'Relax', duration: '8min', icon: '🧘', category: 'bem-estar' as Category }
];

const mockPrograms = [
  {
    id: '1',
    title: 'Alívio Cervical',
    duration: '10min',
    description: 'Programa focado em aliviar tensões na região cervical e pescoço',
    category: 'coluna' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz dor no pescoço', 'Melhora postura', 'Relaxa músculos tensos'],
    rating: 4.8,
    completions: 1250
  },
  {
    id: '2',
    title: 'Alívio Lombar',
    duration: '12min',
    description: 'Massagem terapêutica para região lombar e coluna',
    category: 'coluna' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Alivia dor nas costas', 'Melhora flexibilidade', 'Reduz rigidez'],
    rating: 4.9,
    completions: 980
  },
  {
    id: '3',
    title: 'Drenagem Pernas Leves',
    duration: '15min',
    description: 'Drenagem linfática para reduzir inchaço e melhorar circulação',
    category: 'drenagem' as Category,
    difficulty: 'intermediario' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz inchaço', 'Melhora circulação', 'Sensação de leveza'],
    rating: 4.7,
    completions: 750
  },
  {
    id: '4',
    title: 'Relax Total',
    duration: '8min',
    description: 'Programa de relaxamento completo para corpo e mente',
    category: 'bem-estar' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz estresse', 'Promove relaxamento', 'Melhora bem-estar'],
    rating: 4.6,
    completions: 1100
  },
  {
    id: '5',
    title: 'Sono Profundo',
    duration: '12min',
    description: 'Massagem relaxante para preparar o corpo para o sono',
    category: 'sono' as Category,
    difficulty: 'iniciante' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Melhora qualidade do sono', 'Reduz ansiedade', 'Relaxa músculos'],
    rating: 4.8,
    completions: 890
  },
  {
    id: '6',
    title: 'Pré-treino',
    duration: '8min',
    description: 'Aquecimento muscular antes dos exercícios',
    category: 'performance' as Category,
    difficulty: 'intermediario' as const,
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Aquece músculos', 'Previne lesões', 'Melhora performance'],
    rating: 4.5,
    completions: 650
  }
];

const mockPlans = [
  {
    id: '1',
    title: '7 Dias - Pernas Leves',
    duration: '7 dias',
    description: 'Plano focado em melhorar circulação e reduzir inchaço nas pernas',
    programs: ['3'],
    benefits: ['Reduz inchaço', 'Melhora circulação', 'Alívio imediato'],
    difficulty: 'iniciante' as const,
    price: 'Incluído na assinatura',
    progress: 0
  },
  {
    id: '2',
    title: '14 Dias - Postura de Ferro',
    duration: '14 dias',
    description: 'Fortalecimento e correção postural completa',
    programs: ['1', '2'],
    benefits: ['Melhora postura', 'Fortalece core', 'Reduz dores'],
    difficulty: 'intermediario' as const,
    price: 'Incluído na assinatura',
    progress: 35
  },
  {
    id: '3',
    title: '30 Dias - Lombar Seguro',
    duration: '30 dias',
    description: 'Programa completo para saúde da coluna lombar',
    programs: ['2', '4', '5'],
    benefits: ['Fortalece lombar', 'Previne lesões', 'Melhora qualidade de vida'],
    difficulty: 'avancado' as const,
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
                <h1 className="text-2xl font-bold text-foreground">Olá, Maria! 👋</h1>
                <p className="text-muted-foreground">Pronta para sua sessão de hoje?</p>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
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
                      <h3 className="font-semibold">Personalize sua experiência</h3>
                      <p className="text-sm text-muted-foreground">
                        Responda nosso quiz e receba recomendações personalizadas
                      </p>
                    </div>
                    <Button onClick={() => setShowQuiz(true)} size="sm">
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
                <h2 className="text-xl font-bold">Recomendado para você</h2>
                
                {/* Plano Recomendado */}
                <Card className="border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Plano Recomendado</Badge>
                    </div>
                    <CardTitle className="text-lg">{recommendations.planoRecomendado.title}</CardTitle>
                    <CardDescription>{recommendations.planoRecomendado.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Iniciar Plano</Button>
                  </CardContent>
                </Card>

                {/* Programas Rápidos */}
                <div>
                  <h3 className="font-semibold mb-3">Seus programas rápidos</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {recommendations.programasRapidos?.map((program) => (
                      <Card key={program.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{program.title}</h4>
                              <p className="text-sm text-muted-foreground">{program.duration}</p>
                            </div>
                            <Button 
                              size="sm" 
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
                    <h3 className="font-bold">Sequência de {mockUserProgress.currentStreak} dias! 🔥</h3>
                    <p className="text-sm text-muted-foreground">Continue assim para manter sua sequência</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Início Rápido</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickStartPrograms.map((program) => (
                  <Card key={program.id} className="cursor-pointer hover:scale-105 transition-transform">
                    <CardContent className="p-4">
                      <div className="text-center space-y-2">
                        <div className="text-2xl">{program.icon}</div>
                        <h3 className="font-medium text-sm">{program.title}</h3>
                        <p className="text-xs text-muted-foreground">{program.duration}</p>
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

            {/* Progress Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Seu Progresso</h2>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{mockUserProgress.level}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Nível {mockUserProgress.level}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="text-primary mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold">{mockUserProgress.totalMinutes}</div>
                    <div className="text-xs text-muted-foreground">Minutos Totais</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Flame className="text-orange-500 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold">{mockUserProgress.currentStreak}</div>
                    <div className="text-xs text-muted-foreground">Dias Seguidos</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Target className="text-green-500 mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold">{mockUserProgress.completedPrograms}</div>
                    <div className="text-xs text-muted-foreground">Programas</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Trophy className="text-accent mx-auto mb-2" size={24} />
                    <div className="text-lg font-bold">{mockUserProgress.points}</div>
                    <div className="text-xs text-muted-foreground">Pontos</div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress bar para próximo nível */}
              <Card>
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
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Programas</h1>
              <Button variant="ghost" size="icon">
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
                          <h3 className="font-semibold">{program.title}</h3>
                          <p className="text-sm text-muted-foreground">{program.description}</p>
                        </div>
                        <Badge variant="outline">{program.category}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
            <h1 className="text-2xl font-bold">Planos</h1>

            <div className="space-y-4">
              {mockPlans.map((plan) => (
                <Card key={plan.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{plan.title}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{plan.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {plan.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {plan.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progresso</span>
                          <span>{plan.progress}%</span>
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
              <h1 className="text-2xl font-bold">Sons Relaxantes</h1>
              <div className="flex items-center gap-2">
                <Volume2 size={16} />
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
                          <h3 className="font-semibold">{sound.title}</h3>
                          <p className="text-sm text-muted-foreground">{sound.description}</p>
                        </div>
                        <Badge variant="outline">{sound.category}</Badge>
                      </div>
                      
                      {sound.duration && (
                        <div className="text-xs text-muted-foreground">
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
              <h1 className="text-2xl font-bold">Maria Silva</h1>
              <p className="text-muted-foreground">maria@email.com</p>
              <Badge className="mt-2">Nível {mockUserProgress.level}</Badge>
            </div>

            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-3">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold">{mockUserProgress.totalMinutes}</div>
                  <div className="text-xs text-muted-foreground">Minutos Totais</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Flame className="text-orange-500 mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold">{mockUserProgress.currentStreak}</div>
                  <div className="text-xs text-muted-foreground">Dias Seguidos</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Target className="text-green-500 mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold">{mockUserProgress.completedPrograms}</div>
                  <div className="text-xs text-muted-foreground">Programas</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Trophy className="text-accent mx-auto mb-2" size={24} />
                  <div className="text-lg font-bold">{mockUserProgress.points}</div>
                  <div className="text-xs text-muted-foreground">Pontos</div>
                </CardContent>
              </Card>
            </div>

            {/* Menu Options */}
            <div className="space-y-3">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Settings size={20} />
                      <span>Configurações</span>
                    </div>
                    <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock size={20} />
                      <span>Histórico de Sessões</span>
                    </div>
                    <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sparkles size={20} />
                      <span>Assinatura Premium</span>
                    </div>
                    <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell size={20} />
                      <span>Suporte</span>
                    </div>
                    <ChevronRight size={16} />
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:bg-muted/50 transition-colors border-destructive/20">
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
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}>
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
                    <h4 className="font-medium text-sm">
                      {getCurrentProgram()?.title || getCurrentSound()?.title}
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
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t z-40">
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
                    : "text-muted-foreground hover:text-foreground"
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