"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeToggleProps {
  showLabel?: boolean;
}

export const ThemeToggle = ({ showLabel = false }: ThemeToggleProps) => {
  const { themeName, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size={showLabel ? "default" : "icon"}
      onClick={toggleTheme}
      className="hover:bg-primary/20"
    >
      {themeName === 'dark' ? (
        <Sun className="h-5 w-5" style={{ color: 'var(--quantum-text)' }} />
      ) : (
        <Moon className="h-5 w-5" style={{ color: 'var(--quantum-text)' }} />
      )}
      {showLabel && (
        <span className="ml-2" style={{ color: 'var(--quantum-text)' }}>
          {themeName === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
        </span>
      )}
    </Button>
  );
};