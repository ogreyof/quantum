export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  devices: string[]; // IDs dos aparelhos que possui
  activeDevice: string; // Aparelho ativo atual
  quizCompleted: boolean;
  quizData?: QuizResponse;
  recommendations?: QuizRecommendations;
  progress: UserProgress;
  subscription: {
    status: 'active' | 'inactive' | 'trial';
    plan: 'basic' | 'premium' | 'annual';
    expiresAt?: Date;
  };
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
    reminderTime: string;
  };
}

export interface UserProgress {
  totalMinutes: number;
  currentStreak: number;
  longestStreak: number;
  completedSessions: number;
  completedPrograms: string[];
  completedPlans: string[];
  points: number;
  level: number;
  badges: string[];
  lastSessionDate?: Date;
}

export interface QuizResponse {
  objetivo: string;
  regioes: string[];
  escalaDor: number;
  condicoes: string[];
  aparelhos: string[];
  tempoDisponivel: string;
  preferenciaSom: string[];
  horarioPreferido: string;
  contraindicacoes: boolean;
  lgpdConsent: boolean;
  completedAt: Date;
}

export interface QuizRecommendations {
  planoRecomendado: {
    id: string;
    title: string;
    duration: string;
    description: string;
  };
  programasRapidos: Array<{
    id: string;
    title: string;
    duration: string;
    category?: string;
  }>;
  playlistSons: string[];
  horarioNotificacao: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}