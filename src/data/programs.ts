import { 
  Target, Shield, Activity, Zap, Moon, Brain, Clock, Sparkles, 
  Smile, Star, Award, Dumbbell, Heart, TrendingUp, Scissors,
  Flame, Users, Coffee
} from "lucide-react";
import { Program, QuickStartProgram, CategoryInfo } from "@/types";

export const quickStartPrograms: QuickStartProgram[] = [
  {
    id: 'cervical',
    title: 'Cervical',
    duration: '10min',
    icon: Target,
    color: 'text-purple-600'
  },
  {
    id: 'drenagem',
    title: 'Drenagem',
    duration: '15min',
    icon: Zap,
    color: 'text-blue-500',
    category: 'drenagem'
  },
  {
    id: 'sono',
    title: 'Sono',
    duration: '12min',
    icon: Moon,
    color: 'text-cyan-400',
    category: 'sono'
  },
  {
    id: 'estetica',
    title: 'Estética',
    duration: '8min',
    icon: Sparkles,
    color: 'text-purple-600',
    category: 'estetica'
  }
];

export const mainCategories: CategoryInfo[] = [
  {
    id: 'coluna',
    title: 'Saúde da Coluna',
    subtitle: 'Hérnia, lombalgia, postura',
    icon: Shield,
    color: 'text-purple-600'
  },
  {
    id: 'articulacoes',
    title: 'Articulações & Mobilidade',
    subtitle: 'Artrite, artrose, rigidez',
    icon: Activity,
    color: 'text-blue-500'
  },
  {
    id: 'drenagem',
    title: 'Drenagem & Circulação',
    subtitle: 'Pernas, linfática, varizes',
    icon: Heart,
    color: 'text-cyan-400'
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
    color: 'text-blue-500'
  },
  {
    id: 'cabelos',
    title: 'Cabelos',
    subtitle: 'Fortalecimento, queda, crescimento',
    icon: Scissors,
    color: 'text-cyan-400'
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento & Tonificação',
    subtitle: 'Queima localizada, firmeza',
    icon: TrendingUp,
    color: 'text-purple-600'
  },
  {
    id: 'performance',
    title: 'Performance & Recuperação',
    subtitle: 'Atletas, pós-treino',
    icon: Dumbbell,
    color: 'text-blue-500'
  },
  {
    id: 'bem-estar',
    title: 'Bem-Estar Geral',
    subtitle: 'Energia, foco, disposição',
    icon: Coffee,
    color: 'text-cyan-400'
  }
];

