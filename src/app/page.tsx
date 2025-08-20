"use client";

import { useState, useEffect } from "react";
import { MadeWithLasy } from "@/components/made-with-lasy";
import { HomePage } from "@/components/home/HomePage";
import { CategoryView } from "@/components/categories/CategoryView";
import { PlansView } from "@/components/plans/PlansView";
import { SessionView } from "@/components/session/SessionView";
import { CompletionView } from "@/components/session/CompletionView";
import { SoundsView } from "@/components/sounds/SoundsView";
import { ProfileView } from "@/components/profile/ProfileView";
import { BottomNavigation } from "@/components/shared/BottomNavigation";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { RegisterScreen } from "@/components/auth/RegisterScreen";
import { ForgotPasswordScreen } from "@/components/auth/ForgotPasswordScreen";
import { QuizFlow } from "@/components/quiz/QuizFlow";
import { QuizResults } from "@/components/quiz/QuizResults";
import { useNavigation } from "@/hooks/useNavigation";
import { programsByCategory } from "@/data/programs";
import { corePrograms } from "@/data/programs-complete";
import { QuizResponse, QuizRecommendations, UserProfile } from "@/types/quiz";
import { Category } from "@/types";

type AppState = 'auth' | 'quiz' | 'quiz-results' | 'navigation' | 'session' | 'completion';
type AuthState = 'login' | 'register' | 'forgot-password';

