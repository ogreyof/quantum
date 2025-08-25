"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, Clock, Star, Users, Target, Shield, 
  CheckCircle, Award, TrendingUp 
} from "lucide-react";
import { ProgramCategory, Exercise } from "@/data/complete-programs";

interface ProgramDetailViewProps {
  program: ProgramCategory;
  onBack: () => void;
  onStartExercise: (exerciseId: string) => void;
}

export const ProgramDetailView = ({ program, onBack, onStartExercise }: ProgramDetailViewProps) => {
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  
  const IconComponent = program.icon;
  const completionPercentage = (completedExercises.length / program.exercises.length) * 100;

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

  const markAsCompleted = (exerciseId: string) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId]);
    }
  };

  return (
    <>
      <CategoryHeader 
        title={program.title} 
        subtitle={program.subtitle} 
        onBack={onBack} 
      />
      
      <div className="p-6 space-y-6">
        {/* Resumo do Programa */}
        <Card className="card-quantum">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-quantum rounded-full flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-black">{program.title}</h2>
                <p className="text-gray-600">{program.subtitle}</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge className={getDifficultyColor(program.difficulty)}>
                    {program.difficulty}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    {program.totalExercises} exercícios
                  </span>
                  <span className="text-sm text-gray-600">
                    ~{program.averageDuration} média
                  </span>
                </div>
              </div>
            </div>

            {/* Progresso */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-black">Progresso do Programa</span>
                <span className="text-black">{Math.round(completionPercentage)}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
              <p className="text-xs text-gray-600">
                {completedExercises.length} de {program.exercises.length} exercícios concluídos
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Exercícios */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Exercícios do Programa</h3>
          
          {program.exercises.map((exercise, index) => {
            const isCompleted = completedExercises.includes(exercise.id);
            
            return (
              <Card key={exercise.id} className="card-quantum">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Número do exercício */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <div className="flex-1">
                      {/* Cabeçalho do exercício */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-black">{exercise.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{exercise.description}</p>
                        </div>
                        <Badge className={getDifficultyColor(exercise.level)}>
                          {exercise.level}
                        </Badge>
                      </div>

                      {/* Informações do exercício */}
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{exercise.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{exercise.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{exercise.completions}</span>
                        </div>
                      </div>

                      {/* Benefícios principais */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-black mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          Benefícios:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {exercise.benefits.slice(0, 3).map((benefit, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                          {exercise.benefits.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{exercise.benefits.length - 3} mais
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Nota de segurança */}
                      {exercise.safetyNote && (
                        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-yellow-600 mt-0.5" />
                            <div>
                              <p className="font-semibold text-yellow-800 text-sm">Nota de Segurança:</p>
                              <p className="text-yellow-700 text-xs">{exercise.safetyNote}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Botão de ação */}
                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 btn-quantum"
                          onClick={() => {
                            onStartExercise(exercise.id);
                            markAsCompleted(exercise.id);
                          }}
                          disabled={isCompleted}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          {isCompleted ? 'Concluído' : 'Iniciar Exercício'}
                        </Button>
                        
                        {isCompleted && (
                          <Button 
                            variant="outline" 
                            onClick={() => onStartExercise(exercise.id)}
                          >
                            Repetir
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Conquistas */}
        {completionPercentage > 0 && (
          <Card className="card-quantum border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-bold text-black">Parabéns! 🎉</h4>
                  <p className="text-sm text-gray-600">
                    {completionPercentage === 100 
                      ? 'Você completou todo o programa!' 
                      : `Você já completou ${Math.round(completionPercentage)}% do programa!`
                    }
                  </p>
                </div>
              </div>
              
              {completionPercentage === 100 && (
                <div className="mt-4">
                  <Button className="w-full btn-quantum">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Explorar Próximo Nível
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};