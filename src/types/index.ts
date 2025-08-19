export type Category = 'home' | 'coluna' | 'articulacoes' | 'drenagem' | 'sono' | 'estetica' | 'cabelos' | 'emagrecimento' | 'performance' | 'bem-estar' | 'planos' | 'sons' | 'perfil';

export type Difficulty = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Program {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: any;
  difficulty: Difficulty;
  category: Category;
  steps?: string[];
  safetyNote?: string;
}

export interface QuickStartProgram {
  id: string;
  title: string;
  duration: string;
  icon: any;
  color: string;
  category?: Category;
}

export interface CategoryInfo {
  id: Category;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
}