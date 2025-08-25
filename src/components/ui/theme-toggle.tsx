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
    
    // Aplicar tema inicial
    applyTheme(savedTheme === 'light' ? false : true);
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    
    if (dark) {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.style.backgroundColor = '#1A1A2E';
      document.body.style.color = '#FFFFFF';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#F8FAFC';
      document.body.style.color = '#0F172A';
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
    
    // Salvar preferência
    localStorage.setItem('quantum-theme', newTheme ? 'dark' : 'light');
  };

  if (showLabel) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Tema</span>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="flex items-center gap-2 min-w-[100px] justify-start"
        >
          {isDark ? (
            <>
              <Moon className="h-4 w-4" />
              <span>Escuro</span>
            </>
          ) : (
            <>
              <Sun className="h-4 w-4" />
              <span>Claro</span>
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
      className="hover:bg-primary/20 transition-colors"
      title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};