export default function Home() {
  const { currentCategory, navigateToCategory, navigateToHome } = useNavigation();
  const [appState, setAppState] = useState<AppState>('auth');
  const [authState, setAuthState] = useState<AuthState>('login');
  const [currentSession, setCurrentSession] = useState<{title: string, duration: string} | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [quizRecommendations, setQuizRecommendations] = useState<QuizRecommendations | null>(null);

  // Verificar se usuário já está logado e se completou o quiz
  useEffect(() => {
    const savedUser = localStorage.getItem('quantum-user');
    const savedQuiz = localStorage.getItem('quantum-quiz-completed');
    
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserProfile(user);
      
      if (savedQuiz) {
        setAppState('navigation');
      } else {
        setAppState('quiz');
      }
    } else {
      setAppState('auth');
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    // Simular login - em produção seria uma chamada à API
    const mockUser: UserProfile = {
      id: '1',
      name: 'Maria Silva',
      email: email,
      objetivo: '',
      regioes: [],
      escalaDor: 0,
      condicoes: [],
      aparelhos: [],
      tempoDisponivel: '',
      preferenciaSom: [],
      horarioPreferido: '',
      contraindicacoes: false,
      lgpdConsent: false,
      completedAt: new Date(),
      recommendations: {
        planoRecomendado: { id: '', title: '', duration: '', description: '' },
        programasRapidos: [],
        playlistSons: [],
        horarioNotificacao: ''
      },
      progress: {
        totalMinutes: 245,
        streak: 5,
        completedSessions: 12,
        level: 3,
        points: 1250
      },
      preferences: {
        theme: 'night',
        notifications: true
      }
    };

    localStorage.setItem('quantum-user', JSON.stringify(mockUser));
    setUserProfile(mockUser);
    
    // Verificar se já completou o quiz
    const savedQuiz = localStorage.getItem('quantum-quiz-completed');
    if (savedQuiz) {
      setAppState('navigation');
    } else {
      setAppState('quiz');
    }
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    // Simular registro - em produção seria uma chamada à API
    await handleLogin(email, password);
  };

  const handleForgotPassword = async (email: string) => {
    // Simular env io de email - em produção seria uma chamada à API
    console.log('Email de recuperação enviado para:', email);
  };

  const generateRecommendations = (response: QuizResponse): QuizRecommendations => {
    // Lógica de recomendação baseada nas respostas
    const { objetivo, regioes, tempoDisponivel, preferenciaSom, horarioPreferido } = response;

    // Plano recomendado baseado no objetivo
    let planoRecomendado;
    switch (objetivo) {
      case 'cervical':
      case 'lombar':
        planoRecomendado = {
          id: 'plano-14-postura',
          title: '14D Postura de Ferro',
          duration: '14 dias',
          description: 'Programa intensivo para alívio e fortalecimento da coluna'
        };
        break;
      case 'drenagem':
        planoRecomendado = {
          id: 'plano-7-pernas',
          title: '7D Pernas Leves',
          duration: '7 dias',
          description: 'Programa focado em drenagem e circulação'
        };
        break;
      case 'estetica':
        planoRecomendado = {
          id: 'plano-15-rejuvenescimento',
          title: '15D Rejuvenescimento Facial',
          duration: '15 dias',
          description: 'Transformação facial completa'
        };
        break;
      default:
        planoRecomendado = {
          id: 'plano-7-iniciante',
          title: '7D Introdução',
          duration: '7 dias',
          description: 'Introdução completa ao Quantum'
        };
    }

    // Programas rápidos baseados no objetivo e regiões
    const programasRapidos: Array<{id: string, title: string, duration: string, category?: Category}> = [];
    
    if (objetivo === 'cervical' || regioes.includes('cervical')) {
      programasRapidos.push({
        id: 'alivio-cervical',
        title: 'Alívio Cervical',
        duration: tempoDisponivel || '10min',
        category: 'coluna'
      });
    }
    if (objetivo === 'drenagem' || regioes.includes('pernas')) {
      programasRapidos.push({
        id: 'drenagem-pernas',
        title: 'Drenagem Pernas Leves',
        duration: '15min',
        category: 'drenagem'
      });
    }
    if (objetivo === 'sono') {
      programasRapidos.push({
        id: 'sono-profundo',
        title: 'Sono Profundo',
        duration: '12min',
        category: 'sono'
      });
    }
    if (objetivo === 'performance') {
      programasRapidos.push({
        id: 'pos-treino',
        title: 'Pós-Treino Express',
        duration: '12min',
        category: 'performance'
      });
    }

    // Garantir pelo menos 3 programas
    while (programasRapidos.length < 3) {
      programasRapidos.push({
        id: 'relax-total',
        title: 'Relax Total',
        duration: '8min',
        category: 'bem-estar'
      });
    }

    return {
      planoRecomendado,
      programasRapidos: programasRapidos.slice(0, 3),
      playlistSons: preferenciaSom,
      horarioNotificacao: horarioPreferido
    };
  };

  const handleQuizComplete = (response: QuizResponse, recommendations: QuizRecommendations) => {
    // Salvar respostas do quiz e recomendações
    localStorage.setItem('quantum-quiz-completed', 'true');
    localStorage.setItem('quantum-quiz-response', JSON.stringify(response));
    localStorage.setItem('quantum-recommendations', JSON.stringify(recommendations));
    
    // Atualizar perfil do usuário
    if (userProfile) {
      const updatedProfile = {
        ...userProfile,
        ...response,
        recommendations
      };
      setUserProfile(updatedProfile);
      localStorage.setItem('quantum-user', JSON.stringify(updatedProfile));
    }
    
    setQuizRecommendations(recommendations);
    setAppState('quiz-results');
  };

  const handleQuizResultsContinue = () => {
    setAppState('navigation');
    navigateToHome();
  };

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'sounds':
        navigateToCategory('sons' as any);
        break;
      case 'profile':
        navigateToCategory('perfil' as any);
        break;
      case 'programs':
        // Mostrar modal ou navegar para categorias
        console.log('Mostrar programas');
        break;
      default:
        console.log(`Ação: ${action}`);
    }
  };

  const handleStartProgram = (programId: string) => {
    // Encontrar o programa nos dados
    const allPrograms = [...Object.values(programsByCategory).flat(), ...corePrograms];
    const program = allPrograms.find(p => p.id === programId);
    
    if (program) {
      setCurrentSession({
        title: program.title,
        duration: program.duration
      });
      setAppState('session');
    }
  };

  const handleStartPlan = (planId: string) => {
    console.log(`Iniciando plano: ${planId}`);
    // Implementar lógica para iniciar um plano guiado
  };

  const handleSessionComplete = () => {
    setAppState('completion');
  };

  const handleBackToNavigation = () => {
    setAppState('navigation');
    setCurrentSession(null);
  };

  const handleBackToHome = () => {
    setAppState('navigation');
    setCurrentSession(null);
    navigateToHome();
  };

  const handleLogout = () => {
    localStorage.removeItem('quantum-user');
    localStorage.removeItem('quantum-quiz-completed');
    localStorage.removeItem('quantum-quiz-response');
    localStorage.removeItem('quantum-recommendations');
    setUserProfile(null);
    setQuizRecommendations(null);
    setAppState('auth');
    setAuthState('login');
  };

  // Renderizar telas de autenticação
  if (appState === 'auth') {
    switch (authState) {
      case 'login':
        return (
          <LoginScreen
            onLogin={handleLogin}
            onRegister={() => setAuthState('register')}
            onForgotPassword={() => setAuthState('forgot-password')}
          />
        );
      case 'register':
        return (
          <RegisterScreen
            onRegister={handleRegister}
            onBackToLogin={() => setAuthState('login')}
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordScreen
            onSendReset={handleForgotPassword}
            onBackToLogin={() => setAuthState('login')}
          />
        );
    }
  }

  // Renderizar quiz obrigatório
  if (appState === 'quiz') {
    return <QuizFlow onComplete={handleQuizComplete} />;
  }

  // Renderizar resultados do quiz
  if (appState === 'quiz-results') {
    return (
      <QuizResults
        recommendations={quizRecommendations!}
        onContinue={handleQuizResultsContinue}
      />
    );
  }

  // Renderizar sessão ativa
  if (appState === 'session' && currentSession) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SessionView
          programTitle={currentSession.title}
          duration={currentSession.duration}
          onBack={handleBackToNavigation}
          onComplete={handleSessionComplete}
        />
      </div>
    );
  }

  // Renderizar tela de conclusão
  if (appState === 'completion' && currentSession) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <CompletionView
          programTitle={currentSession.title}
          onBack={handleBackToNavigation}
          onHome={handleBackToHome}
        />
      </div>
    );
  }

  const renderCurrentView = () => {
    switch (currentCategory) {
      case 'home':
        return (
          <HomePage 
            onAction={handleButtonClick} 
            onNavigate={navigateToCategory}
            userProgress={userProfile?.progress}
            quickStartRecommendations={quizRecommendations?.programasRapidos}
          />
        );
      
      case 'planos':
        return (
          <PlansView
            onBack={navigateToHome}
            onStartPlan={handleStartPlan}
          />
        );
      
      case 'sons' as any:
        return (
          <SoundsView onBack={navigateToHome} />
        );
      
      case 'perfil' as any:
        return (
          <ProfileView 
            userProfile={userProfile!}
            onBack={navigateToHome}
            onLogout={handleLogout}
            onUpdateProfile={(updates) => {
              if (userProfile) {
                const updatedProfile = { ...userProfile, ...updates };
                setUserProfile(updatedProfile);
                localStorage.setItem('quantum-user', JSON.stringify(updatedProfile));
              }
            }}
          />
        );
      
      case 'coluna':
        return (
          <CategoryView
            title="Saúde da Coluna"
            subtitle="Programas para alívio e fortalecimento"
            programs={programsByCategory.coluna}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'articulacoes':
        return (
          <CategoryView
            title="Articulações & Mobilidade"
            subtitle="Artrite, artrose e rigidez articular"
            programs={programsByCategory.articulacoes}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'drenagem':
        return (
          <CategoryView
            title="Drenagem & Circulação"
            subtitle="Melhore sua circulação e reduza inchaços"
            programs={programsByCategory.drenagem}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'sono':
        return (
          <CategoryView
            title="Sono & Relaxamento"
            subtitle="Relaxe profundamente e durma melhor"
            programs={programsByCategory.sono}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'estetica':
        return (
          <CategoryView
            title="Estética Facial"
            subtitle="Rejuvenesça e tonifique seu rosto"
            programs={programsByCategory.estetica}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'cabelos':
        return (
          <CategoryView
            title="Cabelos"
            subtitle="Fortalecimento e crescimento capilar"
            programs={programsByCategory.cabelos}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'emagrecimento':
        return (
          <CategoryView
            title="Emagrecimento & Tonificação"
            subtitle="Queima localizada e firmeza da pele"
            programs={programsByCategory.emagrecimento}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'performance':
        return (
          <CategoryView
            title="Performance & Recuperação"
            subtitle="Maximize seu desempenho atlético"
            programs={programsByCategory.performance}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      case 'bem-estar':
        return (
          <CategoryView
            title="Bem-Estar Geral"
            subtitle="Energia, foco e disposição diária"
            programs={programsByCategory['bem-estar']}
            onBack={navigateToHome}
            onStartProgram={handleStartProgram}
          />
        );
      
      default:
        return (
          <HomePage 
            onAction={handleButtonClick} 
            onNavigate={navigateToCategory}
            userProgress={userProfile?.progress}
            quickStartRecommendations={quizRecommendations?.programasRapidos}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Conteúdo principal */}
      <div className="pb-24">
        {renderCurrentView()}
      </div>

      {/* Barra de navegação sempre visível */}
      <BottomNavigation 
        currentCategory={currentCategory}
        onNavigate={navigateToCategory}
        onAction={handleButtonClick}
      />

      {/* Made with Lasy */}
      <div className="pb-4">
        <MadeWithLasy />
      </div>
    </div>
  );
}