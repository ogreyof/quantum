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
    <div className="fixed bottom-0 left-0 right-0 bg-quantum-secondary border-t border-quantum-muted z-50">
      <div className="flex justify-around items-center py-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200",
                isActive 
                  ? "text-quantum-primary" 
                  : "text-gray-400 hover:text-white"
              )}
            >
              <Icon 
                size={20} 
                className={cn(
                  "mb-1",
                  isActive && "animate-pulse-glow"
                )} 
              />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}