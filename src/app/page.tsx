"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Play, Calendar, Music, User, Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { QuizFlow } from "@/components/quiz/QuizFlow";
import { ProgramDetailView } from "@/components/programs/ProgramDetailView";
import { ExerciseDetailView } from "@/components/programs/ExerciseDetailView";
import { SessionView } from "@/components/session/SessionView";
import { CompletionView } from "@/components/session/CompletionView";
import { SoundsView } from "@/components/sounds/SoundsView";
import { ProfileView } from "@/components/profile/ProfileView";
import { PlansView } from "@/components/plans/PlansView";
import { HomePage } from "@/components/home/HomePage";
import { BottomNavigation } from "@/components/shared/BottomNavigation";
import { QuizResponse, QuizRecommendations, UserProfile } from "@/types/quiz";
import { Category } from "@/types";
import { completePrograms, ProgramCategory, Exercise } from "@/data/complete-programs";

// Mock user data
const mockUserProfile: UserProfile = {
  id: '1',
  name: 'Maria Silva',
  email: 'maria@email.com',
  avatar: '/avatars/maria.jpg',
  objetivo: 'sono',
  regioes: ['cervical', 'lombar'],
  escalaDor: 6,
  condicoes: ['lombalgia'],
  aparelhos: ['assento-3d'],
  tempoDisponivel: '12min',
  preferenciaSom: ['spa', 'agua'],
  horarioPreferido: 'noite',
  contraindicacoes: true,
  lgpdConsent: true,
  completedAt: new Date(),
  recommendations: {
    planoRecomendado: {
      id: 'plano-sono-14',
      title: '14D Sono Reparador',
      duration: '14 dias',
      description: 'Programa completo para melhoria do sono'
    },
    programasRapidos: [
      { id: 'sono-profundo', title: 'Sono Profundo', duration: '12min', category: 'sono' },
      { id: 'cervical-rapido', title: 'Cervical Rápido', duration: '8min', category: 'coluna' },
      { id: 'relax-total', title: 'Relax Total', duration: '10min', category: 'bem-estar' }
    ],
    playlistSons: ['spa', 'agua', 'chuva'],
    horarioNotificacao: 'noite'
  },
  progress: {
    totalMinutes: 245,
    streak: 5,
    completedSessions: 18,
    level: 3,
    points: 1250
  },
  preferences: {
    theme: 'night',
    notifications: true
  }
};

type ViewState = 
  | { type: 'home' }
  | { type: 'quiz' }
  | { type: 'programs' }
  | { type: 'program-detail'; program: ProgramCategory }
  | { type: 'exercise-detail'; exercise: Exercise }
  | { type: 'session'; exerciseId: string; exerciseTitle: string; duration: string }
  | { type: 'completion'; exerciseTitle: string }
  | { type: 'sounds' }
  | { type: 'plans' }
  | { type: 'profile' };

