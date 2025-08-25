export interface Sound {
  id: string;
  title: string;
  category: 'spa' | 'natureza' | 'binaural' | 'respiracao' | 'foco';
  description: string;
  duration: number | null; // null = loop infinito
  thumbnail: string;
  isPlaying: boolean;
  benefits: string[];
  instructions?: string[];
}

export const completeSounds: Sound[] = [
  {
    id: 'spa-relaxante',
    title: 'Spa Relaxante',
    category: 'spa',
    description: 'Sons suaves de spa com música ambiente para relaxamento profundo',
    duration: null,
    thumbnail: '/sounds/spa-relaxante.jpg',
    isPlaying: false,
    benefits: [
      'Reduz estresse e ansiedade',
      'Promove relaxamento profundo',
      'Melhora qualidade do sono',
      'Diminui tensão muscular'
    ],
    instructions: [
      'Use fones de ouvido para melhor experiência',
      'Ajuste o volume para um nível confortável',
      'Respire profundamente e relaxe',
      'Ideal para meditação ou massagem'
    ]
  },
  {
    id: 'agua-corrente',
    title: 'Água Corrente',
    category: 'natureza',
    description: 'Som relaxante de riacho corrente e água fluindo naturalmente',
    duration: null,
    thumbnail: '/sounds/agua-corrente.jpg',
    isPlaying: false,
    benefits: [
      'Acalma a mente',
      'Reduz ansiedade',
      'Melhora concentração',
      'Promove tranquilidade'
    ],
    instructions: [
      'Feche os olhos e imagine-se na natureza',
      'Deixe o som fluir naturalmente',
      'Use para estudar ou trabalhar',
      'Perfeito para mascarar ruídos externos'
    ]
  },
  {
    id: 'chuva-suave',
    title: 'Chuva Suave',
    category: 'natureza',
    description: 'Som de chuva leve e constante para relaxamento e sono',
    duration: null,
    thumbnail: '/sounds/chuva-suave.jpg',
    isPlaying: false,
    benefits: [
      'Induz sono profundo',
      'Reduz ruídos externos',
      'Promove paz interior',
      'Alivia estresse'
    ],
    instructions: [
      'Ideal para usar antes de dormir',
      'Mantenha volume baixo e constante',
      'Combine com ambiente escuro',
      'Deixe tocar durante toda a noite'
    ]
  },
  {
    id: 'floresta-tropical',
    title: 'Floresta Tropical',
    category: 'natureza',
    description: 'Sons da natureza com pássaros, folhas e vida selvagem',
    duration: null,
    thumbnail: '/sounds/floresta-tropical.jpg',
    isPlaying: false,
    benefits: [
      'Conecta com a natureza',
      'Reduz estresse urbano',
      'Melhora humor',
      'Aumenta criatividade'
    ],
    instructions: [
      'Imagine-se em uma floresta exuberante',
      'Use durante trabalho criativo',
      'Perfeito para meditação matinal',
      'Combine com exercícios de respiração'
    ]
  },
  {
    id: 'ruido-branco',
    title: 'Ruído Branco',
    category: 'foco',
    description: 'Som constante e uniforme para concentração e foco',
    duration: null,
    thumbnail: '/sounds/ruido-branco.jpg',
    isPlaying: false,
    benefits: [
      'Melhora concentração',
      'Bloqueia distrações',
      'Ajuda no foco',
      'Ideal para estudos'
    ],
    instructions: [
      'Use durante estudos ou trabalho',
      'Mantenha volume moderado',
      'Ideal para ambientes barulhentos',
      'Ajuda a manter foco por longos períodos'
    ]
  },
  {
    id: 'binaural-sono-delta',
    title: 'Binaural Sono Delta',
    category: 'binaural',
    description: 'Frequências binaurais para induzir sono profundo e reparador',
    duration: 30,
    thumbnail: '/sounds/binaural-sono.jpg',
    isPlaying: false,
    benefits: [
      'Induz ondas delta no cérebro',
      'Melhora qualidade do sono',
      'Promove regeneração celular',
      'Reduz insônia'
    ],
    instructions: [
      'OBRIGATÓRIO: Use fones de ouvido',
      'Deite-se confortavelmente',
      'Feche os olhos e relaxe',
      'Não use enquanto dirige ou opera máquinas'
    ]
  },
  {
    id: 'binaural-foco-alpha',
    title: 'Binaural Foco Alpha',
    category: 'binaural',
    description: 'Frequências para aumentar concentração e estado de alerta relaxado',
    duration: 25,
    thumbnail: '/sounds/binaural-foco.jpg',
    isPlaying: false,
    benefits: [
      'Aumenta concentração',
      'Melhora produtividade',
      'Reduz distrações',
      'Promove estado de flow'
    ],
    instructions: [
      'OBRIGATÓRIO: Use fones de ouvido',
      'Sente-se confortavelmente',
      'Mantenha postura ereta',
      'Use durante atividades que exigem foco'
    ]
  },
  {
    id: 'respiracao-4-7-8',
    title: 'Respiração 4-7-8',
    category: 'respiracao',
    description: 'Técnica de respiração guiada para relaxamento profundo',
    duration: 15,
    thumbnail: '/sounds/respiracao-478.jpg',
    isPlaying: false,
    benefits: [
      'Reduz ansiedade rapidamente',
      'Controla estresse',
      'Melhora oxigenação',
      'Promove calma instantânea'
    ],
    instructions: [
      'Inspire pelo nariz por 4 segundos',
      'Segure a respiração por 7 segundos',
      'Expire pela boca por 8 segundos',
      'Repita o ciclo conforme orientação'
    ]
  },
  {
    id: 'respiracao-box',
    title: 'Respiração Box',
    category: 'respiracao',
    description: 'Técnica de respiração quadrada para equilíbrio e controle',
    duration: 20,
    thumbnail: '/sounds/respiracao-box.jpg',
    isPlaying: false,
    benefits: [
      'Equilibra sistema nervoso',
      'Melhora foco mental',
      'Reduz pressão arterial',
      'Aumenta autocontrole'
    ],
    instructions: [
      'Inspire por 4 segundos',
      'Segure por 4 segundos',
      'Expire por 4 segundos',
      'Segure vazio por 4 segundos'
    ]
  },
  {
    id: 'foco-produtividade',
    title: 'Foco & Produtividade',
    category: 'foco',
    description: 'Música instrumental para manter concentração durante trabalho',
    duration: null,
    thumbnail: '/sounds/foco-produtividade.jpg',
    isPlaying: false,
    benefits: [
      'Mantém concentração',
      'Aumenta produtividade',
      'Reduz fadiga mental',
      'Melhora performance'
    ],
    instructions: [
      'Use durante trabalho ou estudos',
      'Mantenha volume baixo',
      'Ideal para tarefas que exigem concentração',
      'Evite músicas com letra'
    ]
  }
];

export const soundCategories = [
  { 
    id: 'spa', 
    name: 'Spa & Relaxamento', 
    icon: '🧘', 
    color: 'text-purple-600',
    description: 'Sons relaxantes para spa e meditação'
  },
  { 
    id: 'natureza', 
    name: 'Natureza', 
    icon: '🌿', 
    color: 'text-green-500',
    description: 'Sons naturais para conexão e tranquilidade'
  },
  { 
    id: 'binaural', 
    name: 'Binaural', 
    icon: '🎧', 
    color: 'text-blue-500',
    description: 'Frequências específicas para estados mentais'
  },
  { 
    id: 'respiracao', 
    name: 'Respiração', 
    icon: '🫁', 
    color: 'text-cyan-400',
    description: 'Técnicas guiadas de respiração'
  },
  { 
    id: 'foco', 
    name: 'Foco', 
    icon: '🎯', 
    color: 'text-orange-500',
    description: 'Sons para concentração e produtividade'
  }
];