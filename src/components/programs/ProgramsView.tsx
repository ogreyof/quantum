"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "@/components/ui/video-player";
import { 
  Play, Clock, Star, Users, Target, ChevronRight,
  Droplets, Moon, Sparkles, Scissors, TrendingUp
} from "lucide-react";

interface ProgramsViewProps {
  onBack: () => void;
  onStartProgram: (programId: string, programTitle: string, duration: string) => void;
}

const programCategories = [
  {
    id: 'drenagem',
    title: 'Drenagem & Circulação',
    subtitle: 'Pernas, linfática, varizes',
    icon: Droplets,
    color: 'text-blue-500',
    subcategories: [
      {
        id: 'pernas',
        title: 'Pernas',
        exercises: [
          { 
            id: 'drenagem-pernas-1', 
            title: 'Drenagem Básica', 
            duration: '10min', 
            difficulty: 'Iniciante', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Técnica básica de drenagem para reduzir inchaço nas pernas',
            benefits: ['Reduz inchaço', 'Melhora circulação', 'Alivia peso nas pernas']
          },
          { 
            id: 'drenagem-pernas-2', 
            title: 'Circulação Avançada', 
            duration: '15min', 
            difficulty: 'Intermediário', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Programa avançado para estimular circulação profunda',
            benefits: ['Circulação profunda', 'Fortalece vasos', 'Previne varizes']
          },
          { 
            id: 'drenagem-pernas-3', 
            title: 'Pernas Leves', 
            duration: '12min', 
            difficulty: 'Iniciante', 
            rating: 4.9,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Sessão relaxante para sensação de leveza nas pernas',
            benefits: ['Sensação de leveza', 'Relaxamento', 'Bem-estar']
          }
        ]
      },
      {
        id: 'linfatico',
        title: 'Linfático',
        exercises: [
          { 
            id: 'linfatico-1', 
            title: 'Drenagem Linfática', 
            duration: '18min', 
            difficulty: 'Intermediário', 
            rating: 4.6,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Estimulação completa do sistema linfático',
            benefits: ['Detox natural', 'Reduz retenção', 'Fortalece imunidade']
          },
          { 
            id: 'linfatico-2', 
            title: 'Detox Completo', 
            duration: '25min', 
            difficulty: 'Avançado', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Programa intensivo de desintoxicação linfática',
            benefits: ['Detox profundo', 'Elimina toxinas', 'Renovação celular']
          }
        ]
      },
      {
        id: 'varizes',
        title: 'Varizes',
        exercises: [
          { 
            id: 'varizes-1', 
            title: 'Prevenção Varizes', 
            duration: '14min', 
            difficulty: 'Iniciante', 
            rating: 4.5,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Programa preventivo para varizes e má circulação',
            benefits: ['Previne varizes', 'Fortalece veias', 'Melhora retorno venoso']
          },
          { 
            id: 'varizes-2', 
            title: 'Circulação Profunda', 
            duration: '20min', 
            difficulty: 'Intermediário', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Estimulação profunda para casos de varizes existentes',
            benefits: ['Circulação intensa', 'Reduz sintomas', 'Fortalece paredes venosas']
          }
        ]
      }
    ]
  },
  {
    id: 'sono',
    title: 'Sono & Relaxamento',
    subtitle: 'Ansiedade, estresse, descanso',
    icon: Moon,
    color: 'text-purple-600',
    subcategories: [
      {
        id: 'ansiedade',
        title: 'Ansiedade',
        exercises: [
          { 
            id: 'ansiedade-1', 
            title: 'Calma Instantânea', 
            duration: '8min', 
            difficulty: 'Iniciante', 
            rating: 4.9,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Técnica rápida para acalmar ansiedade aguda',
            benefits: ['Calma imediata', 'Reduz ansiedade', 'Equilibra emoções']
          },
          { 
            id: 'ansiedade-2', 
            title: 'Respiração Profunda', 
            duration: '12min', 
            difficulty: 'Iniciante', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Exercícios de respiração para controle da ansiedade',
            benefits: ['Controle respiratório', 'Reduz palpitações', 'Tranquiliza mente']
          },
          { 
            id: 'ansiedade-3', 
            title: 'Equilíbrio Mental', 
            duration: '15min', 
            difficulty: 'Intermediário', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Programa completo para equilíbrio emocional',
            benefits: ['Equilíbrio emocional', 'Estabilidade mental', 'Paz interior']
          }
        ]
      },
      {
        id: 'estresse',
        title: 'Estresse',
        exercises: [
          { 
            id: 'estresse-1', 
            title: 'Alívio Imediato', 
            duration: '10min', 
            difficulty: 'Iniciante', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Alívio rápido para momentos de estresse intenso',
            benefits: ['Alívio imediato', 'Relaxa músculos', 'Reduz cortisol']
          },
          { 
            id: 'estresse-2', 
            title: 'Relaxamento Total', 
            duration: '20min', 
            difficulty: 'Intermediário', 
            rating: 4.9,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Sessão completa de relaxamento profundo',
            benefits: ['Relaxamento profundo', 'Restaura energia', 'Renova disposição']
          }
        ]
      },
      {
        id: 'descanso',
        title: 'Descanso',
        exercises: [
          { 
            id: 'descanso-1', 
            title: 'Preparação Sono', 
            duration: '12min', 
            difficulty: 'Iniciante', 
            rating: 4.9,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Prepara corpo e mente para uma noite tranquila',
            benefits: ['Prepara para dormir', 'Relaxa músculos', 'Acalma mente']
          },
          { 
            id: 'descanso-2', 
            title: 'Sono Profundo', 
            duration: '18min', 
            difficulty: 'Intermediário', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Induz relaxamento para sono reparador',
            benefits: ['Sono profundo', 'Recuperação total', 'Energia renovada']
          }
        ]
      }
    ]
  },
  {
    id: 'estetica',
    title: 'Estética Facial',
    subtitle: 'Papada, rugas, rejuvenescimento',
    icon: Sparkles,
    color: 'text-cyan-400',
    subcategories: [
      {
        id: 'papada',
        title: 'Papada',
        exercises: [
          { 
            id: 'papada-1', 
            title: 'Redução Papada', 
            duration: '10min', 
            difficulty: 'Intermediário', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Técnicas específicas para redução da papada',
            benefits: ['Reduz papada', 'Tonifica pescoço', 'Define contorno']
          },
          { 
            id: 'papada-2', 
            title: 'Tonificação Pescoço', 
            duration: '12min', 
            difficulty: 'Intermediário', 
            rating: 4.6,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Fortalecimento dos músculos do pescoço',
            benefits: ['Fortalece músculos', 'Melhora postura', 'Previne flacidez']
          },
          { 
            id: 'papada-3', 
            title: 'Contorno Facial', 
            duration: '15min', 
            difficulty: 'Avançado', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Definição completa do contorno facial',
            benefits: ['Define contorno', 'Esculpe rosto', 'Rejuvenesce']
          }
        ]
      },
      {
        id: 'rugas',
        title: 'Rugas',
        exercises: [
          { 
            id: 'rugas-1', 
            title: 'Linhas de Expressão', 
            duration: '8min', 
            difficulty: 'Iniciante', 
            rating: 4.5,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Suavização de linhas finas e rugas superficiais',
            benefits: ['Suaviza linhas', 'Previne rugas', 'Hidrata pele']
          },
          { 
            id: 'rugas-2', 
            title: 'Bigode Chinês', 
            duration: '10min', 
            difficulty: 'Intermediário', 
            rating: 4.6,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Tratamento específico para bigode chinês',
            benefits: ['Reduz bigode chinês', 'Estimula colágeno', 'Firma pele']
          }
        ]
      },
      {
        id: 'rejuvenescimento',
        title: 'Rejuvenescimento',
        exercises: [
          { 
            id: 'rejuv-1', 
            title: 'Lifting Natural', 
            duration: '15min', 
            difficulty: 'Avançado', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Efeito lifting natural sem cirurgia',
            benefits: ['Efeito lifting', 'Firma pele', 'Rejuvenesce']
          },
          { 
            id: 'rejuv-2', 
            title: 'Firmeza Facial', 
            duration: '12min', 
            difficulty: 'Intermediário', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Melhora firmeza e elasticidade da pele',
            benefits: ['Aumenta firmeza', 'Melhora elasticidade', 'Tonifica']
          }
        ]
      }
    ]
  },
  {
    id: 'cabelos',
    title: 'Cabelos',
    subtitle: 'Fortalecimento, queda, crescimento',
    icon: Scissors,
    color: 'text-green-500',
    subcategories: [
      {
        id: 'fortalecimento',
        title: 'Fortalecimento',
        exercises: [
          { 
            id: 'fort-1', 
            title: 'Raízes Fortes', 
            duration: '10min', 
            difficulty: 'Iniciante', 
            rating: 4.6,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Fortalecimento das raízes capilares',
            benefits: ['Fortalece raízes', 'Melhora ancoragem', 'Previne quebra']
          },
          { 
            id: 'fort-2', 
            title: 'Nutrição Capilar', 
            duration: '15min', 
            difficulty: 'Intermediário', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Nutrição profunda do couro cabeludo',
            benefits: ['Nutre folículos', 'Melhora qualidade', 'Aumenta brilho']
          }
        ]
      },
      {
        id: 'queda',
        title: 'Queda',
        exercises: [
          { 
            id: 'queda-1', 
            title: 'Prevenção Queda', 
            duration: '12min', 
            difficulty: 'Intermediário', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Programa preventivo contra queda capilar',
            benefits: ['Previne queda', 'Fortalece fios', 'Estimula crescimento']
          },
          { 
            id: 'queda-2', 
            title: 'Estimulação Folicular', 
            duration: '18min',  
            difficulty: 'Avançado', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Estimulação intensa dos folículos pilosos',
            benefits: ['Ativa folículos', 'Acelera crescimento', 'Aumenta densidade']
          }
        ]
      },
      {
        id: 'crescimento',
        title: 'Crescimento',
        exercises: [
          { 
            id: 'cresc-1', 
            title: 'Aceleração Crescimento', 
            duration: '15min', 
            difficulty: 'Intermediário', 
            rating: 4.5,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Acelera o crescimento natural dos cabelos',
            benefits: ['Acelera crescimento', 'Melhora irrigação', 'Cabelos mais longos']
          },
          { 
            id: 'cresc-2', 
            title: 'Densidade Capilar', 
            duration: '20min', 
            difficulty: 'Avançado', 
            rating: 4.6,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Aumenta densidade e volume capilar',
            benefits: ['Aumenta densidade', 'Mais volume', 'Cabelos grossos']
          }
        ]
      }
    ]
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento & Tonificação',
    subtitle: 'Queima localizada, firmeza',
    icon: TrendingUp,
    color: 'text-orange-500',
    subcategories: [
      {
        id: 'queima',
        title: 'Queima Localizada',
        exercises: [
          { 
            id: 'queima-1', 
            title: 'Abdômen Definido', 
            duration: '15min', 
            difficulty: 'Intermediário', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Queima gordura abdominal e define músculos',
            benefits: ['Queima gordura', 'Define abdômen', 'Fortalece core']
          },
          { 
            id: 'queima-2', 
            title: 'Pernas Torneadas', 
            duration: '18min', 
            difficulty: 'Intermediário', 
            rating: 4.6,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Modelagem e tonificação das pernas',
            benefits: ['Modela pernas', 'Reduz celulite', 'Tonifica músculos']
          },
          { 
            id: 'queima-3', 
            title: 'Braços Firmes', 
            duration: '12min', 
            difficulty: 'Iniciante', 
            rating: 4.5,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Tonificação e firmeza dos braços',
            benefits: ['Tonifica braços', 'Reduz flacidez', 'Define músculos']
          }
        ]
      },
      {
        id: 'firmeza',
        title: 'Firmeza',
        exercises: [
          { 
            id: 'firmeza-1', 
            title: 'Tonificação Geral', 
            duration: '20min', 
            difficulty: 'Intermediário', 
            rating: 4.8,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Tonificação corporal completa',
            benefits: ['Tonifica corpo', 'Melhora firmeza', 'Define silhueta']
          },
          { 
            id: 'firmeza-2', 
            title: 'Modelagem Corporal', 
            duration: '25min', 
            difficulty: 'Avançado', 
            rating: 4.7,
            videoUrl: 'https://youtu.be/oI2X5ZxREho',
            description: 'Modelagem avançada da silhueta corporal',
            benefits: ['Modela silhueta', 'Esculpe corpo', 'Resultados visíveis']
          }
        ]
      }
    ]
  }
];