export const programsByCategory: Record<string, Program[]> = {
  coluna: [
    {
      id: 'hernia',
      title: 'Hérnia de Disco',
      duration: '20min',
      description: 'Alívio da dor e fortalecimento da musculatura de suporte',
      icon: Shield,
      difficulty: 'Intermediário',
      category: 'coluna'
    },
    {
      id: 'lombalgia',
      title: 'Lombalgia',
      duration: '15min',
      description: 'Redução da dor lombar e melhora da mobilidade',
      icon: Target,
      difficulty: 'Iniciante',
      category: 'coluna'
    },
    {
      id: 'postura',
      title: 'Correção Postural',
      duration: '25min',
      description: 'Fortalecimento e alinhamento da coluna vertebral',
      icon: Activity,
      difficulty: 'Intermediário',
      category: 'coluna'
    },
    {
      id: 'bico-papagaio',
      title: 'Bico de Papagaio',
      duration: '18min',
      description: 'Alívio da rigidez e melhora da flexibilidade cervical',
      icon: Zap,
      difficulty: 'Avançado',
      category: 'coluna'
    },
    {
      id: 'escoliose',
      title: 'Escoliose',
      duration: '30min',
      description: 'Programa completo para correção e fortalecimento',
      icon: TrendingUp,
      difficulty: 'Avançado',
      category: 'coluna'
    }
  ],
  articulacoes: [
    {
      id: 'artrite',
      title: 'Artrite',
      duration: '18min',
      description: 'Reduz inflamação e melhora mobilidade articular',
      icon: Activity,
      difficulty: 'Intermediário',
      category: 'articulacoes'
    },
    {
      id: 'artrose',
      title: 'Artrose',
      duration: '22min',
      description: 'Fortalece cartilagem e reduz dor nas articulações',
      icon: Shield,
      difficulty: 'Intermediário',
      category: 'articulacoes'
    },
    {
      id: 'reumatismo',
      title: 'Reumatismo Leve',
      duration: '16min',
      description: 'Alívio de dores reumáticas e melhora da flexibilidade',
      icon: Heart,
      difficulty: 'Iniciante',
      category: 'articulacoes'
    },
    {
      id: 'rigidez-articular',
      title: 'Rigidez Articular',
      duration: '20min',
      description: 'Aumenta amplitude de movimento e flexibilidade',
      icon: Zap,
      difficulty: 'Iniciante',
      category: 'articulacoes'
    }
  ],
  drenagem: [
    {
      id: 'drenagem-pernas',
      title: 'Drenagem de Pernas',
      duration: '15min',
      description: 'Reduz inchaço e melhora circulação nas pernas',
      icon: Zap,
      difficulty: 'Iniciante',
      category: 'drenagem'
    },
    {
      id: 'drenagem-completa',
      title: 'Drenagem Linfática Completa',
      duration: '35min',
      description: 'Programa completo para todo o corpo',
      icon: Heart,
      difficulty: 'Intermediário',
      category: 'drenagem'
    },
    {
      id: 'varizes',
      title: 'Varizes & Má Circulação',
      duration: '20min',
      description: 'Estimula circulação e fortalece vasos sanguíneos',
      icon: Activity,
      difficulty: 'Intermediário',
      category: 'drenagem'
    },
    {
      id: 'retencao',
      title: 'Retenção de Líquidos',
      duration: '25min',
      description: 'Elimina toxinas e reduz retenção',
      icon: Sparkles,
      difficulty: 'Iniciante',
      category: 'drenagem'
    }
  ],
  sono: [
    {
      id: 'relaxamento',
      title: 'Relaxamento Profundo',
      duration: '8min',
      description: 'Libera tensões e prepara para o descanso',
      icon: Moon,
      difficulty: 'Iniciante',
      category: 'sono'
    },
    {
      id: 'ansiedade',
      title: 'Ansiedade & Estresse',
      duration: '12min',
      description: 'Acalma o sistema nervoso e reduz ansiedade',
      icon: Brain,
      difficulty: 'Iniciante',
      category: 'sono'
    },
    {
      id: 'preparacao-dormir',
      title: 'Preparação para Dormir',
      duration: '15min',
      description: 'Rotina completa para uma noite tranquila',
      icon: Clock,
      difficulty: 'Iniciante',
      category: 'sono'
    },
    {
      id: 'alongamento-relaxante',
      title: 'Alongamento Relaxante',
      duration: '10min',
      description: 'Alonga músculos e relaxa profundamente',
      icon: Activity,
      difficulty: 'Iniciante',
      category: 'sono'
    }
  ],
  estetica: [
    {
      id: 'papada',
      title: 'Papada',
      duration: '12min',
      description: 'Tonifica músculos do pescoço e reduz papada',
      icon: Smile,
      difficulty: 'Intermediário',
      category: 'estetica'
    },
    {
      id: 'bigode-chines',
      title: 'Bigode Chinês',
      duration: '8min',
      description: 'Suaviza linhas de expressão ao redor da boca',
      icon: Sparkles,
      difficulty: 'Iniciante',
      category: 'estetica'
    },
    {
      id: 'olheiras',
      title: 'Olheiras',
      duration: '6min',
      description: 'Melhora circulação e reduz olheiras',
      icon: Star,
      difficulty: 'Iniciante',
      category: 'estetica'
    },
    {
      id: 'rejuvenescimento',
      title: 'Rejuvenescimento Facial',
      duration: '20min',
      description: 'Programa completo anti-idade',
      icon: Award,
      difficulty: 'Avançado',
      category: 'estetica'
    },
    {
      id: 'linhas-expressao',
      title: 'Linhas de Expressão',
      duration: '10min',
      description: 'Suaviza rugas e linhas de expressão',
      icon: Sparkles,
      difficulty: 'Intermediário',
      category: 'estetica'
    }
  ],
  cabelos: [
    {
      id: 'fortalecimento-foliculos',
      title: 'Fortalecimento dos Folículos',
      duration: '15min',
      description: 'Estimula folículos capilares e fortalece raízes',
      icon: Scissors,
      difficulty: 'Iniciante',
      category: 'cabelos'
    },
    {
      id: 'circulacao-couro-cabeludo',
      title: 'Circulação do Couro Cabeludo',
      duration: '12min',
      description: 'Melhora circulação sanguínea no couro cabeludo',
      icon: Heart,
      difficulty: 'Iniciante',
      category: 'cabelos'
    },
    {
      id: 'prevencao-queda',
      title: 'Prevenção de Queda',
      duration: '18min',
      description: 'Programa completo para prevenir queda de cabelo',
      icon: Shield,
      difficulty: 'Intermediário',
      category: 'cabelos'
    },
    {
      id: 'crescimento-capilar',
      title: 'Estímulo ao Crescimento',
      duration: '20min',
      description: 'Acelera crescimento e densidade capilar',
      icon: TrendingUp,
      difficulty: 'Intermediário',
      category: 'cabelos'
    }
  ],
  emagrecimento: [
    {
      id: 'abdomen-definido',
      title: 'Abdômen Definido',
      duration: '25min',
      description: 'Queima gordura localizada e tonifica abdômen',
      icon: Target,
      difficulty: 'Intermediário',
      category: 'emagrecimento'
    },
    {
      id: 'queima-pernas',
      title: 'Queima Localizada - Pernas',
      duration: '20min',
      description: 'Reduz medidas e tonifica pernas e glúteos',
      icon: Flame,
      difficulty: 'Iniciante',
      category: 'emagrecimento'
    },
    {
      id: 'queima-bracos',
      title: 'Queima Localizada - Braços',
      duration: '18min',
      description: 'Tonifica e define músculos dos braços',
      icon: Dumbbell,
      difficulty: 'Iniciante',
      category: 'emagrecimento'
    },
    {
      id: 'firmeza-pele',
      title: 'Firmeza da Pele',
      duration: '22min',
      description: 'Estimula colágeno e firma a pele',
      icon: Sparkles,
      difficulty: 'Intermediário',
      category: 'emagrecimento'
    },
    {
      id: 'estimulo-muscular',
      title: 'Estímulo Muscular',
      duration: '30min',
      description: 'Fortalece e define músculos de forma passiva',
      icon: Activity,
      difficulty: 'Avançado',
      category: 'emagrecimento'
    }
  ],
  performance: [
    {
      id: 'pos-treino',
      title: 'Recuperação Pós-Treino',
      duration: '18min',
      description: 'Acelera recuperação muscular após exercícios',
      icon: Dumbbell,
      difficulty: 'Intermediário',
      category: 'performance'
    },
    {
      id: 'prevencao-lesoes',
      title: 'Prevenção de Lesões',
      duration: '15min',
      description: 'Fortalece músculos e previne lesões',
      icon: Shield,
      difficulty: 'Intermediário',
      category: 'performance'
    },
    {
      id: 'flexibilidade',
      title: 'Flexibilidade Avançada',
      duration: '25min',
      description: 'Melhora amplitude de movimento',
      icon: Activity,
      difficulty: 'Avançado',
      category: 'performance'
    },
    {
      id: 'pre-treino',
      title: 'Energia Pré-Treino',
      duration: '10min',
      description: 'Ativa músculos e prepara para exercícios',
      icon: Zap,
      difficulty: 'Iniciante',
      category: 'performance'
    },
    {
      id: 'alongamento-guiado',
      title: 'Alongamento Guiado',
      duration: '20min',
      description: 'Sessão completa de alongamento para atletas',
      icon: Users,
      difficulty: 'Intermediário',
      category: 'performance'
    }
  ],
  'bem-estar': [
    {
      id: 'energia-dia',
      title: 'Energia no Dia',
      duration: '5min',
      description: 'Sessão rápida para aumentar disposição',
      icon: Coffee,
      difficulty: 'Iniciante',
      category: 'bem-estar'
    },
    {
      id: 'foco-mental',
      title: 'Foco Mental',
      duration: '8min',
      description: 'Melhora concentração e clareza mental',
      icon: Brain,
      difficulty: 'Iniciante',
      category: 'bem-estar'
    },
    {
      id: 'combate-estresse',
      title: 'Combate ao Estresse',
      duration: '12min',
      description: 'Reduz tensão e promove bem-estar geral',
      icon: Heart,
      difficulty: 'Iniciante',
      category: 'bem-estar'
    },
    {
      id: 'disposicao-matinal',
      title: 'Disposição Matinal',
      duration: '6min',
      description: 'Desperta o corpo e mente para o dia',
      icon: Star,
      difficulty: 'Iniciante',
      category: 'bem-estar'
    },
    {
      id: 'equilibrio-emocional',
      title: 'Equilíbrio Emocional',
      duration: '15min',
      description: 'Harmoniza emoções e promove tranquilidade',
      icon: Moon,
      difficulty: 'Intermediário',
      category: 'bem-estar'
    }
  ]
};