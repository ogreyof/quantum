"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeToggleProps {
  showLabel?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

export const ThemeToggle = ({ 
  showLabel = false, 
  variant = "ghost", 
  size = "icon" 
}: ThemeToggleProps) => {
  const { themeName, toggleTheme } = useTheme();
  const isDark = themeName === 'dark';

  if (showLabel) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm" style={{ color: 'var(--quantum-text)' }}>Tema</span>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="flex items-center gap-2"
          style={{
            borderColor: 'var(--quantum-border)',
            backgroundColor: 'var(--quantum-card)',
            color: 'var(--quantum-text)'
          }}
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
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className="hover:bg-opacity-20"
      style={{
        color: 'var(--quantum-text)',
        backgroundColor: variant === 'ghost' ? 'transparent' : 'var(--quantum-card)'
      }}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};