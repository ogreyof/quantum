"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const { themeName } = useTheme();
  
  const sizes = {
    sm: { icon: 'w-6 h-6', text: 'text-sm' },
    md: { icon: 'w-8 h-8', text: 'text-base' },
    lg: { icon: 'w-12 h-12', text: 'text-xl' },
    xl: { icon: 'w-16 h-16', text: 'text-2xl' }
  };

  const iconSize = sizes[size].icon;
  const textSize = sizes[size].text;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div 
        className={`${iconSize} rounded-full flex items-center justify-center`}
        style={{ 
          background: 'var(--quantum-gradient)',
          boxShadow: themeName === 'dark' 
            ? '0 4px 20px rgba(123, 97, 255, 0.3)' 
            : '0 4px 20px rgba(108, 77, 255, 0.2)'
        }}
      >
        <span 
          className={`font-bold text-white ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-xl'}`}
        >
          Q
        </span>
      </div>
      {showText && (
        <span 
          className={`font-bold ${textSize}`}
          style={{ color: 'var(--quantum-text)' }}
        >
          Quantum
        </span>
      )}
    </div>
  );
};