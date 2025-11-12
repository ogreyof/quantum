"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface QuizStepProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onNext: () => void;
  onPrev?: () => void;
  canProceed: boolean;
  isLastStep?: boolean;
  currentStep: number;
  totalSteps: number;
}

export const QuizStep = ({
  title,
  subtitle,
  children,
  onNext,
  onPrev,
  canProceed,
  isLastStep = false,
  currentStep,
  totalSteps
}: QuizStepProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl card-quantum">
        <CardHeader className="text-center">
          <div className="mb-4">
            <div className="flex justify-center mb-2">
              <img 
                src="https://syemidcnxudvvxljmily.supabase.co/storage/v1/object/public/media/app-1/images/1762905820356-7ycjwxrq1.png"
                alt="Quantum Logo"
                className="w-20 h-auto"
              />
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              Passo {currentStep} de {totalSteps}
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-quantum h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {subtitle && (
            <p className="text-muted-foreground mt-2">{subtitle}</p>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          {children}
          
          <div className="flex justify-between pt-6">
            {onPrev ? (
              <Button variant="outline" onClick={onPrev}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            ) : (
              <div />
            )}
            
            <Button 
              onClick={onNext}
              disabled={!canProceed}
              className="btn-quantum"
            >
              {isLastStep ? 'Finalizar Quiz' : 'Próximo'}
              {!isLastStep && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};