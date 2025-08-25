import { 
  Droplets, Moon, Sparkles, Scissors, TrendingUp, Shield, Activity,
  Target, Heart, Brain, Clock, Zap, Star, Award, Coffee, Wind
} from "lucide-react";

export interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  benefits: string[];
  instructions: string[];
  safetyNote?: string;
  equipment?: string[];
  rating: number;
  completions: number;
}

export interface ProgramCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  exercises: Exercise[];
  totalExercises: number;
  averageDuration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
}

export const completePrograms: ProgramCategory[] = [
  {
    id: 'drenagem',
    title: 'Drenagem & Circulação',
    subtitle: 'Pernas, linfática, varizes',
    icon: Droplets,
    color: 'text-blue-500',
    totalExercises: 5,
    averageDuration: '11min',
    difficulty: 'Iniciante',
    exercises: [
      {
        id: 'drenagem-linfatica-pernas',
        title: 'Drenagem Linfática Pernas',
        description: 'Massagem específica para reduzir inchaço e melhorar circulação nas pernas',
        duration: '15min',
        level: 'Iniciante',
        benefits: [
          'Reduz inchaço nas pernas',
          'Melhora circulação sanguínea',
          'Alivia sensação de peso',
          'Previne varizes',
          'Estimula sistema linfático'
        ],
        instructions: [
          'Posicione o massageador na região das panturrilhas',
          'Ajuste a intensidade para nível 3-5 (confortável)',
          'Mantenha as pernas elevadas durante a sessão',
          'Respire profundamente e relaxe',
          'Hidrate-se após a sessão'
        ],
        safetyNote: 'Contraindicado em casos de trombose ativa ou infecções.',
        equipment: ['Massageador de pernas', 'Almofada para elevação'],
        rating: 4.8,
        completions: 1250
      },
      {
        id: 'drenagem-abdominal',
        title: 'Drenagem Abdominal',
        description: 'Estimula digestão e reduz inchaço abdominal',
        duration: '12min',
        level: 'Iniciante',
        benefits: [
          'Melhora digestão',
          'Reduz inchaço abdominal',
          'Estimula intestino',
          'Alivia gases',
          'Tonifica músculos abdominais'
        ],
        instructions: [
          'Posicione o massageador na região abdominal',
          'Use movimentos circulares suaves',
          'Evite pressão excessiva',
          'Mantenha respiração regular',
          'Realize 2h após refeições'
        ],
        safetyNote: 'Não usar durante gravidez ou problemas digestivos graves.',
        equipment: ['Massageador abdominal'],
        rating: 4.6,
        completions: 890
      },
      {
        id: 'drenagem-bracos-maos',
        title: 'Drenagem Braços & Mãos',
        description: 'Alivia tensão e melhora circulação nos membros superiores',
        duration: '10min',
        level: 'Iniciante',
        benefits: [
          'Reduz inchaço nos braços',
          'Alivia tensão muscular',
          'Melhora mobilidade',
          'Estimula circulação',
          'Relaxa punhos e mãos'
        ],
        instructions: [
          'Inicie pelos ombros e desça até as mãos',
          'Use pressão suave e constante',
          'Faça movimentos ascendentes',
          'Dedique atenção especial aos punhos',
          'Finalize com alongamento suave'
        ],
        equipment: ['Massageador portátil'],
        rating: 4.5,
        completions: 650
      },
      {
        id: 'drenagem-facial',
        title: 'Drenagem Facial',
        description: 'Reduz inchaço facial e melhora contorno do rosto',
        duration: '8min',
        level: 'Iniciante',
        benefits: [
          'Reduz inchaço facial',
          'Melhora contorno do rosto',
          'Estimula circulação facial',
          'Diminui olheiras',
          'Promove relaxamento'
        ],
        instructions: [
          'Limpe bem o rosto antes de iniciar',
          'Use intensidade muito suave',
          'Evite área dos olhos diretamente',
          'Faça movimentos ascendentes',
          'Finalize com hidratante'
        ],
        safetyNote: 'Evite uso em pele irritada ou com feridas.',
        equipment: ['Massageador facial'],
        rating: 4.7,
        completions: 980
      },
      {
        id: 'circulacao-pes-tornozelos',
        title: 'Circulação Pés & Tornozelos',
        description: 'Estimula circulação e alivia cansaço nos pés',
        duration: '10min',
        level: 'Iniciante',
        benefits: [
          'Melhora circulação nos pés',
          'Alivia cansaço',
          'Reduz inchaço',
          'Relaxa músculos',
          'Estimula pontos reflexos'
        ],
        instructions: [
          'Posicione os pés no massageador',
          'Ajuste intensidade gradualmente',
          'Relaxe completamente',
          'Concentre-se na respiração',
          'Hidrate os pés após a sessão'
        ],
        equipment: ['Massageador de pés'],
        rating: 4.9,
        completions: 1100
      }
    ]
  },
  {
    id: 'sono',
    title: 'Sono & Relaxamento',
    subtitle: 'Ansiedade, estresse, descanso',
    icon: Moon,
    color: 'text-purple-600',
    totalExercises: 5,
    averageDuration: '10min',
    difficulty: 'Iniciante',
    exercises: [
      {
        id: 'relaxamento-profundo-dormir',
        title: 'Relaxamento Profundo Antes de Dormir',
        description: 'Prepara corpo e mente para uma noite tranquila de sono',
        duration: '12min',
        level: 'Iniciante',
        benefits: [
          'Melhora qualidade do sono',
          'Reduz ansiedade noturna',
          'Relaxa músculos tensos',
          'Acalma a mente',
          'Promove sono profundo'
        ],
        instructions: [
          'Use em ambiente escuro e silencioso',
          'Ajuste temperatura confortável',
          'Posicione-se confortavelmente',
          'Use intensidade baixa',
          'Concentre-se na respiração'
        ],
        safetyNote: 'Ideal para uso 30 minutos antes de dormir.',
        equipment: ['Massageador corporal'],
        rating: 4.9,
        completions: 1500
      },
      {
        id: 'reducao-estresse-cervical',
        title: 'Redução de Estresse Cervical',
        description: 'Alivia tensão acumulada na região do pescoço',
        duration: '10min',
        level: 'Iniciante',
        benefits: [
          'Alivia dor no pescoço',
          'Reduz tensão muscular',
          'Melhora postura',
          'Diminui dores de cabeça',
          'Promove relaxamento'
        ],
        instructions: [
          'Posicione na base do pescoço',
          'Mantenha postura ereta',
          'Evite movimentos bruscos',
          'Respire profundamente',
          'Finalize com alongamento'
        ],
        equipment: ['Massageador cervical'],
        rating: 4.8,
        completions: 1200
      },
      {
        id: 'respiracao-guiada-massagem',
        title: 'Respiração Guiada com Massagem',
        description: 'Combina técnicas de respiração com massagem relaxante',
        duration: '8min',
        level: 'Iniciante',
        benefits: [
          'Reduz ansiedade',
          'Melhora oxigenação',
          'Promove calma mental',
          'Relaxa músculos',
          'Equilibra sistema nervoso'
        ],
        instructions: [
          'Siga o ritmo de respiração guiado',
          'Inspire por 4 segundos',
          'Segure por 7 segundos',
          'Expire por 8 segundos',
          'Mantenha massagem suave'
        ],
        equipment: ['Massageador + áudio guiado'],
        rating: 4.7,
        completions: 800
      },
      {
        id: 'sono-restaurador-corpo-inteiro',
        title: 'Sono Restaurador Corpo Inteiro',
        description: 'Massagem completa para relaxamento total',
        duration: '15min',
        level: 'Intermediário',
        benefits: [
          'Relaxamento completo',
          'Melhora circulação geral',
          'Reduz tensão corporal',
          'Promove sono reparador',
          'Alivia estresse físico'
        ],
        instructions: [
          'Inicie pelos pés e suba gradualmente',
          'Use intensidade progressiva',
          'Dedique tempo a cada região',
          'Mantenha ambiente relaxante',
          'Finalize com respiração profunda'
        ],
        equipment: ['Kit massageadores'],
        rating: 4.9,
        completions: 950
      },
      {
        id: 'relax-rapido-trabalho',
        title: 'Relax Rápido no Trabalho',
        description: 'Sessão express para alívio do estresse durante o dia',
        duration: '7min',
        level: 'Iniciante',
        benefits: [
          'Reduz estresse imediato',
          'Melhora foco',
          'Alivia tensão muscular',
          'Aumenta produtividade',
          'Promove bem-estar'
        ],
        instructions: [
          'Use durante pausas no trabalho',
          'Foque em pescoço e ombros',
          'Mantenha intensidade moderada',
          'Respire conscientemente',
          'Retorne ao trabalho renovado'
        ],
        equipment: ['Massageador portátil'],
        rating: 4.6,
        completions: 750
      }
    ]
  },
  {
    id: 'estetica',
    title: 'Estética Facial',
    subtitle: 'Papada, rugas, rejuvenescimento',
    icon: Sparkles,
    color: 'text-cyan-400',
    totalExercises: 5,
    averageDuration: '9min',
    difficulty: 'Intermediário',
    exercises: [
      {
        id: 'reducao-papada',
        title: 'Redução de Papada',
        description: 'Tonifica músculos do pescoço e reduz papada',
        duration: '10min',
        level: 'Intermediário',
        benefits: [
          'Reduz papada visível',
          'Tonifica músculos do pescoço',
          'Melhora contorno facial',
          'Estimula colágeno',
          'Define linha da mandíbula'
        ],
        instructions: [
          'Limpe bem a região antes de usar',
          'Aplique gel condutor se necessário',
          'Use movimentos ascendentes',
          'Mantenha intensidade moderada',
          'Seja consistente no tratamento'
        ],
        safetyNote: 'Evite uso em pele irritada. Resultados visíveis em 4-6 semanas.',
        equipment: ['Massageador facial específico'],
        rating: 4.7,
        completions: 680
      },
      {
        id: 'bigode-chines-linhas',
        title: 'Bigode Chinês / Linhas Faciais',
        description: 'Suaviza linhas de expressão e rugas faciais',
        duration: '8min',
        level: 'Intermediário',
        benefits: [
          'Suaviza linhas de expressão',
          'Reduz bigode chinês',
          'Estimula renovação celular',
          'Melhora textura da pele',
          'Promove elasticidade'
        ],
        instructions: [
          'Foque nas linhas de expressão',
          'Use movimentos circulares suaves',
          'Evite pressão excessiva',
          'Hidrate bem após o uso',
          'Use protetor solar diariamente'
        ],
        equipment: ['Massageador facial micro'],
        rating: 4.5,
        completions: 520
      },
      {
        id: 'olheiras-bolsas-oculares',
        title: 'Olheiras & Bolsas Oculares',
        description: 'Reduz inchaço e escurecimento na região dos olhos',
        duration: '6min',
        level: 'Iniciante',
        benefits: [
          'Reduz olheiras',
          'Diminui bolsas oculares',
          'Melhora circulação local',
          'Suaviza linhas finas',
          'Ilumina o olhar'
        ],
        instructions: [
          'Use intensidade muito baixa',
          'Evite contato direto com os olhos',
          'Faça movimentos delicados',
          'Use creme específico para olhos',
          'Mantenha região hidratada'
        ],
        safetyNote: 'Região muito sensível. Use com extremo cuidado.',
        equipment: ['Massageador facial delicado'],
        rating: 4.4,
        completions: 450
      },
      {
        id: 'rejuvenescimento-total',
        title: 'Rejuvenescimento Total',
        description: 'Programa completo de 15 dias para renovação facial',
        duration: '15min',
        level: 'Avançado',
        benefits: [
          'Renovação facial completa',
          'Melhora significativa da pele',
          'Reduz sinais de envelhecimento',
          'Estimula produção de colágeno',
          'Promove luminosidade'
        ],
        instructions: [
          'Siga protocolo de 15 dias',
          'Use produtos específicos',
          'Mantenha rotina consistente',
          'Hidrate intensamente',
          'Proteja do sol sempre'
        ],
        safetyNote: 'Programa intensivo. Consulte especialista se necessário.',
        equipment: ['Kit completo facial'],
        rating: 4.8,
        completions: 320
      },
      {
        id: 'tonificacao-facial',
        title: 'Tonificação Facial',
        description: 'Fortalece músculos faciais e melhora firmeza',
        duration: '8min',
        level: 'Intermediário',
        benefits: [
          'Tonifica músculos faciais',
          'Melhora firmeza da pele',
          'Define contornos',
          'Previne flacidez',
          'Promove lifting natural'
        ],
        instructions: [
          'Trabalhe todos os músculos faciais',
          'Use intensidade progressiva',
          'Mantenha expressão relaxada',
          'Hidrate após cada sessão',
          'Combine com exercícios faciais'
        ],
        equipment: ['Massageador tonificante'],
        rating: 4.6,
        completions: 590
      }
    ]
  },
  {
    id: 'cabelos',
    title: 'Cabelos',
    subtitle: 'Fortalecimento, queda, crescimento',
    icon: Scissors,
    color: 'text-green-500',
    totalExercises: 5,
    averageDuration: '10min',
    difficulty: 'Iniciante',
    exercises: [
      {
        id: 'massagem-couro-cabeludo',
        title: 'Massagem Couro Cabeludo',
        description: 'Estimula circulação e promove relaxamento capilar',
        duration: '10min',
        level: 'Iniciante',
        benefits: [
          'Melhora circulação sanguínea',
          'Estimula folículos pilosos',
          'Reduz tensão no couro cabeludo',
          'Promove relaxamento',
          'Melhora absorção de produtos'
        ],
        instructions: [
          'Use movimentos circulares suaves',
          'Cubra todo o couro cabeludo',
          'Varie a pressão gradualmente',
          'Mantenha cabelo limpo',
          'Use óleos naturais se desejar'
        ],
        equipment: ['Massageador capilar'],
        rating: 4.7,
        completions: 890
      },
      {
        id: 'fortalecimento-foliculos',
        title: 'Fortalecimento de Folículos',
        description: 'Fortalece raízes e melhora saúde capilar',
        duration: '8min',
        level: 'Iniciante',
        benefits: [
          'Fortalece folículos pilosos',
          'Melhora ancoragem dos fios',
          'Reduz quebra capilar',
          'Estimula crescimento',
          'Melhora qualidade dos fios'
        ],
        instructions: [
          'Foque nas áreas de maior necessidade',
          'Use intensidade moderada',
          'Mantenha regularidade',
          'Combine com produtos fortalecedores',
          'Seja paciente com resultados'
        ],
        equipment: ['Massageador específico'],
        rating: 4.6,
        completions: 720
      },
      {
        id: 'prevencao-queda-capilar',
        title: 'Prevenção Queda Capilar',
        description: 'Programa específico para reduzir queda de cabelo',
        duration: '12min',
        level: 'Intermediário',
        benefits: [
          'Reduz queda capilar',
          'Fortalece raízes',
          'Melhora irrigação sanguínea',
          'Estimula crescimento',
          'Previne calvície'
        ],
        instructions: [
          'Use diariamente por 30 dias',
          'Foque em áreas de maior queda',
          'Combine com tratamento tópico',
          'Mantenha alimentação equilibrada',
          'Evite estresse excessivo'
        ],
        safetyNote: 'Consulte dermatologista em casos severos.',
        equipment: ['Massageador anti-queda'],
        rating: 4.8,
        completions: 650
      },
      {
        id: 'estimulo-crescimento-capilar',
        title: 'Estímulo Crescimento Capilar',
        description: 'Acelera crescimento e aumenta densidade capilar',
        duration: '15min',
        level: 'Intermediário',
        benefits: [
          'Acelera crescimento capilar',
          'Aumenta densidade dos fios',
          'Melhora irrigação sanguínea',
          'Estimula novos folículos',
          'Promove cabelos mais grossos'
        ],
        instructions: [
          'Use 3x por semana',
          'Mantenha tratamento por 3 meses',
          'Combine com suplementação',
          'Use produtos estimulantes',
          'Documente progresso com fotos'
        ],
        equipment: ['Massageador estimulante'],
        rating: 4.5,
        completions: 480
      },
      {
        id: 'relax-capilar-antistress',
        title: 'Relax Capilar Antistress',
        description: 'Reduz tensão e promove bem-estar capilar',
        duration: '7min',
        level: 'Iniciante',
        benefits: [
          'Reduz tensão no couro cabeludo',
          'Promove relaxamento',
          'Melhora qualidade do sono',
          'Reduz estresse',
          'Alivia dores de cabeça'
        ],
        instructions: [
          'Use ao final do dia',
          'Mantenha ambiente relaxante',
          'Respire profundamente',
          'Use óleos aromáticos',
          'Finalize com hidratação'
        ],
        equipment: ['Massageador relaxante'],
        rating: 4.9,
        completions: 1100
      }
    ]
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento & Tonificação',
    subtitle: 'Queima localizada, firmeza',
    icon: TrendingUp,
    color: 'text-orange-500',
    totalExercises: 5,
    averageDuration: '14min',
    difficulty: 'Intermediário',
    exercises: [
      {
        id: 'abdomen-definido',
        title: 'Abdômen Definido',
        description: 'Tonifica músculos abdominais e reduz gordura localizada',
        duration: '12min',
        level: 'Intermediário',
        benefits: [
          'Tonifica músculos abdominais',
          'Reduz gordura localizada',
          'Melhora definição muscular',
          'Fortalece core',
          'Melhora postura'
        ],
        instructions: [
          'Use sobre pele limpa e seca',
          'Mantenha intensidade moderada',
          'Combine com exercícios abdominais',
          'Hidrate-se adequadamente',
          'Mantenha dieta equilibrada'
        ],
        safetyNote: 'Não usar durante gravidez ou problemas abdominais.',
        equipment: ['Massageador abdominal'],
        rating: 4.6,
        completions: 780
      },
      {
        id: 'tonificacao-bracos',
        title: 'Tonificação Braços',
        description: 'Fortalece e define músculos dos braços',
        duration: '10min',
        level: 'Iniciante',
        benefits: [
          'Tonifica músculos dos braços',
          'Reduz flacidez',
          'Melhora definição muscular',
          'Fortalece bíceps e tríceps',
          'Melhora circulação'
        ],
        instructions: [
          'Trabalhe bíceps e tríceps',
          'Use movimentos ascendentes',
          'Varie a intensidade',
          'Combine com exercícios',
          'Mantenha regularidade'
        ],
        equipment: ['Massageador portátil'],
        rating: 4.4,
        completions: 620
      },
      {
        id: 'pernas-firmes',
        title: 'Pernas Firmes',
        description: 'Tonifica músculos das pernas e reduz celulite',
        duration: '15min',
        level: 'Intermediário',
        benefits: [
          'Tonifica músculos das pernas',
          'Reduz celulite',
          'Melhora circulação',
          'Fortalece quadríceps',
          'Define panturrilhas'
        ],
        instructions: [
          'Trabalhe coxas e panturrilhas',
          'Use pressão firme mas confortável',
          'Mantenha pernas elevadas',
          'Hidrate bem a pele',
          'Combine com atividade física'
        ],
        equipment: ['Massageador de pernas'],
        rating: 4.7,
        completions: 850
      },
      {
        id: 'reducao-gordura-localizada',
        title: 'Redução de Gordura Localizada',
        description: 'Programa específico para queima de gordura em áreas problemáticas',
        duration: '12min',
        level: 'Avançado',
        benefits: [
          'Reduz gordura localizada',
          'Melhora metabolismo local',
          'Quebra células de gordura',
          'Melhora textura da pele',
          'Promove drenagem'
        ],
        instructions: [
          'Foque em áreas problemáticas',
          'Use intensidade alta (tolerável)',
          'Mantenha tratamento regular',
          'Combine com dieta adequada',
          'Beba muita água'
        ],
        safetyNote: 'Resultados dependem de estilo de vida saudável.',
        equipment: ['Massageador específico'],
        rating: 4.5,
        completions: 540
      },
      {
        id: 'corpo-inteiro-queima-calorica',
        title: 'Corpo Inteiro Queima Calórica',
        description: 'Sessão completa para acelerar metabolismo',
        duration: '20min',
        level: 'Avançado',
        benefits: [
          'Acelera metabolismo',
          'Queima calorias',
          'Tonifica corpo inteiro',
          'Melhora circulação geral',
          'Promove bem-estar'
        ],
        instructions: [
          'Trabalhe todo o corpo sistematicamente',
          'Mantenha intensidade alta',
          'Hidrate-se durante a sessão',
          'Descanse entre regiões',
          'Finalize com alongamento'
        ],
        equipment: ['Kit completo massageadores'],
        rating: 4.8,
        completions: 420
      }
    ]
  },
  {
    id: 'coluna',
    title: 'Saúde da Coluna',
    subtitle: 'Cervical, lombar, postura',
    icon: Shield,
    color: 'text-purple-600',
    totalExercises: 5,
    averageDuration: '11min',
    difficulty: 'Intermediário',
    exercises: [
      {
        id: 'hernia-disco-protocolo',
        title: 'Hérnia de Disco - Protocolo Suave',
        description: 'Protocolo específico e seguro para alívio da hérnia de disco',
        duration: '12min',
        level: 'Intermediário',
        benefits: [
          'Alivia dor da hérnia',
          'Reduz inflamação',
          'Melhora mobilidade',
          'Fortalece músculos de apoio',
          'Promove relaxamento'
        ],
        instructions: [
          'Use intensidade muito baixa',
          'Evite movimentos bruscos',
          'Mantenha posição confortável',
          'Pare se sentir dor',
          'Siga orientação médica'
        ],
        safetyNote: 'OBRIGATÓRIO: Liberação médica antes do uso.',
        equipment: ['Massageador específico coluna'],
        rating: 4.3,
        completions: 320
      },
      {
        id: 'lombalgia-alivio-imediato',
        title: 'Lombalgia Alívio Imediato',
        description: 'Alívio rápido para dores lombares agudas',
        duration: '10min',
        level: 'Iniciante',
        benefits: [
          'Alívio imediato da dor',
          'Relaxa músculos lombares',
          'Melhora mobilidade',
          'Reduz espasmos',
          'Promove bem-estar'
        ],
        instructions: [
          'Posicione na região lombar',
          'Use calor se disponível',
          '始まり intensidade baixa',
          'Respire profundamente',
          'Mantenha postura adequada'
        ],
        equipment: ['Massageador lombar'],
        rating: 4.7,
        completions: 950
      },
      {
        id: 'escoliose-mobilidade-segura',
        title: 'Escoliose - Mobilidade Segura',
        description: 'Programa seguro para melhora da mobilidade na escoliose',
        duration: '15min',
        level: 'Avançado',
        benefits: [
          'Melhora mobilidade',
          'Fortalece músculos posturais',
          'Reduz compensações',
          'Alivia tensões',
          'Melhora qualidade de vida'
        ],
        instructions: [
          'Siga protocolo específico',
          'Trabalhe ambos os lados',
          'Mantenha simetria',
          'Use intensidade moderada',
          'Acompanhe com fisioterapeuta'
        ],
        safetyNote: 'Requer acompanhamento profissional.',
        equipment: ['Massageador postural'],
        rating: 4.5,
        completions: 280
      },
      {
        id: 'bico-papagaio-cervical',
        title: 'Bico de Papagaio - Relaxamento Cervical',
        description: 'Alívio específico para artrose cervical',
        duration: '10min',
        level: 'Intermediário',
        benefits: [
          'Alivia dor cervical',
          'Reduz rigidez',
          'Melhora amplitude de movimento',
          'Relaxa músculos',
          'Diminui inflamação'
        ],
        instructions: [
          'Use intensidade suave',
          'Evite pressão excessiva',
          'Mantenha pescoço alinhado',
          'Faça movimentos lentos',
          'Aplique calor antes se possível'
        ],
        safetyNote: 'Cuidado com movimentos bruscos.',
        equipment: ['Massageador cervical'],
        rating: 4.4,
        completions: 480
      },
      {
        id: 'coluna-saudavel-14-dias',
        title: 'Coluna Saudável - Plano 14 Dias',
        description: 'Programa completo de fortalecimento e saúde da coluna',
        duration: '15min',
        level: 'Intermediário',
        benefits: [
          'Fortalece coluna inteira',
          'Melhora postura',
          'Previne lesões',
          'Aumenta flexibilidade',
          'Promove saúde postural'
        ],
        instructions: [
          'Siga protocolo de 14 dias',
          'Trabalhe toda a coluna',
          'Combine com exercícios',
          'Mantenha regularidade',
          'Monitore progresso'
        ],
        equipment: ['Kit completo coluna'],
        rating: 4.8,
        completions: 380
      }
    ]
  },
  {
    id: 'articulacoes',
    title: 'Articulações & Mobilidade',
    subtitle: 'Artrite, artrose, rigidez',
    icon: Activity,
    color: 'text-blue-500',
    totalExercises: 5,
    averageDuration: '10min',
    difficulty: 'Intermediário',
    exercises: [
      {
        id: 'artrite-maos-punhos',
        title: 'Artrite Mãos & Punhos',
        description: 'Alívio específico para artrite nas mãos e punhos',
        duration: '8min',
        level: 'Iniciante',
        benefits: [
          'Reduz dor da artrite',
          'Melhora mobilidade',
          'Diminui rigidez matinal',
          'Fortalece articulações',
          'Promove circulação'
        ],
        instructions: [
          'Use água morna antes',
          'Movimentos suaves e lentos',
          'Respeite limites de dor',
          'Mantenha regularidade',
          'Combine com exercícios'
        ],
        safetyNote: 'Pare se houver aumento da dor.',
        equipment: ['Massageador para mãos'],
        rating: 4.6,
        completions: 420
      },
      {
        id: 'artrose-joelhos',
        title: 'Artrose Joelhos',
        description: 'Programa específico para artrose nos joelhos',
        duration: '12min',
        level: 'Intermediário',
        benefits: [
          'Alivia dor nos joelhos',
          'Melhora mobilidade',
          'Fortalece músculos de apoio',
          'Reduz inflamação',
          'Melhora qualidade de vida'
        ],
        instructions: [
          'Posicione adequadamente',
          'Use intensidade moderada',
          'Evite sobrecarga',
          'Mantenha peso adequado',
          'Combine com fisioterapia'
        ],
        equipment: ['Massageador para joelhos'],
        rating: 4.5,
        completions: 380
      },
      {
        id: 'rigidez-ombros-trapezio',
        title: 'Rigidez Ombros/Trapézio',
        description: 'Alívio para tensão e rigidez nos ombros',
        duration: '10min',
        level: 'Iniciante',
        benefits: [
          'Reduz rigidez nos ombros',
          'Alivia tensão do trapézio',
          'Melhora amplitude de movimento',
          'Relaxa músculos',
          'Previne dores de cabeça'
        ],
        instructions: [
          'Trabalhe ombros e trapézio',
          'Use movimentos circulares',
          'Varie a pressão',
          'Mantenha postura adequada',
          'Finalize com alongamento'
        ],
        equipment: ['Massageador de ombros'],
        rating: 4.7,
        completions: 680
      },
      {
        id: 'alongamento-lombar-guiado',
        title: 'Alongamento Lombar Guiado',
        description: 'Sessão guiada de alongamento para região lombar',
        duration: '12min',
        level: 'Iniciante',
        benefits: [
          'Melhora flexibilidade lombar',
          'Reduz tensão muscular',
          'Previne lesões',
          'Alivia dor',
          'Melhora postura'
        ],
        instructions: [
          'Siga instruções de alongamento',
          'Mantenha respiração regular',
          'Não force movimentos',
          'Mantenha por 30 segundos',
          'Relaxe entre exercícios'
        ],
        equipment: ['Massageador + guia de áudio'],
        rating: 4.8,
        completions: 520
      },
      {
        id: 'mobilidade-quadris',
        title: 'Mobilidade Quadris',
        description: 'Melhora mobilidade e flexibilidade dos quadris',
        duration: '10min',
        level: 'Intermediário',
        benefits: [
          'Melhora mobilidade dos quadris',
          'Aumenta flexibilidade',
          'Reduz rigidez',
          'Fortalece músculos',
          'Melhora marcha'
        ],
        instructions: [
          'Trabalhe toda região do quadril',
          'Use movimentos amplos',
          'Mantenha simetria',
          'Respeite limites',
          'Combine com exercícios'
        ],
        equipment: ['Massageador para quadris'],
        rating: 4.4,
        completions: 350
      }
    ]
  }
];