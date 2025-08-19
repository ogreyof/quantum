"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeToggleProps {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  showLabel?: boolean;
}

export const ThemeToggle = ({ 
  variant = "ghost", 
  size = "icon", 
  showLabel = false 
}: ThemeToggleProps) => {
  const { themeName, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className="transition-all duration-200"
    >
      {themeName === 'night' ? (
        <>
          <Sun className="h-5 w-5" />
          {showLabel && <span className="ml-2">Modo Claro</span>}
        </>
      ) : (
        <>
          <Moon className="h-5 w-5" />
          {showLabel && <span className="ml-2">Modo Noite</span>}
        </>
      )}
    </Button>
  );
};