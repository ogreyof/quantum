"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

export const LoginScreen = ({ onLogin, onRegister, onForgotPassword }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onLogin(email, password);
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Toggle de tema no canto superior direito */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md card-quantum">
        <CardHeader className="text-center space-y-4">
          {/* Logo Quantum */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-quantum rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">Q</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            Bem-vindo ao Quantum
          </CardTitle>
          <p className="text-muted-foreground">
            Entre na sua conta para continuar
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
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full btn-quantum"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <Button
              variant="ghost"
              className="w-full"
              onClick={onForgotPassword}
            >
              Esqueci minha senha
            </Button>
            
            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Não tem uma conta?{" "}
              </span>
              <Button
                variant="link"
                className="p-0 h-auto text-primary"
                onClick={onRegister}
              >
                Criar conta
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};