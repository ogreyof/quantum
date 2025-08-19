"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeToggleProps {
  showLabel?: boolean;
}

export function ThemeToggle({ showLabel = false }: ThemeToggleProps) {
  const { themeName, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size={showLabel ? "default" : "icon"}
      onClick={toggleTheme}
      className="hover:bg-primary/20 transition-colors"
    >
      {themeName === 'night' ? (
        <>
          <Sun className="h-4 w-4" />
          {showLabel && <span className="ml-2">Modo Claro</span>}
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" />
          {showLabel && <span className="ml-2">Modo Noite</span>}
        </>
      )}
    </Button>
  );
}