export default function QuantumExperience() {
  const [viewState, setViewState] = useState<ViewState>({ type: 'home' });
  const [currentCategory, setCurrentCategory] = useState<Category>('home');
  const [quizCompleted, setQuizCompleted] = useState(true); // Simular quiz já completado
  const [userProfile, setUserProfile] = useState<UserProfile>(mockUserProfile);

  const handleQuizComplete = (response: QuizResponse, recommendations: QuizRecommendations) => {
    const updatedProfile: UserProfile = {
      ...response,
      id: '1',
      name: 'Maria Silva',
      email: 'maria@email.com',
      recommendations,
      progress: {
        totalMinutes: 0,
        streak: 0,
        completedSessions: 0,
        level: 1,
        points: 0
      },
      preferences: {
        theme: 'night',
        notifications: true
      }
    };
    
    setUserProfile(updatedProfile);
    setQuizCompleted(true);
    setViewState({ type: 'home' });
  };

  const handleNavigation = (category: Category) => {
    setCurrentCategory(category);
    
    switch (category) {
      case 'home':
        setViewState({ type: 'home' });
        break;
      case 'planos':
        setViewState({ type: 'plans' });
        break;
      case 'sons':
        setViewState({ type: 'sounds' });
        break;
      case 'perfil':
        setViewState({ type: 'profile' });
        break;
      default:
        // Para categorias de programas, encontrar o programa correspondente
        const program = completePrograms.find(p => p.id === category);
        if (program) {
          setViewState({ type: 'program-detail', program });
        }
        break;
    }
  };

  const handleAction = (action: string) => {
    switch (action) {
      case 'programs':
        setViewState({ type: 'programs' });
        setCurrentCategory('coluna'); // Default para primeira categoria
        break;
      case 'sounds':
        setViewState({ type: 'sounds' });
        setCurrentCategory('sons');
        break;
      case 'profile':
        setViewState({ type: 'profile' });
        setCurrentCategory('perfil');
        break;
      case 'quiz':
        setViewState({ type: 'quiz' });
        break;
      default:
        // Ações de programas específicos
        const program = completePrograms.find(p => 
          p.exercises.some(e => e.id === action)
        );
        if (program) {
          const exercise = program.exercises.find(e => e.id === action);
          if (exercise) {
            setViewState({ 
              type: 'session', 
              exerciseId: exercise.id,
              exerciseTitle: exercise.title,
              duration: exercise.duration
            });
          }
        }
        break;
    }
  };

  const handleStartExercise = (exerciseId: string) => {
    // Encontrar o exercício
    for (const program of completePrograms) {
      const exercise = program.exercises.find(e => e.id === exerciseId);
      if (exercise) {
        setViewState({ 
          type: 'session', 
          exerciseId: exercise.id,
          exerciseTitle: exercise.title,
          duration: exercise.duration
        });
        return;
      }
    }
  };

  const handleSessionComplete = () => {
    if (viewState.type === 'session') {
      setViewState({ 
        type: 'completion', 
        exerciseTitle: viewState.exerciseTitle 
      });
    }
  };

  const handleBackToHome = () => {
    setViewState({ type: 'home' });
    setCurrentCategory('home');
  };

  const handleLogout = () => {
    setQuizCompleted(false);
    setViewState({ type: 'quiz' });
  };

  const handleUpdateProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const renderCurrentView = () => {
    switch (viewState.type) {
      case 'quiz':
        return <QuizFlow onComplete={handleQuizComplete} />;
        
      case 'home':
        return (
          <HomePage
            onAction={handleAction}
            onNavigate={handleNavigation}
            userProgress={userProfile.progress}
            quickStartRecommendations={userProfile.recommendations.programasRapidos}
          />
        );
        
      case 'programs':
        return (
          <div className="min-h-screen bg-background">
            <div className="max-w-md mx-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-white">Programas Completos</h1>
                  <div className="flex gap-3">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Search size={20} />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {completePrograms.map((program) => {
                    const IconComponent = program.icon;
                    return (
                      <div
                        key={program.id}
                        className="bg-white rounded-2xl p-4 cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setViewState({ type: 'program-detail', program })}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-quantum rounded-full flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-black">{program.title}</h3>
                            <p className="text-sm text-gray-600">{program.subtitle}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-gray-500">{program.totalExercises} exercícios</span>
                              <span className="text-xs text-gray-500">~{program.averageDuration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold text-primary">{program.difficulty}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'program-detail':
        return (
          <ProgramDetailView
            program={viewState.program}
            onBack={() => setViewState({ type: 'programs' })}
            onStartExercise={(exerciseId) => {
              const exercise = viewState.program.exercises.find(e => e.id === exerciseId);
              if (exercise) {
                setViewState({ type: 'exercise-detail', exercise });
              }
            }}
          />
        );
        
      case 'exercise-detail':
        return (
          <ExerciseDetailView
            exercise={viewState.exercise}
            onBack={() => {
              const program = completePrograms.find(p => 
                p.exercises.some(e => e.id === viewState.exercise.id)
              );
              if (program) {
                setViewState({ type: 'program-detail', program });
              }
            }}
            onStartSession={handleStartExercise}
          />
        );
        
      case 'session':
        return (
          <SessionView
            programTitle={viewState.exerciseTitle}
            duration={viewState.duration}
            onBack={() => {
              // Voltar para detalhes do exercício
              for (const program of completePrograms) {
                const exercise = program.exercises.find(e => e.id === viewState.exerciseId);
                if (exercise) {
                  setViewState({ type: 'exercise-detail', exercise });
                  return;
                }
              }
            }}
            onComplete={handleSessionComplete}
          />
        );
        
      case 'completion':
        return (
          <CompletionView
            programTitle={viewState.exerciseTitle}
            onBack={() => setViewState({ type: 'programs' })}
            onHome={handleBackToHome}
          />
        );
        
      case 'sounds':
        return <SoundsView onBack={handleBackToHome} />;
        
      case 'plans':
        return (
          <PlansView
            onBack={handleBackToHome}
            onStartPlan={(planId) => {
              console.log('Starting plan:', planId);
              // Implementar lógica de planos
            }}
          />
        );
        
      case 'profile':
        return (
          <ProfileView
            userProfile={userProfile}
            onBack={handleBackToHome}
            onLogout={handleLogout}
            onUpdateProfile={handleUpdateProfile}
          />
        );
        
      default:
        return <HomePage onAction={handleAction} onNavigate={handleNavigation} />;
    }
  };

  const showBottomNav = !['quiz', 'session', 'completion'].includes(viewState.type);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={viewState.type}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderCurrentView()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <BottomNavigation
          currentCategory={currentCategory}
          onNavigate={handleNavigation}
          onAction={handleAction}
        />
      )}
    </div>
  );
}