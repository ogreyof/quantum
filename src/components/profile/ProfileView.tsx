"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  User, Settings, Trophy, Gift, BarChart3, Users, 
  FileText, LogOut, Edit, Clock, Flame, Star, Target
} from "lucide-react";
import { UserProfile } from "@/types/quiz";

interface ProfileViewProps {
  userProfile: UserProfile;
  onBack: () => void;
  onLogout: () => void;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export const ProfileView = ({ userProfile, onBack, onLogout, onUpdateProfile }: ProfileViewProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'achievements' | 'settings'>('overview');

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Informações do Usuário */}
      <Card className="card-quantum">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userProfile.avatar} />
              <AvatarFallback className="bg-gradient-quantum text-white text-xl">
                {userProfile.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-card-foreground">{userProfile.name}</h2>
              <p className="text-muted-foreground">{userProfile.email}</p>
              <Badge className="bg-gradient-quantum text-white mt-2">
                Nível {userProfile.progress.level}
              </Badge>
            </div>
            <Button variant="outline" size="icon" className="btn-outline">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Progresso do Nível */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-card-foreground">Progresso do Nível</span>
              <span className="text-card-foreground">{userProfile.progress.points} pts</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-quantum h-2 rounded-full transition-all duration-300"
                style={{ width: `${(userProfile.progress.points % 1000) / 10}%` }}
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
            <div className="text-2xl font-bold text-card-foreground">{userProfile.progress.totalMinutes}</div>
            <p className="text-xs text-muted-foreground">Minutos Totais</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardContent className="p-4 text-center">
            <Flame className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{userProfile.progress.streak}</div>
            <p className="text-xs text-muted-foreground">Dias Seguidos</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{userProfile.progress.completedSessions}</div>
            <p className="text-xs text-muted-foreground">Sessões</p>
          </CardContent>
        </Card>

        <Card className="card-quantum">
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-card-foreground">{userProfile.progress.points}</div>
            <p className="text-xs text-muted-foreground">Pontos</p>
          </CardContent>
        </Card>
      </div>

      {/* Plano Recomendado */}
      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Trophy className="h-5 w-5 text-primary" />
            Seu Plano Atual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-card-foreground">{userProfile.recommendations.planoRecomendado.title}</h3>
              <Badge variant="outline" className="badge-outline">{userProfile.recommendations.planoRecomendado.duration}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {userProfile.recommendations.planoRecomendado.description}
            </p>
            <Button className="w-full btn-quantum">
              Continuar Plano
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-card-foreground">Aparência</CardTitle>
        </CardHeader>
        <CardContent>
          <ThemeToggle showLabel />
        </CardContent>
      </Card>

      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-card-foreground">Conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start btn-outline">
            <User className="h-4 w-4 mr-2" />
            Editar Dados Pessoais
          </Button>
          
          <Button variant="outline" className="w-full justify-start btn-outline">
            <Settings className="h-4 w-4 mr-2" />
            Trocar Senha
          </Button>
          
          <Button variant="outline" className="w-full justify-start btn-outline">
            <Users className="h-4 w-4 mr-2" />
            Comunidade
          </Button>
        </CardContent>
      </Card>

      <Card className="card-quantum">
        <CardHeader>
          <CardTitle className="text-card-foreground">Legal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="ghost" className="w-full justify-start text-card-foreground hover:bg-muted">
            <FileText className="h-4 w-4 mr-2" />
            Termos de Uso
          </Button>
          
          <Button variant="ghost" className="w-full justify-start text-card-foreground hover:bg-muted">
            <FileText className="h-4 w-4 mr-2" />
            Política de Privacidade
          </Button>
        </CardContent>
      </Card>

      <Card className="card-quantum border-destructive/50">
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
            className={activeTab === 'overview' ? 'btn-quantum' : 'btn-outline'}
          >
            Visão Geral
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('analytics')}
            className={activeTab === 'analytics' ? 'btn-quantum' : 'btn-outline'}
          >
            <BarChart3 className="h-4 w-4 mr-1" />
            Analytics
          </Button>
          <Button
            variant={activeTab === 'achievements' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('achievements')}
            className={activeTab === 'achievements' ? 'btn-quantum' : 'btn-outline'}
          >
            <Trophy className="h-4 w-4 mr-1" />
            Conquistas
          </Button>
          <Button
            variant={activeTab === 'settings' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('settings')}
            className={activeTab === 'settings' ? 'btn-quantum' : 'btn-outline'}
          >
            <Settings className="h-4 w-4 mr-1" />
            Configurações
          </Button>
        </div>

        {/* Conteúdo das Tabs */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </>
  );
};