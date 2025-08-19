import { 
  Target, Shield, Activity, Zap, Moon, Brain, Clock, Sparkles, 
  Smile, Star, Award, Dumbbell, Heart, TrendingUp, Scissors,
  Flame, Users, Coffee, Droplets, Wind
} from "lucide-react";
import { Program, QuickStartProgram, CategoryInfo } from "@/types";

// Programas obrigatórios mínimos
export const corePrograms: Program[] = [
  {
    id: 'alivio-cervical',
    title: 'Alívio Cervical',
    duration: '10min',
    description: 'Programa específico para alívio de tensões e dores na região cervical',
    icon: Target,
    difficulty: 'Iniciante',
    category: 'coluna',
    steps: [
      'Posicione o massageador na base do pescoço',
      'Ajuste a intensidade para nível confortável (3-5)',
      'Mantenha a postura ereta e relaxada',
      'Respire profundamente durante todo o processo',
      'Mova suavemente a cabeça para os lados'
    ],
    safetyNote: 'Este programa promove bem-estar e relaxamento. Não substitui tratamento médico. Evite usar em caso de inflamação aguda.'
  },
  {
    id: 'alivio-lombar',
    title: 'Alívio Lombar',
    duration: '12min',
    description: 'Programa para redução de dores e tensões na região lombar',
    icon: Shield,
    difficulty: 'Iniciante',
    category: 'coluna',
    steps: [
      'Posicione o massageador na região lombar',
      'Ajuste a intensidade gradualmente',
      'Mantenha os pés apoiados no chão',
      'Evite movimentos bruscos',
      'Concentre-se na respiração'
    ],
    safetyNote: 'Este programa promove bem-estar e relaxamento. Não substitui tratamento médico. Contraindicado em casos de hérnia aguda.'
  },
  {
    id: 'drenagem-pernas-leves',
    title: 'Drenagem Pernas Leves',
    duration: '15min',
    description: 'Programa de drenagem linfática para reduzir inchaço e melhorar circulação',
    icon: Droplets,
    difficulty: 'Iniciante',
    category: 'drenagem',
    steps: [
      'Posicione os pés nos massageadores',
      'Eleve ligeiramente as pernas',
      'Inicie com intensidade baixa',
      'Hidrate-se durante o processo',
      'Relaxe completamente'
    ],
    safetyNote: 'Este programa promove bem-estar e circulação. Não substitui tratamento médico. Contraindicado em trombose ativa ou infecções.'
  },
  {
    id: 'sono-profundo',
    title: 'Sono Profundo',
    duration: '12min',
    description: 'Programa relaxante para preparar o corpo e mente para o descanso',
    icon: Moon,
    difficulty: 'Iniciante',
    category: 'sono',
    steps: [
      'Escolha um ambiente tranquilo e escuro',
      'Posicione o massageador confortavelmente',
      'Use intensidade muito baixa',
      'Concentre-se na respiração lenta',
      'Permita-se relaxar completamente'
    ],
    safetyNote: 'Este programa promove bem-estar e relaxamento. Não substitui tratamento médico. Ideal para uso antes de dormir.'
  },
  {
    id: 'relax-total',
    title: 'Relax Total',
    duration: '8min',
    description: 'Programa de relaxamento geral para alívio do estresse diário',
    icon: Heart,
    difficulty: 'Iniciante',
    category: 'bem-estar',
    steps: [
      'Encontre uma posição confortável',
      'Ajuste a intensidade ao seu gosto',
      'Feche os olhos e relaxe',
      'Respire profunda e calmamente',
      'Deixe as tensões se dissolverem'
    ],
    safetyNote: 'Este programa promove bem-estar e relaxamento. Não substitui tratamento médico. Seguro para uso diário.'
  },
  {
    id: 'pos-treino-express',
    title: 'Pós-Treino Express',
    duration: '12min',
    description: 'Programa de recuperação muscular após exercícios físicos',
    icon: Dumbbell,
    difficulty: 'Intermediário',
    category: 'performance',
    steps: [
      'Use após 30 minutos do treino',
      'Foque nas áreas mais trabalhadas',
      'Mantenha intensidade moderada',
      'Hidrate-se adequadamente',
      'Combine com alongamentos suaves'
    ],
    safetyNote: 'Este programa promove bem-estar e recuperação. Não substitui tratamento médico. Aguarde pelo menos 30 min após exercícios intensos.'
  },
  {
    id: 'drenagem-facial',
    title: 'Drenagem Facial',
    duration: '10min',
    description: 'Programa de drenagem linfática facial para reduzir inchaço e tonificar',
    icon: Sparkles,
    difficulty: 'Iniciante',
    category: 'estetica',
    steps: [
      'Limpe bem o rosto antes de iniciar',
      'Use intensidade muito suave',
      'Movimente delicadamente sobre a pele',
      'Evite a área dos olhos diretamente',
      'Finalize com hidratante'
    ],
    safetyNote: 'Este programa promove bem-estar e cuidados estéticos. Não substitui tratamento médico. Evite uso em pele irritada ou feridas.'
  }
];

