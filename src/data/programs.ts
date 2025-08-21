import { 
  Target, Shield, Activity, Zap, Moon, Brain, Clock, Sparkles, 
  Smile, Star, Award, Dumbbell, Heart, TrendingUp, Scissors,
  Flame, Users, Coffee, Droplets, Wind
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
    icon: Droplets,
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
  },
  {
    id: 'coluna',
    title: 'Saúde da Coluna',
    subtitle: 'Cervical, lombar, postura',
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
    id: 'performance',
    title: 'Performance & Recuperação',
    subtitle: 'Atletas, pós-treino',
    icon: Dumbbell,
    color: 'text-cyan-400'
  },
  {
    id: 'bem-estar',
    title: 'Bem-Estar Geral',
    subtitle: 'Energia, foco, disposição',
    icon: Coffee,
    color: 'text-green-500'
  }
];

export const programsByCategory: Record<string, Program[]> = {
  drenagem: [
    {
      id: 'drenagem-pernas',
      title: 'Drenagem de Pernas',
      duration: '15min',
      description: 'Reduz inchaço e melhora circulação nas pernas',
      icon: Droplets,
      difficulty: 'Iniciante',
      category: 'drenagem'
    },
    {
      id: 'drenagem-linfatica',
      title: 'Drenagem Linfática Completa',
      duration: '25min',
      description: 'Programa completo para todo o sistema linfático',
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
      duration: '18min',
      description: 'Elimina toxinas e reduz retenção',
      icon: Sparkles,
      difficulty: 'Iniciante',
      category: 'drenagem'
    }
  ],
  sono: [
    {
      id: 'relaxamento-profundo',
      title: 'Relaxamento Profundo',
      duration: '12min',
      description: 'Libera tensões e prepara para o descanso',
      icon: Moon,
      difficulty: 'Iniciante',
      category: 'sono'
    },
    {
      id: 'ansiedade',
      title: 'Ansiedade & Estresse',
      duration: '15min',
      description: 'Acalma o sistema nervoso e reduz ansiedade',
      icon: Brain,
      difficulty: 'Iniciante',
      category: 'sono'
    },
    {
      id: 'preparacao-dormir',
      title: 'Preparação para Dormir',
      duration: '18min',
      description: 'Rotina completa para uma noite tranquila',
      icon: Clock,
      difficulty: 'Iniciante',
      category: 'sono'
    },
    {
      id: 'sono-profundo',
      title: 'Sono Profundo',
      duration: '20min',
      description: 'Induz relaxamento para sono reparador',
      icon: Moon,
      difficulty: 'Intermediário',
      category: 'sono'
    }
  ],
  estetica: [
    {
      id: 'papada',
      title: 'Redução de Papada',
      duration: '12min',
      description: 'Tonifica músculos do pescoço e reduz papada',
      icon: Smile,
      difficulty: 'Intermediário',
      category: 'estetica'
    },
    {
      id: 'rugas',
      title: 'Suavização de Rugas',
      duration: '10min',
      description: 'Reduz linhas de expressão e rugas',
      icon: Sparkles,
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
      id: 'firmeza-facial',
      title: 'Firmeza Facial',
      duration: '15min',
      description: 'Melhora elasticidade e firmeza da pele',
      icon: Star,
      difficulty: 'Intermediário',
      category: 'estetica'
    }
  ],
  cabelos: [
    {
      id: 'fortalecimento-capilar',
      title: 'Fortalecimento Capilar',
      duration: '15min',
      description: 'Fortalece folículos e raízes capilares',
      icon: Scissors,
      difficulty: 'Iniciante',
      category: 'cabelos'
    },
    {
      id: 'queda-cabelo',
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
    },
    {
      id: 'circulacao-couro',
      title: 'Circulação do Couro Cabeludo',
      duration: '12min',
      description: 'Melhora circulação sanguínea no couro cabeludo',
      icon: Heart,
      difficulty: 'Iniciante',
      category: 'cabelos'
    }
  ],
  emagrecimento: [
    {
      id: 'queima-localizada',
      title: 'Queima Localizada',
      duration: '25min',
      description: 'Queima gordura em áreas específicas',
      icon: Flame,
      difficulty: 'Intermediário',
      category: 'emagrecimento'
    },
    {
      id: 'tonificacao',
      title: 'Tonificação Muscular',
      duration: '20min',
      description: 'Fortalece e define músculos',
      icon: Dumbbell,
      difficulty: 'Intermediário',
      category: 'emagrecimento'
    },
    {
      id: 'firmeza-corporal',
      title: 'Firmeza Corporal',
      duration: '22min',
      description: 'Estimula colágeno e firma a pele',
      icon: Sparkles,
      difficulty: 'Intermediário',
      category: 'emagrecimento'
    },
    {
      id: 'modelagem',
      title: 'Modelagem Corporal',
      duration: '30min',
      description: 'Programa completo de modelagem',
      icon: Target,
      difficulty: 'Avançado',
      category: 'emagrecimento'
    }
  ],
  coluna: [
    {
      id: 'cervical',
      title: 'Alívio Cervical',
      duration: '10min',
      description: 'Alívio de tensões na região cervical',
      icon: Target,
      difficulty: 'Iniciante',
      category: 'coluna'
    },
    {
      id: 'lombar',
      title: 'Alívio Lombar',
      duration: '15min',
      description: 'Redução da dor lombar e melhora da mobilidade',
      icon: Shield,
      difficulty: 'Iniciante',
      category: 'coluna'
    },
    {
      id: 'postura',
      title: 'Correção Postural',
      duration: '25min',
      description: 'Fortalecimento e alinhamento da coluna',
      icon: Activity,
      difficulty: 'Intermediário',
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
      id: 'rigidez',
      title: 'Rigidez Articular',
      duration: '20min',
      description: 'Aumenta amplitude de movimento e flexibilidade',
      icon: Zap,
      difficulty: 'Iniciante',
      category: 'articulacoes'
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
      id: 'pre-treino',
      title: 'Preparação Pré-Treino',
      duration: '10min',
      description: 'Ativa músculos e prepara para exercícios',
      icon: Zap,
      difficulty: 'Iniciante',
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
    }
  ],
  'bem-estar': [
    {
      id: 'energia-dia',
      title: 'Energia no Dia',
      duration: '8min',
      description: 'Sessão rápida para aumentar disposição',
      icon: Coffee,
      difficulty: 'Iniciante',
      category: 'bem-estar'
    },
    {
      id: 'foco-mental',
      title: 'Foco Mental',
      duration: '12min',
      description: 'Melhora concentração e clareza mental',
      icon: Brain,
      difficulty: 'Iniciante',
      category: 'bem-estar'
    },
    {
      id: 'equilibrio',
      title: 'Equilíbrio Emocional',
      duration: '15min',
      description: 'Harmoniza emoções e promove tranquilidade',
      icon: Heart,
      difficulty: 'Intermediário',
      category: 'bem-estar'
    }
  ]
};