export interface Program {
  id: string;
  title: string;
  duration: number; // em minutos
  description: string;
  category: 'cervical' | 'lombar' | 'drenagem' | 'relax' | 'sono' | 'treino';
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
  thumbnail: string;
  videoUrl?: string;
  audioUrl?: string;
  benefits: string[];
  contraindications?: string[];
}

export interface Plan {
  id: string;
  title: string;
  duration: number; // em dias
  description: string;
  programs: string[]; // IDs dos programas
  benefits: string[];
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
}

export interface Sound {
  id: string;
  title: string;
  category: 'spa' | 'natureza' | 'binaural' | 'respiracao';
  duration?: number; // em minutos, undefined para loops infinitos
  description: string;
  audioUrl: string;
  thumbnail: string;
}

export interface UserProgress {
  totalMinutes: number;
  currentStreak: number;
  longestStreak: number;
  completedPrograms: number;
  points: number;
  level: number;
}

export const mockPrograms: Program[] = [
  {
    id: '1',
    title: 'Alívio Cervical',
    duration: 10,
    description: 'Programa focado em aliviar tensões na região cervical e pescoço',
    category: 'cervical',
    difficulty: 'iniciante',
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz dor no pescoço', 'Melhora postura', 'Relaxa músculos tensos'],
    contraindications: ['Lesões cervicais recentes', 'Hérnia de disco aguda']
  },
  {
    id: '2',
    title: 'Alívio Lombar',
    duration: 12,
    description: 'Massagem terapêutica para região lombar e coluna',
    category: 'lombar',
    difficulty: 'iniciante',
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Alivia dor nas costas', 'Melhora flexibilidade', 'Reduz rigidez'],
    contraindications: ['Hérnia de disco', 'Cirurgia recente na coluna']
  },
  {
    id: '3',
    title: 'Drenagem Pernas Leves',
    duration: 15,
    description: 'Drenagem linfática para reduzir inchaço e melhorar circulação',
    category: 'drenagem',
    difficulty: 'intermediario',
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz inchaço', 'Melhora circulação', 'Sensação de leveza'],
    contraindications: ['Trombose', 'Infecção ativa', 'Insuficiência cardíaca', 'Câncer ativo']
  },
  {
    id: '4',
    title: 'Relax Total',
    duration: 8,
    description: 'Programa de relaxamento completo para corpo e mente',
    category: 'relax',
    difficulty: 'iniciante',
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Reduz estresse', 'Promove relaxamento', 'Melhora bem-estar'],
  },
  {
    id: '5',
    title: 'Sono Profundo',
    duration: 12,
    description: 'Massagem relaxante para preparar o corpo para o sono',
    category: 'sono',
    difficulty: 'iniciante',
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Melhora qualidade do sono', 'Reduz ansiedade', 'Relaxa músculos'],
  },
  {
    id: '6',
    title: 'Pré-treino',
    duration: 8,
    description: 'Aquecimento muscular antes dos exercícios',
    category: 'treino',
    difficulty: 'intermediario',
    thumbnail: '/api/placeholder/300/200',
    benefits: ['Aquece músculos', 'Previne lesões', 'Melhora performance'],
  }
];

export const mockPlans: Plan[] = [
  {
    id: '1',
    title: '7 Dias - Pernas Leves',
    duration: 7,
    description: 'Plano focado em melhorar circulação e reduzir inchaço nas pernas',
    programs: ['3'],
    benefits: ['Reduz inchaço', 'Melhora circulação', 'Alívio imediato'],
    difficulty: 'iniciante'
  },
  {
    id: '2',
    title: '14 Dias - Postura de Ferro',
    duration: 14,
    description: 'Fortalecimento e correção postural completa',
    programs: ['1', '2'],
    benefits: ['Melhora postura', 'Fortalece core', 'Reduz dores'],
    difficulty: 'intermediario'
  },
  {
    id: '3',
    title: '30 Dias - Lombar Seguro',
    duration: 30,
    description: 'Programa completo para saúde da coluna lombar',
    programs: ['2', '4', '5'],
    benefits: ['Fortalece lombar', 'Previne lesões', 'Melhora qualidade de vida'],
    difficulty: 'avancado'
  }
];

export const mockSounds: Sound[] = [
  {
    id: '1',
    title: 'Spa Relaxante',
    category: 'spa',
    description: 'Sons suaves de spa para relaxamento profundo',
    audioUrl: '/audio/spa.mp3',
    thumbnail: '/api/placeholder/200/200'
  },
  {
    id: '2',
    title: 'Água Corrente',
    category: 'natureza',
    description: 'Som relaxante de água corrente',
    audioUrl: '/audio/water.mp3',
    thumbnail: '/api/placeholder/200/200'
  },
  {
    id: '3',
    title: 'Chuva Suave',
    category: 'natureza',
    description: 'Som de chuva leve para relaxamento',
    audioUrl: '/audio/rain.mp3',
    thumbnail: '/api/placeholder/200/200'
  },
  {
    id: '4',
    title: 'Binaural - Sono',
    category: 'binaural',
    description: 'Frequências binaurais para induzir sono profundo',
    audioUrl: '/audio/binaural-sleep.mp3',
    thumbnail: '/api/placeholder/200/200'
  },
  {
    id: '5',
    title: 'Respiração 4-7-8',
    category: 'respiracao',
    duration: 10,
    description: 'Técnica de respiração para relaxamento',
    audioUrl: '/audio/breathing-478.mp3',
    thumbnail: '/api/placeholder/200/200'
  }
];

export const mockUserProgress: UserProgress = {
  totalMinutes: 245,
  currentStreak: 5,
  longestStreak: 12,
  completedPrograms: 18,
  points: 1250,
  level: 3
};

export const quickStartPrograms = [
  { id: '1', title: 'Cervical', duration: '10min', icon: '🦴' },
  { id: '3', title: 'Drenagem Pernas', duration: '15min', icon: '🦵' },
  { id: '5', title: 'Sono', duration: '12min', icon: '😴' },
  { id: '4', title: 'Relax', duration: '8min', icon: '🧘' }
];