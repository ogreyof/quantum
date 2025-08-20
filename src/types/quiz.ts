import { Category } from "./index";

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
    category?: Category; // Mudança aqui: opcional e tipo Category
  }>;
  playlistSons: string[];
  horarioNotificacao: string;
}

export interface UserProfile extends QuizResponse {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  recommendations: QuizRecommendations;
  progress: {
    totalMinutes: number;
    streak: number;
    completedSessions: number;
    level: number;
    points: number;
  };
  preferences: {
    theme: 'light' | 'night';
    notifications: boolean;
  };
}