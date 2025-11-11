"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  User, Settings, Trophy, BarChart3, Edit, Clock, Flame, 
  Star, Target, LogOut, FileText, Users, Mail, Phone,
  Award, Crown, Zap, Heart
} from "lucide-react";

interface ProfileViewProps {
  onBack: () => void;
  onLogout: () => void;
}

const mockUserProfile = {
  id: '1',
  name: 'Maria Silva',
  email: 'maria@email.com',
  avatar: '',
  progress: {
    totalMinutes: 245,
    currentStreak: 5,
    longestStreak: 12,
    completedSessions: 18,
    points: 1250,
    level: 3,
    badges: ['first-week', 'streak-master', 'program-explorer']
  },
  subscription: {
    status: 'active' as const,
    plan: 'premium' as const,
    expiresAt: new Date('2024-12-31')
  },
  preferences: {
    theme: 'dark' as const,
    notifications: true,
    reminderTime: '19:00'
  }
};

const achievements = [
  {
    id: 'first-week',
    title: 'Primeira Semana',
    description: 'Complete 7 dias seguidos',
    icon: Trophy,
    color: 'text-yellow-500',
    unlocked: true
  },
  {
    id: 'streak-master',
    title: 'Mestre da Sequência',
    description: 'Mantenha 30 dias seguidos',
    icon: Flame,
    color: 'text-orange-500',
    unlocked: false
  },
  {
    id: 'program-explorer',
    title: 'Explorador',
    description: 'Teste 10 programas diferentes',
    icon: Star,
    color: 'text-purple-500',
    unlocked: true
  },
  {
    id: 'level-master',
    title: 'Mestre Quantum',
    description: 'Alcance o nível 10',
    icon: Crown,
    color: 'text-blue-500',
    unlocked: false
  }
];

