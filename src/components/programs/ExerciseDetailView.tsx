"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, Clock, Star, Users, Target, Shield, 
  CheckCircle, List, Info, Settings
} from "lucide-react";
import { Exercise } from "@/data/complete-programs";

interface ExerciseDetailViewProps {
  exercise: Exercise;
  onBack: () => void;
  onStartSession: (exerciseId: string) => void;
}

export const ExerciseDetailView = ({ exercise, onBack, onStartSession }: ExerciseDetailViewProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const getDifficultyColor = (level: string) => {
    switch (level) {
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

  return (
    <>
      <CategoryHeader 
        title={exercise.title} 
        subtitle={exercise.description} 
        onBack={onBack} 
      />
      
      <div className="p-6 space-y-6">
        {/* Cabeçalho do Exercício */}
        <Card className="card-quantum">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-black">{exercise.title}</h2>
                <p className="text-gray-600 mt-1">{exercise.description}</p>
              </div>
              <Badge className={getDifficultyColor(exercise.level)}>
                {exercise.level}
              </Badge>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                <div className="font-bold text-black">{exercise.duration}</div>
                <div className="text-xs text-gray-600">Duração</div>
              </div>
              <div className="text-center">
                <Star className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                <div className="font-bold text-black">{exercise.rating}</div>
                <div className="text-xs text-gray-600">Avaliação</div>
              </div>
              <div className="text-center">
                <Users className="h-5 w-5 text-green-500 mx-auto mb-1" />
                <div className="font-bold text-black">{exercise.completions}</div>
                <div className="text-xs text-gray-600">Conclusões</div>
              </div>
            </div>

            {/* Botão Principal */}
            <Button 
              className="w-full btn-quantum py-3"
              onClick={() => onStartSession(exercise.id)}
            >
              <Play className="h-5 w-5 mr-2" />
              Iniciar Sessão
            </Button>
          </CardContent>
        </Card>

        {/* Tabs de Detalhes */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="instructions" className="flex items-center gap-2">
              <List className="h-4 w-4" />
              Instruções
            </TabsTrigger>
            <TabsTrigger value="equipment" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Equipamentos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Benefícios */}
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Target className="h-5 w-5 text-primary" />
                  Benefícios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {exercise.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-black">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nota de Segurança */}
            {exercise.safetyNote && (
              <Card className="card-quantum border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Importante:</h4>
                      <p className="text-yellow-700 text-sm">{exercise.safetyNote}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="instructions" className="space-y-4">
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <List className="h-5 w-5 text-primary" />
                  Passo a Passo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exercise.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-black flex-1">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="equipment" className="space-y-4">
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Settings className="h-5 w-5 text-primary" />
                  Equipamentos Necessários
                </CardTitle>
              </CardHeader>
              <CardContent>
                {exercise.equipment ? (
                  <div className="space-y-2">
                    {exercise.equipment.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-black">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">Nenhum equipamento específico necessário.</p>
                )}
              </CardContent>
            </Card>

            {/* Dicas de Uso */}
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Dicas de Uso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-black">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Certifique-se de que o equipamento está limpo antes do uso</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Ajuste a intensidade gradualmente conforme seu conforto</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Mantenha uma postura adequada durante toda a sessão</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p>Hidrate-se antes e depois da sessão</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};