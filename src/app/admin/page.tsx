"use client";

import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp,
  Plus,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  Eye,
  Settings,
  PlayCircle,
  Calendar,
  Music,
  UserCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AdminStats {
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  churnRate: number;
  totalPrograms: number;
  totalSounds: number;
  totalSellers: number;
  totalKiosks: number;
}

interface ContentItem {
  id: string;
  title: string;
  type: 'program' | 'sound' | 'plan';
  category: string;
  duration: number;
  status: 'active' | 'draft' | 'archived';
  createdAt: Date;
  views: number;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data para estatísticas
  const stats: AdminStats = {
    totalUsers: 15420,
    activeSubscriptions: 12350,
    monthlyRevenue: 184215.50,
    churnRate: 5.2,
    totalPrograms: 24,
    totalSounds: 18,
    totalSellers: 45,
    totalKiosks: 12
  };

  // Mock data para conteúdos
  const mockContent: ContentItem[] = [
    {
      id: '1',
      title: 'Alívio Cervical',
      type: 'program',
      category: 'cervical',
      duration: 10,
      status: 'active',
      createdAt: new Date('2024-01-10'),
      views: 2450
    },
    {
      id: '2',
      title: 'Drenagem Pernas Leves',
      type: 'program',
      category: 'drenagem',
      duration: 15,
      status: 'active',
      createdAt: new Date('2024-01-08'),
      views: 1890
    },
    {
      id: '3',
      title: 'Som de Chuva',
      type: 'sound',
      category: 'natureza',
      duration: 0,
      status: 'active',
      createdAt: new Date('2024-01-05'),
      views: 3200
    }
  ];

  const getTypeIcon = (type: ContentItem['type']) => {
    switch (type) {
      case 'program': return <PlayCircle size={16} className="text-purple-600" />;
      case 'sound': return <Music size={16} className="text-blue-600" />;
      case 'plan': return <Calendar size={16} className="text-green-600" />;
      default: return <PlayCircle size={16} />;
    }
  };

  const getStatusColor = (status: ContentItem['status']) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'draft': return 'text-yellow-600 bg-yellow-100';
      case 'archived': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
              <p className="text-gray-600 mt-1">Gerencie conteúdos, usuários e relatórios</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Download size={16} />
                Exportar Dados
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center gap-2">
                <Settings size={16} />
                Configurações
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="content">Conteúdos</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Usuários Totais</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +12% desde o mês passado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Assinaturas Ativas</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeSubscriptions.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    Taxa de conversão: 80%
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ {stats.monthlyRevenue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +8% desde o mês passado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Churn</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.churnRate}%</div>
                  <p className="text-xs text-muted-foreground">
                    -2% desde o mês passado
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-8 w-8 text-purple-600" />
                    <div>
                      <div className="text-2xl font-bold">{stats.totalPrograms}</div>
                      <div className="text-sm text-gray-600">Programas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Music className="h-8 w-8 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold">{stats.totalSounds}</div>
                      <div className="text-sm text-gray-600">Sons</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-green-600" />
                    <div>
                      <div className="text-2xl font-bold">{stats.totalSellers}</div>
                      <div className="text-sm text-gray-600">Vendedores</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-8 w-8 text-orange-600" />
                    <div>
                      <div className="text-2xl font-bold">{stats.totalKiosks}</div>
                      <div className="text-sm text-gray-600">Quiosques</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            {/* Content Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Gestão de Conteúdos</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center gap-2">
                <Plus size={16} />
                Novo Conteúdo
              </Button>
            </div>

            {/* Content Filters */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      placeholder="Buscar conteúdos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter size={16} />
                    Filtros
                  </Button>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option value="all">Todos os tipos</option>
                    <option value="program">Programas</option>
                    <option value="sound">Sons</option>
                    <option value="plan">Planos</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Content Table */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Conteúdo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tipo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Categoria
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duração
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Visualizações
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockContent.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            {getTypeIcon(item.type)}
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.title}</div>
                              <div className="text-sm text-gray-500">ID: {item.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="capitalize text-sm text-gray-900">{item.type}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="capitalize text-sm text-gray-900">{item.category}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {item.duration > 0 ? `${item.duration} min` : 'Loop'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status === 'active' ? 'Ativo' : item.status === 'draft' ? 'Rascunho' : 'Arquivado'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{item.views.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye size={14} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit size={14} />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="text-center py-12">
              <Users size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Gestão de Usuários</h3>
              <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="text-center py-12">
              <BarChart3 size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Relatórios Avançados</h3>
              <p className="text-gray-600">Funcionalidade em desenvolvimento</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}