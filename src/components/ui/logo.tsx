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
    sm: { image: 'w-6 h-auto', text: 'text-sm' },
    md: { image: 'w-8 h-auto', text: 'text-base' },
    lg: { image: 'w-12 h-auto', text: 'text-xl' },
    xl: { image: 'w-16 h-auto', text: 'text-2xl' }
  };

  const imageSize = sizes[size].image;
  const textSize = sizes[size].text;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://syemidcnxudvvxljmily.supabase.co/storage/v1/object/public/media/app-1/images/1762905820356-7ycjwxrq1.png"
        alt="Quantum Logo"
        className={imageSize}
      />
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