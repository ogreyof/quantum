"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface QuizWelcomeProps {
  onStart: () => void;
}

export const QuizWelcome = ({ onStart }: QuizWelcomeProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg card-quantum text-center">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-quantum rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">Q</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Bem-vindo ao Quantum!</h1>
          <p className="text-muted-foreground text-lg">
            Vamos personalizar sua experiência para obter os melhores resultados
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">1</span>
              </div>
              <p className="text-sm">Identificaremos seus objetivos e necessidades</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">2</span>
              </div>
              <p className="text-sm">Criaremos um plano personalizado para você</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">3</span>
              </div>
              <p className="text-sm">Recomendaremos os melhores programas e horários</p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={onStart}
              className="w-full btn-quantum text-lg py-6"
            >
              Começar Personalização
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Leva apenas 2-3 minutos para completar
          </p>
        </CardContent>
      </Card>
    </div>
  );
};