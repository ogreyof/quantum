export const quizOptions = {
  objetivos: [
    { id: 'cervical', label: 'Dor cervical', icon: '🦴', description: 'Alívio de tensões no pescoço' },
    { id: 'lombar', label: 'Dor lombar', icon: '🔄', description: 'Redução de dores nas costas' },
    { id: 'drenagem', label: 'Drenagem/Pernas', icon: '💧', description: 'Circulação e inchaço' },
    { id: 'sono', label: 'Sono/Estresse', icon: '😴', description: 'Relaxamento e qualidade do sono' },
    { id: 'estetica', label: 'Estética facial', icon: '✨', description: 'Rejuvenescimento e tonificação' },
    { id: 'cabelos', label: 'Cabelos', icon: '💇', description: 'Fortalecimento capilar' },
    { id: 'performance', label: 'Performance pós-treino', icon: '💪', description: 'Recuperação muscular' },
    { id: 'bem-estar', label: 'Bem-estar geral', icon: '🧘', description: 'Equilíbrio e energia' }
  ],

  regioes: [
    { id: 'cervical', label: 'Cervical', icon: '🦴' },
    { id: 'ombros', label: 'Ombros', icon: '💪' },
    { id: 'lombar', label: 'Lombar', icon: '🔄' },
    { id: 'pernas', label: 'Pernas/Pés', icon: '🦵' },
    { id: 'abdomen', label: 'Abdômen', icon: '⚡' },
    { id: 'bracos', label: 'Braços', icon: '💪' },
    { id: 'rosto', label: 'Rosto/Couro cabeludo', icon: '✨' }
  ],

  condicoes: [
    { id: 'hernia', label: 'Hérnia de disco', severity: 'alta' },
    { id: 'bico-papagaio', label: 'Bico de papagaio', severity: 'media' },
    { id: 'lombalgia', label: 'Lombalgia', severity: 'media' },
    { id: 'escoliose', label: 'Escoliose', severity: 'media' },
    { id: 'artrite', label: 'Artrite', severity: 'media' },
    { id: 'artrose', label: 'Artrose', severity: 'media' },
    { id: 'varizes', label: 'Varizes/má circulação', severity: 'baixa' },
    { id: 'retencao', label: 'Retenção de líquidos', severity: 'baixa' },
    { id: 'ansiedade', label: 'Ansiedade/insônia', severity: 'baixa' },
    { id: 'papada', label: 'Papada', severity: 'baixa' },
    { id: 'bigode-chines', label: 'Bigode chinês', severity: 'baixa' },
    { id: 'olheiras', label: 'Olheiras', severity: 'baixa' },
    { id: 'queda-cabelo', label: 'Queda de cabelo', severity: 'baixa' }
  ],

  aparelhos: [
    { 
      id: 'assento_3d', 
      label: 'Assento Shiatsu 3D', 
      icon: '🪑',
      description: 'Massagem completa para coluna e glúteos',
      categories: ['coluna', 'articulacoes', 'bem-estar']
    },
    { 
      id: 'relax_shoulder', 
      label: 'Relax Shoulder', 
      icon: '💆',
      description: 'Específico para ombros e cervical',
      categories: ['coluna', 'sono', 'bem-estar']
    },
    { 
      id: 'plataforma', 
      label: 'Plataforma de Massagem', 
      icon: '📱',
      description: 'Massagem corporal completa',
      categories: ['drenagem', 'performance', 'bem-estar']
    },
    { 
      id: 'pillow_shizen', 
      label: 'Pillow Shizen', 
      icon: '🛏️',
      description: 'Relaxamento e sono reparador',
      categories: ['sono', 'coluna', 'bem-estar']
    },
    { 
      id: 'confort_3d', 
      label: 'Confort 3D', 
      icon: '🔄',
      description: 'Massagem 3D para pernas e glúteos',
      categories: ['drenagem', 'emagrecimento', 'performance']
    },
    { 
      id: 'shiatsu_roller', 
      label: 'Shiatsu Roller', 
      icon: '🎯',
      description: 'Massagem shiatsu localizada',
      categories: ['coluna', 'articulacoes', 'performance']
    },
    { 
      id: 'roller_shoulder', 
      label: 'Therapic Roller Shoulder', 
      icon: '🎪',
      description: 'Terapia específica para ombros',
      categories: ['coluna', 'articulacoes', 'performance']
    },
    { 
      id: 'relaxation_plus', 
      label: 'Relaxation Plus - manual', 
      icon: '✋',
      description: 'Massagem manual relaxante',
      categories: ['sono', 'bem-estar', 'estetica']
    },
    { 
      id: 'relax_confort_bivolt', 
      label: 'Relax Confort - Bivolt - manual', 
      icon: '⚡',
      description: 'Massagem manual com dupla voltagem',
      categories: ['sono', 'bem-estar', 'estetica']
    },
    { 
      id: 'relax_pro_pes', 
      label: 'Relax Pro (pés)', 
      icon: '🦶',
      description: 'Massagem específica para pés',
      categories: ['drenagem', 'bem-estar', 'performance']
    },
    { 
      id: 'cinta_abdominal', 
      label: 'Cinta Abdominal', 
      icon: '🎯',
      description: 'Tonificação e fortalecimento abdominal',
      categories: ['emagrecimento', 'performance', 'bem-estar']
    },
    { 
      id: 'outro', 
      label: 'Outro', 
      icon: '❓',
      description: 'Outros equipamentos',
      categories: ['bem-estar']
    }
  ],

  tempoDisponivel: [
    { id: '8min', label: '8 minutos', value: '8min', description: 'Sessões rápidas' },
    { id: '12min', label: '12 minutos', value: '12min', description: 'Duração padrão' },
    { id: '15min', label: '15 minutos', value: '15min', description: 'Sessões completas' },
    { id: '20min', label: '20 minutos', value: '20min', description: 'Sessões intensivas' }
  ],

  preferenciaSom: [
    { id: 'spa', label: 'Spa', icon: '🧘', description: 'Sons relaxantes de spa' },
    { id: 'agua', label: 'Água', icon: '🌊', description: 'Som de água corrente' },
    { id: 'chuva', label: 'Chuva', icon: '🌧️', description: 'Som de chuva suave' },
    { id: 'floresta', label: 'Floresta', icon: '🌲', description: 'Sons da natureza' },
    { id: 'binaural-sono', label: 'Binaural sono', icon: '😴', description: 'Frequências para sono' },
    { id: 'binaural-foco', label: 'Binaural foco', icon: '🎯', description: 'Frequências para concentração' },
    { id: 'respiracao-478', label: 'Respiração 4-7-8', icon: '🫁', description: 'Técnica de respiração' },
    { id: 'respiracao-box', label: 'Respiração box', icon: '📦', description: 'Respiração quadrada' }
  ],

  horarios: [
    { id: 'manha', label: 'Manhã (6h-12h)', value: 'manha', icon: '🌅' },
    { id: 'tarde', label: 'Tarde (12h-18h)', value: 'tarde', icon: '☀️' },
    { id: 'noite', label: 'Noite (18h-22h)', value: 'noite', icon: '🌙' }
  ]
};

export const contraindicacoesText = `
Declaro estar ciente de que NÃO devo usar os massageadores Quantum nas seguintes situações:

🚫 CONTRAINDICAÇÕES PARA DRENAGEM:
• Trombose ativa ou TEV (tromboembolismo venoso)
• Infecção ativa ou febre
• Insuficiência cardíaca descompensada
• Câncer ativo sem liberação médica
• Pós-operatório recente sem alta médica
• Gestação de risco

⚠️ CUIDADOS GERAIS:
• Parar imediatamente se sentir dor intensa
• Evitar uso em áreas inflamadas ou lesionadas
• Não usar em caso de feridas abertas
• Consultar médico em caso de dúvidas
`;

export const lgpdText = `
📋 CONSENTIMENTO LGPD

Autorizo o uso dos meus dados pessoais para:
• Personalização da experiência no app
• Envio de notificações e lembretes
• Análise de uso para melhorias do serviço
• Comunicação sobre novidades e atualizações

Seus dados são protegidos conforme nossa Política de Privacidade e você pode revogar este consentimento a qualquer momento nas configurações do app.
`;