export const ProfileView = ({ onBack, onLogout }: ProfileViewProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'achievements' | 'settings'>('overview');
  const [showEditProfile, setShowEditProfile] = useState(false);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Informações do Usuário */}
      <Card className="card-quantum">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={mockUserProfile.avatar} />
              <AvatarFallback className="bg-gradient-quantum text-white text-xl">
                {mockUserProfile.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-black">{mockUserProfile.name}</h2>
              <p className="text-gray-600">{mockUserProfile.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-gradient-quantum text-white">
                  Nível {mockUserProfile.progress.level}
                </Badge>
                <Badge variant="outline">
                  {mockUserProfile.subscription.plan.toUpperCase()}
                </Badge>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setShowEditProfile(true)}
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Progresso do Nível */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-black">Progresso do Nível</span>
              <span className="text-black">{mockUserProfile.progress.points} pts</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-quantum h-2 rounded-full transition-all duration-300"
                style={{ width: `${(mockUserProfile.progress.points % 1000) / 10}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="card-quantum">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">{mockUserProfile.progress.totalMinutes}</div>
            <p className="text-xs text-gray-600">Minutos Totais</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardContent className="p-4 text-center">
            <Flame className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">{mockUserProfile.progress.currentStreak}</div>
            <p className="text-xs text-gray-600">Dias Seguidos</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">{mockUserProfile.progress.completedSessions}</div>
            <p className="text-xs text-gray-600">Sessões</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-black">{mockUserProfile.progress.points}</div>
            <p className="text-xs text-gray-600">Pontos</p>
          </CardContent>
        </Card>
      </div>

      {/* Assinatura */}
      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Crown className="h-5 w-5 text-primary" />
            Sua Assinatura
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-black">Plano:</span>
              <Badge className="bg-gradient-quantum text-white">
                {mockUserProfile.subscription.plan.toUpperCase()}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black">Status:</span>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Ativo
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black">Renovação:</span>
              <span className="text-gray-600">31/12/2024</span>
            </div>
            <Button variant="outline" className="w-full">
              Gerenciar Assinatura
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Estatísticas da Semana</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-black">Sessões esta semana</span>
              <span className="font-bold text-black">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">Tempo total</span>
              <span className="font-bold text-black">67 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">Média por dia</span>
              <span className="font-bold text-black">13.4 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black">Categoria favorita</span>
              <span className="font-bold text-black">Relaxamento</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Progresso Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-4xl font-bold text-primary mb-2">
              {mockUserProfile.progress.totalMinutes}
            </div>
            <p className="text-gray-600">minutos este mês</p>
            <div className="mt-4 text-sm text-gray-600">
              +23% em relação ao mês anterior
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Histórico de Atividades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-black">Drenagem de Pernas</p>
                <p className="text-sm text-gray-600">Hoje, 19:30</p>
              </div>
              <Badge variant="outline">15 min</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-black">Relaxamento Profundo</p>
                <p className="text-sm text-gray-600">Ontem, 21:00</p>
              </div>
              <Badge variant="outline">12 min</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-black">Alívio Cervical</p>
                <p className="text-sm text-gray-600">Ontem, 08:15</p>
              </div>
              <Badge variant="outline">10 min</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Conquistas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.id} 
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    achievement.unlocked 
                      ? 'bg-gradient-quantum-subtle border border-primary/20' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <IconComponent 
                    className={`h-8 w-8 ${
                      achievement.unlocked ? achievement.color : 'text-gray-400'
                    }`} 
                  />
                  <div className="flex-1">
                    <h3 className={`font-semibold ${
                      achievement.unlocked ? 'text-black' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && (
                    <Badge className="bg-green-100 text-green-700">
                      Desbloqueado
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Próximas Conquistas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-black">Sequência de 10 dias</span>
              <span className="text-sm text-gray-600">5/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-quantum h-2 rounded-full w-1/2"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Aparência</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-black">Tema</h3>
              <p className="text-sm text-gray-600">Escolha entre modo claro ou escuro</p>
            </div>
            <ThemeToggle showLabel />
          </div>
        </CardContent>
      </Card>

      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => setShowEditProfile(true)}
          >
            <User className="h-4 w-4 mr-2" />
            Editar Dados Pessoais
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Trocar Senha
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <Users className="h-4 w-4 mr-2" />
            Suporte
          </Button>
        </CardContent>
      </Card>

      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-black">Legal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="h-4 w-4 mr-2" />
            Termos de Uso
          </Button>
          
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="h-4 w-4 mr-2" />
            Política de Privacidade
          </Button>
        </CardContent>
      </Card>

      <Card className="card-quantum border-red-200">
        <CardContent className="p-4">
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={onLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sair da Conta
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  if (showEditProfile) {
    return (
      <>
        <CategoryHeader 
          title="Editar Perfil" 
          subtitle="Atualize suas informações" 
          onBack={() => setShowEditProfile(false)} 
        />
        
        <div className="p-6 space-y-6">
          <Card className="card-quantum">
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-quantum text-white text-2xl">
                    {mockUserProfile.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  Alterar Foto
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Nome</label>
                  <input 
                    type="text" 
                    defaultValue={mockUserProfile.name}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Email</label>
                  <input 
                    type="email" 
                    defaultValue={mockUserProfile.email}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    placeholder="(11) 99999-9999"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1 btn-quantum">
                  Salvar Alterações
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowEditProfile(false)}
                >
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <CategoryHeader 
        title="Perfil" 
        subtitle="Gerencie sua conta e progresso" 
        onBack={onBack} 
      />
      
      <div className="p-6">
        {/* Tabs de Navegação */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <Button
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('overview')}
            className={activeTab === 'overview' ? 'bg-gradient-quantum text-white' : ''}
          >
            Visão Geral
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('analytics')}
            className={activeTab === 'analytics' ? 'bg-gradient-quantum text-white' : ''}
          >
            <BarChart3 className="h-4 w-4 mr-1" />
            Analytics
          </Button>
          <Button
            variant={activeTab === 'achievements' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('achievements')}
            className={activeTab === 'achievements' ? 'bg-gradient-quantum text-white' : ''}
          >
            <Trophy className="h-4 w-4 mr-1" />
            Conquistas
          </Button>
          <Button
            variant={activeTab === 'settings' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('settings')}
            className={activeTab === 'settings' ? 'bg-gradient-quantum text-white' : ''}
          >
            <Settings className="h-4 w-4 mr-1" />
            Configurações
          </Button>
        </div>

        {/* Conteúdo das Tabs */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'achievements' && renderAchievements()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </>
  );
};