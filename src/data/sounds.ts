export interface Sound {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  icon: string;
  audioUrl: string; // Em produção, seria URLs reais
  benefits: string[];
}

export const soundLibrary: Sound[] = [
  {
    id: 'spa-relaxante',
    title: 'Spa Relaxante',
    category: 'spa',
    duration: '30min',
    description: 'Sons suaves de spa para relaxamento profundo',
    icon: '🧘',
    audioUrl: '/sounds/spa-relaxante.mp3',
    benefits: ['Reduz estresse', 'Promove relaxamento', 'Melhora concentração']
  },
  {
    id: 'agua-corrente',
    title: 'Água Corrente',
    category: 'agua',
    duration: '45min',
    description: 'Som de riacho corrente para tranquilidade',
    icon: '🌊',
    audioUrl: '/sounds/agua-corrente.mp3',
    benefits: ['Acalma a mente', 'Reduz ansiedade', 'Melhora o sono']
  },
  {
    id: 'chuva-suave',
    title: 'Chuva Suave',
    category: 'chuva',
    duration: '60min',
    description: 'Som de chuva leve para relaxamento',
    icon: '🌧️',
    audioUrl: '/sounds/chuva-suave.mp3',
    benefits: ['Induz sono profundo', 'Reduz ruídos externos', 'Promove paz interior']
  },
  {
    id: 'floresta-tropical',
    title: 'Floresta Tropical',
    category: 'floresta',
    duration: '40min',
    description: 'Sons da natureza com pássaros e folhas',
    icon: '🌲',
    audioUrl: '/sounds/floresta-tropical.mp3',
    benefits: ['Conecta com a natureza', 'Reduz estresse urbano', 'Melhora humor']
  },
  {
    id: 'binaural-sono-delta',
    title: 'Binaural Sono Delta',
    category: 'binaural-sono',
    duration: '30min',
    description: 'Frequências binaurais para induzir sono profundo',
    icon: '😴',
    audioUrl: '/sounds/binaural-sono-delta.mp3',
    benefits: ['Induz ondas delta', 'Melhora qualidade do sono', 'Regeneração celular']
  },
  {
    id: 'binaural-foco-alpha',
    title: 'Binaural Foco Alpha',
    category: 'binaural-foco',
    duration: '25min',
    description: 'Frequências para aumentar concentração e foco',
    icon: '🎯',
    audioUrl: '/sounds/binaural-foco-alpha.mp3',
    benefits: ['Aumenta concentração', 'Melhora produtividade', 'Reduz distrações']
  },
  {
    id: 'respiracao-4-7-8',
    title: 'Respiração 4-7-8',
    category: 'respiracao-478',
    duration: '15min',
    description: 'Guia de respiração para relaxamento profundo',
    icon: '🫁',
    audioUrl: '/sounds/respiracao-4-7-8.mp3',
    benefits: ['Reduz ansiedade', 'Controla estresse', 'Melhora oxigenação']
  },
  {
    id: 'respiracao-box',
    title: 'Respiração Box',
    category: 'respiracao-box',
    duration: '20min',
    description: 'Técnica de respiração quadrada para equilíbrio',
    icon: '📦',
    audioUrl: '/sounds/respiracao-box.mp3',
    benefits: ['Equilibra sistema nervoso', 'Melhora foco', 'Reduz pressão arterial']
  }
];

export const soundCategories = [
  { id: 'spa', name: 'Spa', icon: '🧘', color: 'text-purple-600' },
  { id: 'agua', name: 'Água', icon: '🌊', color: 'text-blue-500' },
  { id: 'chuva', name: 'Chuva', icon: '🌧️', color: 'text-cyan-400' },
  { id: 'floresta', name: 'Floresta', icon: '🌲', color: 'text-green-500' },
  { id: 'binaural-sono', name: 'Binaural Sono', icon: '😴', color: 'text-purple-600' },
  { id: 'binaural-foco', name: 'Binaural Foco', icon: '🎯', color: 'text-blue-500' },
  { id: 'respiracao-478', name: 'Respiração 4-7-8', icon: '🫁', color: 'text-cyan-400' },
  { id: 'respiracao-box', name: 'Respiração Box', icon: '📦', color: 'text-green-500' }
];