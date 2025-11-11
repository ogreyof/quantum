export interface Device {
  id: string;
  name: string;
  description: string;
  icon: string;
  categories: string[];
  instructions: {
    position: string;
    intensity: string;
    duration: string;
    tips: string[];
  };
  compatiblePrograms: string[];
}

export const devices: Device[] = [
  {
    id: 'assento_3d',
    name: 'Assento Shiatsu 3D',
    description: 'Massagem completa para coluna e glúteos',
    icon: '🪑',
    categories: ['coluna', 'articulacoes', 'bem-estar'],
    instructions: {
      position: 'Sente-se confortavelmente com as costas apoiadas',
      intensity: 'Inicie no nível 3-4 e ajuste conforme conforto',
      duration: 'Sessões de 10-20 minutos',
      tips: [
        'Mantenha postura ereta',
        'Respire profundamente',
        'Evite usar após refeições pesadas'
      ]
    },
    compatiblePrograms: ['coluna', 'articulacoes', 'bem-estar']
  },
  {
    id: 'relax_shoulder',
    name: 'Relax Shoulder',
    description: 'Específico para ombros e cervical',
    icon: '💆',
    categories: ['coluna', 'sono', 'bem-estar'],
    instructions: {
      position: 'Posicione na região dos ombros e cervical',
      intensity: 'Use intensidade baixa a moderada',
      duration: 'Sessões de 8-15 minutos',
      tips: [
        'Relaxe os ombros',
        'Evite tensionar o pescoço',
        'Use antes de dormir para melhor relaxamento'
      ]
    },
    compatiblePrograms: ['coluna', 'sono', 'bem-estar']
  },
  {
    id: 'plataforma',
    name: 'Plataforma de Massagem',
    description: 'Massagem corporal completa',
    icon: '📱',
    categories: ['drenagem', 'performance', 'bem-estar'],
    instructions: {
      position: 'Deite-se confortavelmente sobre a plataforma',
      intensity: 'Ajuste conforme a região trabalhada',
      duration: 'Sessões de 15-30 minutos',
      tips: [
        'Use roupas confortáveis',
        'Hidrate-se após a sessão',
        'Ideal para corpo inteiro'
      ]
    },
    compatiblePrograms: ['drenagem', 'performance', 'bem-estar']
  },
  {
    id: 'pillow_shizen',
    name: 'Pillow Shizen',
    description: 'Relaxamento e sono reparador',
    icon: '🛏️',
    categories: ['sono', 'coluna', 'bem-estar'],
    instructions: {
      position: 'Use como travesseiro ou apoio cervical',
      intensity: 'Intensidade suave para relaxamento',
      duration: 'Pode ser usado durante o sono',
      tips: [
        'Ideal para uso noturno',
        'Ajuda na postura do pescoço',
        'Promove relaxamento profundo'
      ]
    },
    compatiblePrograms: ['sono', 'coluna', 'bem-estar']
  },
  {
    id: 'confort_3d',
    name: 'Confort 3D',
    description: 'Massagem 3D para pernas e glúteos',
    icon: '🔄',
    categories: ['drenagem', 'emagrecimento', 'performance'],
    instructions: {
      position: 'Posicione nas pernas ou região glútea',
      intensity: 'Intensidade moderada a alta',
      duration: 'Sessões de 12-20 minutos',
      tips: [
        'Ideal para drenagem',
        'Melhora circulação',
        'Use após exercícios'
      ]
    },
    compatiblePrograms: ['drenagem', 'emagrecimento', 'performance']
  },
  {
    id: 'shiatsu_roller',
    name: 'Shiatsu Roller',
    description: 'Massagem shiatsu localizada',
    icon: '🎯',
    categories: ['coluna', 'articulacoes', 'performance'],
    instructions: {
      position: 'Aplique na região desejada com movimentos suaves',
      intensity: 'Pressão controlada pelo usuário',
      duration: 'Sessões de 8-15 minutos',
      tips: [
        'Movimentos lentos e controlados',
        'Foque em pontos de tensão',
        'Não aplique pressão excessiva'
      ]
    },
    compatiblePrograms: ['coluna', 'articulacoes', 'performance']
  },
  {
    id: 'roller_shoulder',
    name: 'Therapic Roller Shoulder',
    description: 'Terapia específica para ombros',
    icon: '🎪',
    categories: ['coluna', 'articulacoes', 'performance'],
    instructions: {
      position: 'Posicione nos ombros e trapézio',
      intensity: 'Intensidade moderada',
      duration: 'Sessões de 10-15 minutos',
      tips: [
        'Ideal para tensão nos ombros',
        'Use após trabalho no computador',
        'Combine com alongamentos'
      ]
    },
    compatiblePrograms: ['coluna', 'articulacoes', 'performance']
  },
  {
    id: 'relaxation_plus',
    name: 'Relaxation Plus - manual',
    description: 'Massagem manual relaxante',
    icon: '✋',
    categories: ['sono', 'bem-estar', 'estetica'],
    instructions: {
      position: 'Use com movimentos manuais suaves',
      intensity: 'Pressão controlada manualmente',
      duration: 'Conforme necessidade',
      tips: [
        'Movimentos circulares',
        'Ideal para rosto e pescoço',
        'Use óleos ou cremes'
      ]
    },
    compatiblePrograms: ['sono', 'bem-estar', 'estetica']
  },
  {
    id: 'relax_confort_bivolt',
    name: 'Relax Confort - Bivolt - manual',
    description: 'Massagem manual com dupla voltagem',
    icon: '⚡',
    categories: ['sono', 'bem-estar', 'estetica'],
    instructions: {
      position: 'Aplicação manual em qualquer região',
      intensity: 'Ajustável por voltagem',
      duration: 'Flexível conforme uso',
      tips: [
        'Verifique voltagem antes do uso',
        'Ideal para uso doméstico',
        'Versátil para várias regiões'
      ]
    },
    compatiblePrograms: ['sono', 'bem-estar', 'estetica']
  },
  {
    id: 'relax_pro_pes',
    name: 'Relax Pro (pés)',
    description: 'Massagem específica para pés',
    icon: '🦶',
    categories: ['drenagem', 'bem-estar', 'performance'],
    instructions: {
      position: 'Posicione os pés no massageador',
      intensity: 'Intensidade baixa a moderada',
      duration: 'Sessões de 10-20 minutos',
      tips: [
        'Ideal após longas caminhadas',
        'Melhora circulação nos pés',
        'Use sentado confortavelmente'
      ]
    },
    compatiblePrograms: ['drenagem', 'bem-estar', 'performance']
  },
  {
    id: 'cinta_abdominal',
    name: 'Cinta Abdominal',
    description: 'Tonificação e fortalecimento abdominal',
    icon: '🎯',
    categories: ['emagrecimento', 'performance', 'bem-estar'],
    instructions: {
      position: 'Posicione na região abdominal',
      intensity: 'Intensidade progressiva',
      duration: 'Sessões de 15-25 minutos',
      tips: [
        'Use sobre pele limpa',
        'Não use durante digestão',
        'Combine com exercícios'
      ]
    },
    compatiblePrograms: ['emagrecimento', 'performance', 'bem-estar']
  }
];

export const getDeviceById = (id: string): Device | undefined => {
  return devices.find(device => device.id === id);
};

export const getDevicesByCategory = (category: string): Device[] => {
  return devices.filter(device => device.categories.includes(category));
};

export const getCompatiblePrograms = (deviceIds: string[]): string[] => {
  const allPrograms = new Set<string>();
  deviceIds.forEach(deviceId => {
    const device = getDeviceById(deviceId);
    if (device) {
      device.compatiblePrograms.forEach(program => allPrograms.add(program));
    }
  });
  return Array.from(allPrograms);
};