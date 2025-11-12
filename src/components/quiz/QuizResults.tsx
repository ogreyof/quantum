"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Play, Music, Clock } from "lucide-react";
import { QuizRecommendations } from "@/types/auth";
import { quizOptions } from "@/data/quiz-options";

interface QuizResultsProps {
  recommendations: QuizRecommendations;
  onContinue: () => void;
}

export const QuizResults = ({ recommendations, onContinue }: QuizResultsProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl card-quantum">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="https://syemidcnxudvvxljmily.supabase.co/storage/v1/object/public/media/app-1/images/1762905820356-7ycjwxrq1.png"
              alt="Quantum Logo"
              className="w-20 h-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold">
            Personalização Concluída! 🎉
          </CardTitle>
          <p className="text-muted-foreground">
            Criamos recomendações personalizadas para você
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Plano Recomendado */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Seu Plano Recomendado
            </h3>
            <Card className="bg-gradient-quantum-subtle border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">{recommendations.planoRecomendado.title}</h4>
                  <Badge variant="secondary">{recommendations.planoRecomendado.duration}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {recommendations.planoRecomendado.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Programas Rápidos */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              Seus Programas de Início Rápido
            </h3>
            <div className="grid gap-3">
              {recommendations.programasRapidos.map((programa, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{programa.title}</h4>
                        <p className="text-xs text-muted-foreground">{programa.category}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {programa.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Playlist de Sons */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Music className="h-5 w-5 text-primary" />
              Sua Playlist Personalizada
            </h3>
            <div className="flex flex-wrap gap-2">
              {recommendations.playlistSons.map((som, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {quizOptions.preferenciaSom.find(s => s.id === som)?.label || som}
                </Badge>
              ))}
            </div>
          </div>

          {/* Horário de Notificação */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Lembretes Configurados
            </h3>
            <p className="text-sm text-muted-foreground">
              Você receberá lembretes no período da{' '}
              <span className="font-medium text-foreground">
                {recommendations.horarioNotificacao}
              </span>
            </p>
          </div>

          <div className="pt-6">
            <Button 
              onClick={onContinue}
              className="w-full btn-quantum text-lg py-6"
            >
              Começar Minha Jornada Quantum
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};