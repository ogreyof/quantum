"use client";

import { useState } from "react";
import { 
  Bell, 
  Volume2, 
  Moon, 
  Shield, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  User,
  CreditCard,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsPageProps {
  onClose: () => void;
}

// Interfaces específicas para cada tipo de item
interface BaseSettingsItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  subtitle: string;
}

interface ActionSettingsItem extends BaseSettingsItem {
  type: 'action';
  action: () => void;
  badge?: string;
}

interface ToggleSettingsItem extends BaseSettingsItem {
  type: 'toggle';
  toggle: {
    value: boolean;
    onChange: (value: boolean) => void;
  };
}

type SettingsItem = ActionSettingsItem | ToggleSettingsItem;

interface SettingsGroup {
  title: string;
  items: SettingsItem[];
}

export function SettingsPage({ onClose }: SettingsPageProps) {
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const settingsGroups: SettingsGroup[] = [
    {
      title: "Conta",
      items: [
        {
          type: 'action',
          icon: User,
          label: "Perfil",
          subtitle: "Editar informações pessoais",
          action: () => console.log("Abrir perfil")
        },
        {
          type: 'action',
          icon: CreditCard,
          label: "Assinatura",
          subtitle: "Gerenciar plano e pagamento",
          action: () => console.log("Abrir assinatura"),
          badge: "Ativo"
        }
      ]
    },
    {
      title: "Preferências",
      items: [
        {
          type: 'toggle',
          icon: Bell,
          label: "Notificações",
          subtitle: "Lembretes e atualizações",
          toggle: {
            value: notifications,
            onChange: setNotifications
          }
        },
        {
          type: 'toggle',
          icon: Volume2,
          label: "Som",
          subtitle: "Efeitos sonoros do app",
          toggle: {
            value: soundEnabled,
            onChange: setSoundEnabled
          }
        },
        {
          type: 'toggle',
          icon: Moon,
          label: "Modo Escuro",
          subtitle: "Aparência do aplicativo",
          toggle: {
            value: darkMode,
            onChange: setDarkMode
          }
        }
      ]
    },
    {
      title: "Dados",
      items: [
        {
          type: 'action',
          icon: Download,
          label: "Exportar Dados",
          subtitle: "Baixar histórico de sessões",
          action: () => console.log("Exportar dados")
        },
        {
          type: 'action',
          icon: Shield,
          label: "Privacidade",
          subtitle: "Política de privacidade e LGPD",
          action: () => console.log("Abrir privacidade")
        }
      ]
    },
    {
      title: "Suporte",
      items: [
        {
          type: 'action',
          icon: HelpCircle,
          label: "Ajuda",
          subtitle: "FAQ e tutoriais",
          action: () => console.log("Abrir ajuda")
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-quantum-dark z-50">
      <div className="max-w-md mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-quantum-muted">
          <h1 className="text-xl font-bold text-white">Configurações</h1>
          <button 
            onClick={onClose}
            className="p-2 bg-quantum-secondary rounded-full"
          >
            <ChevronRight size={20} className="text-gray-400 rotate-180" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* User Info */}
            <div className="quantum-card">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-quantum-primary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Maria Silva</h3>
                  <p className="text-sm text-gray-400">maria@email.com</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-400">Assinatura Ativa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Groups */}
            {settingsGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-3">
                <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  {group.title}
                </h2>
                
                <div className="space-y-2">
                  {group.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    
                    return (
                      <div key={itemIndex} className="quantum-card">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-quantum-muted rounded-lg">
                              <Icon size={20} className="text-quantum-accent" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-white">{item.label}</span>
                                {item.type === 'action' && item.badge && (
                                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-400">{item.subtitle}</p>
                            </div>
                          </div>
                          
                          {item.type === 'toggle' ? (
                            <button
                              onClick={() => item.toggle.onChange(!item.toggle.value)}
                              className={cn(
                                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                item.toggle.value ? "bg-quantum-primary" : "bg-quantum-muted"
                              )}
                            >
                              <span
                                className={cn(
                                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                  item.toggle.value ? "translate-x-6" : "translate-x-1"
                                )}
                              />
                            </button>
                          ) : (
                            <button 
                              onClick={item.action}
                              className="p-1"
                            >
                              <ChevronRight size={16} className="text-gray-400" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Logout */}
            <div className="pt-4">
              <button className="w-full quantum-card text-left hover:bg-red-500/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <LogOut size={20} className="text-red-400" />
                  </div>
                  <span className="font-medium text-red-400">Sair da Conta</span>
                </div>
              </button>
            </div>

            {/* App Info */}
            <div className="text-center text-xs text-gray-500 pb-4">
              <p>Quantum Experience v1.0.0</p>
              <p>© 2024 Quantum Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}