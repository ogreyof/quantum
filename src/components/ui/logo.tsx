"use client";

import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const { themeName } = useTheme();
  
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10", 
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center`}
        style={{ background: 'var(--quantum-gradient)' }}
      >
        <span 
          className={`${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'} font-bold text-white`}
        >
          Q
        </span>
      </div>
      {showText && (
        <span 
          className={`${textSizes[size]} font-bold`}
          style={{ color: 'var(--quantum-text)' }}
        >
          Quantum
        </span>
      )}
    </div>
  );
};