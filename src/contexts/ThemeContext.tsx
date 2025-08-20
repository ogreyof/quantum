"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes, ThemeName } from '@/lib/themes';

// Definindo o tipo Theme como union type
type Theme = typeof themes[ThemeName];

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  toggleTheme: () => void;
  setTheme: (themeName: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
}

export const ThemeProvider = ({ children, defaultTheme = 'night' }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    // Carregar tema salvo do localStorage
    const savedTheme = localStorage.getItem('quantum-theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Salvar tema no localStorage
    localStorage.setItem('quantum-theme', themeName);
    
    // Aplicar variáveis CSS no documento
    const theme = themes[themeName];
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--quantum-${key}`, value);
    });

    // Aplicar classe do tema no body
    document.body.className = `theme-${themeName}`;
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName(prev => prev === 'night' ? 'light' : 'night');
  };

  const setTheme = (newTheme: ThemeName) => {
    setThemeName(newTheme);
  };

  const value: ThemeContextType = {
    theme: themes[themeName],
    themeName,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};