// Programas de início rápido personalizados
export const quickStartPrograms: QuickStartProgram[] = [
  {
    id: 'cervical-rapido',
    title: 'Cervical Rápido',
    duration: '5min',
    icon: Target,
    color: 'text-purple-600'
  },
  {
    id: 'energia-matinal',
    title: 'Energia Matinal',
    duration: '8min',
    icon: Coffee,
    color: 'text-blue-500',
    category: 'bem-estar'
  },
  {
    id: 'relaxamento-noturno',
    title: 'Relaxamento Noturno',
    duration: '10min',
    icon: Moon,
    color: 'text-cyan-400',
    category: 'sono'
  },
  {
    id: 'drenagem-express',
    title: 'Drenagem Express',
    duration: '8min',
    icon: Droplets,
    color: 'text-purple-600',
    category: 'drenagem'
  }
];

// Planos obrigatórios
export const corePlans = [
  {
    id: 'plano-7-pernas-leves',
    title: '7D Pernas Leves',
    duration: '7 dias',
    description: 'Programa focado em drenagem e circulação das pernas',
    icon: Droplets,
    difficulty: 'Iniciante' as const,
    category: 'drenagem',
    dailyPrograms: [
      'Dia 1: Drenagem Pernas Leves (15min)',
      'Dia 2: Relaxamento + Drenagem (20min)',
      'Dia 3: Drenagem Intensiva (18min)',
      'Dia 4: Descanso Ativo (10min)',
      'Dia 5: Drenagem + Alongamento (22min)',
      'Dia 6: Circulação Completa (25min)',
      'Dia 7: Manutenção (15min)'
    ],
    benefits: [
      'Redução do inchaço nas pernas',
      'Melhora da circulação sanguínea',
      'Alívio da sensação de peso',
      'Prevenção de varizes'
    ]
  },
  {
    id: 'plano-14-postura-ferro',
    title: '14D Postura de Ferro',
    duration: '14 dias',
    description: 'Programa intensivo para correção postural e fortalecimento da coluna',
    icon: Shield,
    difficulty: 'Intermediário' as const,
    category: 'coluna',
    dailyPrograms: [
      'Semana 1: Adaptação e Alívio',
      'Dias 1-3: Alívio Cervical (10min)',
      'Dias 4-7: Alívio Lombar (12min)',
      'Semana 2: Fortalecimento',
      'Dias 8-10: Postura Completa (20min)',
      'Dias 11-14: Manutenção (15min)'
    ],
    benefits: [
      'Correção da postura corporal',
      'Fortalecimento da musculatura',
      'Redução de dores crônicas',
      'Melhora da qualidade de vida'
    ]
  },
  {
    id: 'plano-15-rejuvenescimento-facial',
    title: '15D Rejuvenescimento Facial',
    duration: '15 dias',
    description: 'Programa completo de cuidados estéticos faciais',
    icon: Sparkles,
    difficulty: 'Intermediário' as const,
    category: 'estetica',
    dailyPrograms: [
      'Dias 1-5: Drenagem Facial (10min)',
      'Dias 6-10: Tonificação (12min)',
      'Dias 11-15: Rejuvenescimento (15min)'
    ],
    benefits: [
      'Redução de inchaço facial',
      'Melhora do tônus da pele',
      'Diminuição de linhas de expressão',
      'Aspecto mais jovem e saudável'
    ]
  }
];