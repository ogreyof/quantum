"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Mail, ArrowLeft } from "lucide-react";

interface ForgotPasswordScreenProps {
  onSendReset: (email: string) => void;
  onBackToLogin: () => void;
}

export const ForgotPasswordScreen = ({ onSendReset, onBackToLogin }: ForgotPasswordScreenProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onSendReset(email);
      setEmailSent(true);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <Card className="w-full max-w-md card-quantum">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-quantum rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              E-mail Enviado! 📧
            </CardTitle>
            <p className="text-muted-foreground">
              Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
            </p>
          </CardHeader>
          
          <CardContent>
            <Button 
              onClick={onBackToLogin}
              className="w-full btn-quantum"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md card-quantum">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-quantum rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">Q</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            Esqueci minha senha
          </CardTitle>
          <p className="text-muted-foreground">
            Digite seu e-mail para receber instruções de recuperação
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full btn-quantum"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar instruções"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={onBackToLogin}
              className="text-muted-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};