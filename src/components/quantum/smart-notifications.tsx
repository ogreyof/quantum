"use client";

import { useState, useEffect } from "react";
import { Bell, Clock, X, Settings, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SmartNotification {
  id: string;
  type: 'daily' | 'reminder' | 'streak' | 'special';
  title: string;
  message: string;
  time: string;
  enabled: boolean;
  icon: string;
}

interface SmartNotificationsProps {
  userSchedule: string;
  lastUsed?: Date;
  currentStreak: number;
  className?: string;
}

export function SmartNotifications({ 
  userSchedule, 
  lastUsed, 
  currentStreak, 
  className 
}: SmartNotificationsProps) {
  const [notifications, setNotifications] = useState<SmartNotification[]>([]);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const generateNotifications = () => {
      const baseNotifications: SmartNotification[] = [
        {
          id: 'morning',
          type: 'daily',
          title: 'Bom dia! 🌅',
          message: '5 minutos de cervical para começar sem tensão',
          time: '08:00',
          enabled: userSchedule === 'morning',
          icon: '🌅'
        },
        {
          id: 'lunch',
          type: 'daily',
          title: 'Pausa inteligente ☀️',
          message: 'Vamos soltar os nódulos agora?',
          time: '12:30',
          enabled: userSchedule === 'lunch',
          icon: '☀️'
        },
        {
          id: 'evening',
          type: 'daily',
          title: 'Drenagem/estética 🌙',
          message: 'Hora da sua sessão facial ou capilar',
          time: '19:30',
          enabled: userSchedule === 'evening',
          icon: '🌙'
        },
        {
          id: 'relax',
          type: 'daily',
          title: 'Relax 😴',
          message: '5 minutos guiados para dormir melhor',
          time: '22:00',
          enabled: true,
          icon: '😴'
        }
      ];

      // Adicionar notificações especiais baseadas no uso
      const specialNotifications: SmartNotification[] = [];

      if (lastUsed) {
        const daysSinceLastUse = Math.floor((Date.now() - lastUsed.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastUse >= 2 && daysSinceLastUse < 7) {
          specialNotifications.push({
            id: 'gentle-reminder',
            type: 'reminder',
            title: 'Tudo bem falhar 💙',
            message: 'Bora 5 min hoje?',
            time: '18:00',
            enabled: true,
            icon: '💙'
          });
        }

        if (daysSinceLastUse >= 7) {
          specialNotifications.push({
            id: 'comeback',
            type: 'special',
            title: 'Sentimos sua falta! 🎯',
            message: 'Que tal reiniciar com um programa novo?',
            time: '19:00',
            enabled: true,
            icon: '🎯'
          });
        }
      }

      // Notificações de streak
      if (currentStreak > 0 && currentStreak % 7 === 0) {
        specialNotifications.push({
          id: 'streak-celebration',
          type: 'streak',
          title: `${currentStreak} dias seguidos! 🔥`,
          message: 'Você está arrasando! Continue assim!',
          time: '20:00',
          enabled: true,
          icon: '🔥'
        });
      }

      return [...baseNotifications, ...specialNotifications];
    };

    setNotifications(generateNotifications());
  }, [userSchedule, lastUsed, currentStreak]);

  const toggleNotification = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
      )
    );
  };

  const enabledNotifications = notifications.filter(n => n.enabled);

  if (showSettings) {
    return (
      <div className="fixed inset-0 bg-quantum-dark z-50">
        <div className="max-w-md mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-quantum-muted">
            <h1 className="text-lg font-bold text-white">Configurar Notificações</h1>
            <button 
              onClick={() => setShowSettings(false)}
              className="p-2 bg-quantum-secondary rounded-full"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="quantum-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{notification.icon}</span>
                    <div>
                      <h3 className="font-medium text-white">{notification.title}</h3>
                      <p className="text-sm text-gray-400">{notification.message}</p>
                      <p className="text-xs text-quantum-accent">{notification.time}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleNotification(notification.id)}
                    className={cn(
                      "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                      notification.enabled ? "bg-quantum-primary" : "bg-quantum-muted"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                        notification.enabled ? "translate-x-6" : "translate-x-1"
                      )}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Notificações Inteligentes</h2>
        <button 
          onClick={() => setShowSettings(true)}
          className="p-2 bg-quantum-secondary rounded-full"
        >
          <Settings size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Active Notifications */}
      <div className="quantum-card">
        <div className="flex items-center gap-3 mb-4">
          <Bell size={20} className="text-quantum-accent" />
          <div>
            <h3 className="font-medium text-white">Lembretes Ativos</h3>
            <p className="text-sm text-gray-400">{enabledNotifications.length} notificações configuradas</p>
          </div>
        </div>

        <div className="space-y-3">
          {enabledNotifications.slice(0, 3).map((notification) => (
            <div key={notification.id} className="flex items-center gap-3 p-3 bg-quantum-muted rounded-lg">
              <span className="text-lg">{notification.icon}</span>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">{notification.title}</div>
                <div className="text-gray-400 text-xs">{notification.time} - {notification.message}</div>
              </div>
              <CheckCircle size={16} className="text-green-400" />
            </div>
          ))}
        </div>

        {enabledNotifications.length > 3 && (
          <button 
            onClick={() => setShowSettings(true)}
            className="w-full mt-3 text-quantum-accent text-sm"
          >
            Ver todas ({enabledNotifications.length})
          </button>
        )}
      </div>

      {/* Smart Features */}
      <div className="quantum-card border-2 border-quantum-primary/30">
        <h3 className="font-medium text-white mb-3">Recursos Inteligentes</h3>
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-quantum-accent rounded-full"></div>
            <span>Lembretes adaptativos baseados no seu uso</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-quantum-accent rounded-full"></div>
            <span>Notificações suaves se você falhar alguns dias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-quantum-accent rounded-full"></div>
            <span>Celebração de conquistas e streaks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-quantum-accent rounded-full"></div>
            <span>Sugestões personalizadas de programas</span>
          </div>
        </div>
      </div>
    </div>
  );
}