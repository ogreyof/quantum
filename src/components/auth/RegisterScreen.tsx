"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

interface RegisterScreenProps {
  onRegister: (name: string, email: string, password: string) => void;
  onBackToLogin: () => void;
}

export const RegisterScreen = ({ onRegister, onBackToLogin }: RegisterScreenProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setIsLoading(true);
    
    try {
      await onRegister(name, email, password);
    } catch (error) {
      console.error('Erro no registro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--quantum-background)' }}
    >
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card 
        className="w-full max-w-md"
        style={{
          backgroundColor: 'var(--quantum-card)',
          borderColor: 'var(--quantum-border)',
          color: 'var(--quantum-text)'
        }}
      >
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src="https://syemidcnxudvvxljmily.supabase.co/storage/v1/object/public/media/app-1/images/1762905820356-7ycjwxrq1.png"
              alt="Quantum Logo"
              className="w-24 h-auto"
            />
          </div>
          <CardTitle 
            className="text-2xl font-bold"
            style={{ color: 'var(--quantum-text)' }}
          >
            Criar Conta
          </CardTitle>
          <p style={{ color: 'var(--quantum-textSecondary)' }}>
            Junte-se à comunidade Quantum
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label 
                htmlFor="name"
                style={{ color: 'var(--quantum-text)' }}
              >
                Nome completo
              </Label>
              <div className="relative">
                <User 
                  className="absolute left-3 top-3 h-4 w-4"
                  style={{ color: 'var(--quantum-textSecondary)' }}
                />
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 quantum-input"
                  style={{
                    backgroundColor: 'var(--quantum-input)',
                    borderColor: 'var(--quantum-border)',
                    color: 'var(--quantum-text)'
                  }}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label 
                htmlFor="email"
                style={{ color: 'var(--quantum-text)' }}
              >
                E-mail
              </Label>
              <div className="relative">
                <Mail 
                  className="absolute left-3 top-3 h-4 w-4"
                  style={{ color: 'var(--quantum-textSecondary)' }}
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 quantum-input"
                  style={{
                    backgroundColor: 'var(--quantum-input)',
                    borderColor: 'var(--quantum-border)',
                    color: 'var(--quantum-text)'
                  }}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label 
                htmlFor="password"
                style={{ color: 'var(--quantum-text)' }}
              >
                Senha
              </Label>
              <div className="relative">
                <Lock 
                  className="absolute left-3 top-3 h-4 w-4"
                  style={{ color: 'var(--quantum-textSecondary)' }}
                />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mínimo 6 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 quantum-input"
                  style={{
                    backgroundColor: 'var(--quantum-input)',
                    borderColor: 'var(--quantum-border)',
                    color: 'var(--quantum-text)'
                  }}
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

            <div className="space-y-2">
              <Label 
                htmlFor="confirmPassword"
                style={{ color: 'var(--quantum-text)' }}
              >
                Confirmar senha
              </Label>
              <div className="relative">
                <Lock 
                  className="absolute left-3 top-3 h-4 w-4"
                  style={{ color: 'var(--quantum-textSecondary)' }}
                />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10 quantum-input"
                  style={{
                    backgroundColor: 'var(--quantum-input)',
                    borderColor: 'var(--quantum-border)',
                    color: 'var(--quantum-text)'
                  }}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
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
              {isLoading ? "Criando conta..." : "Criar conta"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <span 
              className="text-sm"
              style={{ color: 'var(--quantum-textSecondary)' }}
            >
              Já tem uma conta?{" "}
            </span>
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={onBackToLogin}
              style={{ color: 'var(--quantum-primary)' }}
            >
              Fazer login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};