export const ProgramsView = ({ onBack, onStartProgram }: ProgramsViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante':
        return 'bg-green-100 text-green-700';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-700';
      case 'Avançado':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Mostrar lista de exercícios com vídeos
  if (selectedCategory && selectedSubcategory) {
    const category = programCategories.find(c => c.id === selectedCategory);
    const subcategory = category?.subcategories.find(s => s.id === selectedSubcategory);
    
    return (
      <>
        <CategoryHeader 
          title={subcategory?.title || ''} 
          subtitle={`${category?.title} - Exercícios`}
          onBack={() => setSelectedSubcategory(null)} 
        />
        
        <div className="p-6 space-y-6">
          {subcategory?.exercises.map((exercise) => (
            <Card key={exercise.id} className="card-quantum">
              <CardContent className="p-6 space-y-4">
                {/* Vídeo do Exercício */}
                <VideoPlayer 
                  videoUrl={exercise.videoUrl}
                  title={exercise.title}
                  showControls={false}
                />

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg mb-2">{exercise.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{exercise.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{exercise.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{exercise.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(exercise.difficulty)}>
                    {exercise.difficulty}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-black mb-2">Benefícios:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {exercise.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>📹 Vídeo Demonstrativo:</strong> Assista ao vídeo acima para ver a técnica correta 
                    antes de iniciar o exercício.
                  </p>
                </div>

                <Button 
                  className="w-full btn-quantum"
                  onClick={() => onStartProgram(exercise.id, exercise.title, exercise.duration)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Iniciar Exercício
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
  }

  // Mostrar subcategorias
  if (selectedCategory) {
    const category = programCategories.find(c => c.id === selectedCategory);
    
    return (
      <>
        <CategoryHeader 
          title={category?.title || ''} 
          subtitle={category?.subtitle || ''}
          onBack={() => setSelectedCategory(null)} 
        />
        
        <div className="p-6 space-y-4">
          {category?.subcategories.map((subcategory) => (
            <Card 
              key={subcategory.id} 
              className="card-quantum cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setSelectedSubcategory(subcategory.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-sem ibold text-black">{subcategory.title}</h3>
                    <p className="text-sm text-gray-600">
                      {subcategory.exercises.length} exercícios com vídeos
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      📹 Vídeos
                    </Badge>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
  }

  // Mostrar categorias principais
  return (
    <>
      <CategoryHeader 
        title="Programas Completos" 
        subtitle="Escolha sua categoria de interesse" 
        onBack={onBack} 
      />
      
      <div className="p-6 space-y-4">
        {programCategories.map((category) => {
          const IconComponent = category.icon;
          const totalExercises = category.subcategories.reduce((acc, sub) => acc + sub.exercises.length, 0);
          
          return (
            <Card 
              key={category.id} 
              className="card-quantum cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <IconComponent className={`h-6 w-6 ${category.color}`} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-black">
                      {totalExercises} exercícios
                    </div>
                    <div className="text-xs text-gray-600">
                      📹 Todos com vídeos
                    </div>
                    <ChevronRight size={16} className="text-gray-400 ml-auto" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};