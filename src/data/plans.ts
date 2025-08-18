import { Target, Shield, Moon, Sparkles, Heart, Dumbbell, Coffee } from "lucide-react";

export interface GuidedPlan {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: any;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: string;
  dailyPrograms: string[];
  benefits: string[];
}

export const guidedPlans: GuidedPlan[] = [
  {
    id: 'plano-7-iniciante',
    title: 'Plano 7 Dias - Introdução',
    duration: '7 dias',
    description: 'Introdução completa ao uso dos massageadores Quantum',
    icon: Target,
    difficulty: 'Iniciante',
    category: 'introducao',
    dailyPrograms: [
      'Dia 1: Relaxamento Profundo (8min)',
      'Dia 2: Cervical Básico (10min)',
      'Dia 3: Drenagem de Pernas (15min)',
      'Dia 4: Energia no Dia (5min)',
      'Dia 5: Alongamento Relaxante (10min)',
      'Dia 6: Estética Facial Básica (8min)',
      'Dia 7: Sessão Completa (20min)'
    ],
    benefits: [
      'Familiarização com os aparelhos',
      'Redução do estresse inicial',
      'Melhora na qualidade do sono',
      'Aumento da disposição diária'
    ]
  },
  {
    id: 'plano-15-coluna',
    title: 'Plano 15 Dias - Saúde da Coluna',
    duration: '15 dias',
    description: 'Programa intensivo para alívio e fortalecimento da coluna',
    icon: Shield,
    difficulty: 'Intermediário',
    category: 'coluna',
    dailyPrograms: [
      'Dia 1-3: Lombalgia (15min)',
      'Dia 4-6: Cervical Avançado (12min)',
      'Dia 7-9: Correção Postural (25min)',
      'Dia 10-12: Bico de Papagaio (18min)',
      'Dia 13-15: Programa Completo (30min)'
    ],
    benefits: [
      'Redução significativa da dor',
      'Melhora da postura corporal',
      'Fortalecimento muscular',
      'Maior flexibilidade da coluna'
    ]
  },
  {
    id: 'plano-15-estetica',
    title: 'Plano 15 Dias - Rejuvenescimento',
    duration: '15 dias',
    description: 'Transformação facial completa com resultados visíveis',
    icon: Sparkles,
    difficulty: 'Intermediário',
    category: 'estetica',
    dailyPrograms: [
      'Dia 1-3: Papada (12min)',
      'Dia 4-6: Olheiras (6min)',
      'Dia 7-9: Bigode Chinês (8min)',
      'Dia 10-12: Linhas de Expressão (10min)',
      'Dia 13-15: Rejuvenescimento Completo (20min)'
    ],
    benefits: [
      'Redução visível da papada',
      'Diminuição das olheiras',
      'Suavização de rugas',
      'Pele mais firme e jovem'
    ]
  },
  {
    id: 'plano-30-transformacao',
    title: 'Plano 30 Dias - Transformação Total',
    duration: '30 dias',
    description: 'Programa completo de transformação física e mental',
    icon: Heart,
    difficulty: 'Avançado',
    category: 'completo',
    dailyPrograms: [
      'Semana 1: Adaptação e Relaxamento',
      'Semana 2: Fortalecimento e Postura',
      'Semana 3: Estética e Bem-estar',
      'Semana 4: Performance e Resultados'
    ],
    benefits: [
      'Transformação corporal completa',
      'Melhora significativa do bem-estar',
      'Resultados estéticos visíveis',
      'Aumento da energia e disposição',
      'Redução do estresse e ansiedade'
    ]
  },
  {
    id: 'plano-15-performance',
    title: 'Plano 15 Dias - Performance Atlética',
    duration: '15 dias',
    description: 'Programa para atletas e praticantes de exercícios',
    icon: Dumbbell,
    difficulty: 'Avançado',
    category: 'performance',
    dailyPrograms: [
      'Dia 1-3: Energia Pré-Treino (10min)',
      'Dia 4-6: Recuperação Pós-Treino (18min)',
      'Dia 7-9: Prevenção de Lesões (15min)',
      'Dia 10-12: Flexibilidade Avançada (25min)',
      'Dia 13-15: Programa Atlético Completo (35min)'
    ],
    benefits: [
      'Melhora da performance atlética',
      'Recuperação mais rápida',
      'Prevenção de lesões',
      'Aumento da flexibilidade'
    ]
  },
  {
    id: 'plano-7-bem-estar',
    title: 'Plano 7 Dias - Bem-Estar Mental',
    duration: '7 dias',
    description: 'Foco em saúde mental e equilíbrio emocional',
    icon: Coffee,
    difficulty: 'Iniciante',
    category: 'bem-estar',
    dailyPrograms: [
      'Dia 1: Combate ao Estresse (12min)',
      'Dia 2: Foco Mental (8min)',
      'Dia 3: Energia no Dia (5min)',
      'Dia 4: Relaxamento Profundo (8min)',
      'Dia 5: Disposição Matinal (6min)',
      'Dia 6: Equilíbrio Emocional (15min)',
      'Dia 7: Bem-estar Completo (20min)'
    ],
    benefits: [
      'Redução do estresse',
      'Melhora do foco e concentração',
      'Aumento da energia diária',
      'Equilíbrio emocional'
    ]
  }
];