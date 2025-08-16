"use client";

import { useState } from "react";
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AnalyticsData {
  period: string;
  sessions: number;
  minutes: number;
  users: number;
  completion: number;
}

interface ProgramAnalytics {
  id: string;
  name: string;
  sessions: number;
  avgRating: number;
  completion: number;
  category: string;
}

interface AdvancedAnalyticsProps {
  className?: string;
}

export function AdvancedAnalytics({ className }: AdvancedAnalyticsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('sessions');

  // Mock data para analytics
  const analyticsData: AnalyticsData[] = [
    { period: 'Seg', sessions: 45, minutes: 520, users: 38, completion: 85 },
    { period: 'Ter', sessions: 52, minutes: 640, users: 42, completion: 88 },
    { period: 'Qua', sessions: 38, minutes: 450, users: 35, completion: 82 },
    { period: 'Qui', sessions: 61, minutes: 720, users: 48, completion: 90 },
    { period: 'Sex', sessions: 55, minutes: 680, users: 45, completion: 87 },
    { period: 'Sáb', sessions: 72, minutes: 890, users: 58, completion: 92 },
    { period: 'Dom', sessions: 68, minutes: 820, users: 55, completion: 89 }
  ];

  const programAnalytics: ProgramAnalytics[] = [
    { id: '1', name: 'Alívio Cervical', sessions: 156, avgRating: 4.8, completion: 92, category: 'cervical' },
    { id: '2', name: 'Drenagem Pernas', sessions: 134, avgRating: 4.7, completion: 88, category: 'drenagem' },
    { id: '3', name: 'Sono Profundo', sessions: 98, avgRating: 4.9, completion: 95, category: 'sono' },
    { id: '4', name: 'Relax Total', sessions: 87, avgRating: 4.6, completion: 85, category: 'relax' },
    { id: '5', name: 'Alívio Lombar', sessions: 76, avgRating: 4.7, completion: 89, category: 'lombar' }
  ];

  const periods = [
    { id: '7d', label: '7 dias' },
    { id: '30d', label: '30 dias' },
    { id: '90d', label: '90 dias' },
    { id: '1y', label: '1 ano' }
  ];

  const metrics = [
    { id: 'sessions', label: 'Sessões', icon: Activity },
    { id: 'minutes', label: 'Minutos', icon: Clock },
    { id: 'users', label: 'Usuários', icon: Users },
    { id: 'completion', label: 'Conclusão', icon: Target }
  ];

  const getMetricValue = (data: AnalyticsData, metric: string) => {
    switch (metric) {
      case 'sessions': return data.sessions;
      case 'minutes': return data.minutes;
      case 'users': return data.users;
      case 'completion': return data.completion;
      default: return 0;
    }
  };

  const maxValue = Math.max(...analyticsData.map(d => getMetricValue(d, selectedMetric)));

  const totalSessions = analyticsData.reduce((sum, d) => sum + d.sessions, 0);
  const totalMinutes = analyticsData.reduce((sum, d) => sum + d.minutes, 0);
  const avgCompletion = analyticsData.reduce((sum, d) => sum + d.completion, 0) / analyticsData.length;
  const activeUsers = Math.max(...analyticsData.map(d => d.users));

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Analytics Avançado</h2>
        <div className="flex gap-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={cn(
                "px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200",
                selectedPeriod === period.id
                  ? "bg-quantum-primary text-white"
                  : "bg-quantum-secondary text-gray-400 hover:text-white"
              )}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="quantum-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity size={20} className="text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{totalSessions}</div>
              <div className="text-sm text-gray-400">Sessões</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-400">+12% vs período anterior</div>
        </div>

        <div className="quantum-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Clock size={20} className="text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{Math.round(totalMinutes / 60)}h</div>
              <div className="text-sm text-gray-400">Tempo Total</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-400">+8% vs período anterior</div>
        </div>

        <div className="quantum-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Users size={20} className="text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{activeUsers}</div>
              <div className="text-sm text-gray-400">Usuários Ativos</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-400">+15% vs período anterior</div>
        </div>

        <div className="quantum-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Target size={20} className="text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{avgCompletion.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Taxa Conclusão</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-400">+3% vs período anterior</div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="quantum-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Tendências</h3>
          <div className="flex gap-2">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <button
                  key={metric.id}
                  onClick={() => setSelectedMetric(metric.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200",
                    selectedMetric === metric.id
                      ? "bg-quantum-primary text-white"
                      : "bg-quantum-secondary text-gray-400 hover:text-white"
                  )}
                >
                  <Icon size={14} />
                  {metric.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Simple Bar Chart */}
        <div className="space-y-4">
          {analyticsData.map((data, index) => {
            const value = getMetricValue(data, selectedMetric);
            const percentage = (value / maxValue) * 100;
            
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-sm text-gray-400 text-right">
                  {data.period}
                </div>
                <div className="flex-1 relative">
                  <div className="w-full bg-quantum-muted rounded-full h-6">
                    <div 
                      className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ width: `${percentage}%` }}
                    >
                      <span className="text-white text-xs font-medium">
                        {selectedMetric === 'completion' ? `${value}%` : value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Performance */}
      <div className="quantum-card">
        <h3 className="text-lg font-semibold text-white mb-4">Performance por Programa</h3>
        
        <div className="space-y-4">
          {programAnalytics.map((program, index) => (
            <div key={program.id} className="flex items-center gap-4 p-3 bg-quantum-muted rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{program.name}</h4>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400">{program.sessions} sessões</span>
                    <span className="text-yellow-400">★ {program.avgRating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-16">Conclusão:</span>
                  <div className="flex-1 bg-quantum-dark rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${program.completion}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-white w-8">{program.completion}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="quantum-card border-2 border-quantum-accent/30">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-quantum-accent/20 rounded-lg">
            <TrendingUp size={20} className="text-quantum-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Insights Automáticos</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Programas de sono têm maior taxa de conclusão (95%)</li>
              <li>• Fins de semana apresentam 23% mais sessões</li>
              <li>• Usuários completam em média 2.3 sessões por semana</li>
              <li>• Drenagem linfática é o programa mais popular</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}