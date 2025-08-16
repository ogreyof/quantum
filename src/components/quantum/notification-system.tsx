"use client";

import { useState, useEffect } from "react";
import { X, Bell, CheckCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'reminder';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationSystemProps {
  className?: string;
}

export function NotificationSystem({ className }: NotificationSystemProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  // Simular notificações automáticas
  useEffect(() => {
    const welcomeNotification: Notification = {
      id: '1',
      type: 'info',
      title: 'Bem-vindo ao Quantum Experience! 🎉',
      message: 'Sua jornada de bem-estar começa agora. Que tal fazer sua primeira sessão?',
      timestamp: new Date(),
      read: false
    };

    setNotifications([welcomeNotification]);

    // Simular notificação de lembrete após 30 segundos
    const timer = setTimeout(() => {
      const reminderNotification: Notification = {
        id: '2',
        type: 'reminder',
        title: 'Hora da sua sessão! ⏰',
        message: 'Que tal um relaxamento cervical de 10 minutos?',
        timestamp: new Date(),
        read: false
      };
      
      setNotifications(prev => [reminderNotification, ...prev]);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertCircle;
      case 'info': return Info;
      case 'reminder': return Bell;
      default: return Bell;
    }
  };

  const getColors = (type: Notification['type']) => {
    switch (type) {
      case 'success': return 'text-green-400 bg-green-500/20';
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      case 'info': return 'text-blue-400 bg-blue-500/20';
      case 'reminder': return 'text-quantum-accent bg-quantum-accent/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className={className}>
      {/* Notification Bell */}
      <button 
        onClick={() => setShowPanel(!showPanel)}
        className="relative p-2 bg-quantum-secondary rounded-full"
      >
        <Bell size={20} className="text-gray-400" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-quantum-accent rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-quantum-dark">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          </div>
        )}
      </button>

      {/* Notification Panel */}
      {showPanel && (
        <div className="absolute top-12 right-0 w-80 max-w-[calc(100vw-2rem)] bg-quantum-secondary border border-quantum-muted rounded-xl shadow-xl z-50">
          <div className="p-4 border-b border-quantum-muted">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">Notificações</h3>
              <button 
                onClick={() => setShowPanel(false)}
                className="p-1 hover:bg-quantum-muted rounded"
              >
                <X size={16} className="text-gray-400" />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center">
                <Bell size={32} className="text-gray-500 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Nenhuma notificação</p>
              </div>
            ) : (
              <div className="space-y-1">
                {notifications.map((notification) => {
                  const Icon = getIcon(notification.type);
                  const colors = getColors(notification.type);
                  
                  return (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-4 hover:bg-quantum-muted/50 transition-colors cursor-pointer",
                        !notification.read && "bg-quantum-primary/5"
                      )}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex gap-3">
                        <div className={cn("p-2 rounded-lg flex-shrink-0", colors)}>
                          <Icon size={16} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className={cn(
                              "font-medium text-sm",
                              notification.read ? "text-gray-300" : "text-white"
                            )}>
                              {notification.title}
                            </h4>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeNotification(notification.id);
                              }}
                              className="p-1 hover:bg-quantum-muted rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={12} className="text-gray-500" />
                            </button>
                          </div>
                          
                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.timestamp.toLocaleTimeString('pt-BR', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                        
                        {!notification.read && (
                          <div className="w-2 h-2 bg-quantum-accent rounded-full flex-shrink-0 mt-2"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-quantum-muted">
              <button 
                onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
                className="w-full text-xs text-quantum-accent hover:text-quantum-accent/80 transition-colors"
              >
                Marcar todas como lidas
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}