"use client";

import { Home, Play, Calendar, Music, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'programs', label: 'Programas', icon: Play },
    { id: 'plans', label: 'Planos', icon: Calendar },
    { id: 'sounds', label: 'Sons', icon: Music },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="quantum-glass border-t border-quantum-border/30">
        <div className="flex justify-around items-center py-2 max-w-md mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "quantum-nav-item flex flex-col items-center min-w-[60px] transition-all duration-300",
                  isActive 
                    ? "active text-white" 
                    : "text-quantum-text-muted hover:text-quantum-text"
                )}
              >
                <Icon 
                  size={20} 
                  className={cn(
                    "mb-1 transition-all duration-300",
                    isActive && "animate-pulse-glow"
                  )} 
                />
                <span className={cn(
                  "text-xs font-medium transition-all duration-300",
                  isActive ? "opacity-100" : "opacity-70"
                )}>
                  {tab.label}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-quantum-accent rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}