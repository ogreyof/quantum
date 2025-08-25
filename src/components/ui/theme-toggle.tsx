"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  showLabel?: boolean;
}

export const ThemeToggle = ({ showLabel = false }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(true); // Começar com modo escuro

  useEffect(() => {
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('quantum-theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Aplicar tema
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1A1A2E';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#F8FAFC';
    }
    
    // Salvar preferência
    localStorage.setItem('quantum-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (showLabel) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-black">Tema</span>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="flex items-center gap-2"
        >
          {isDark ? (
            <>
              <Moon className="h-4 w-4" />
              Escuro
            </>
          ) : (
            <>
              <Sun className="h-4 w-4" />
              Claro
            </>
          )}
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hover:bg-primary/20"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-black" />
      )}
    
    </Button>
  );
};