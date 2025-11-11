"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, DollarSign, TrendingUp, Activity, Eye, Download,
  UserCheck, UserX, Calendar, BarChart3, Settings, ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data
  const stats = {
    totalUsers: 1247,
    activeSubscriptions: 892,
    monthlyRevenue: 45680,
    conversionRate: 12.5,
    newUsersToday: 23,
    canceledToday: 3
  };

  const recentUsers = [
    { id: 1, name: "Maria Silva", email: "maria@email.com", status: "ativa", plan: "Premium", joined: "2024-01-15" },
    { id: 2, name: "João Santos", email: "joao@email.com", status: "cancelada", plan: "Basic", joined: "2024-01-14" },
    { id: 3, name: "Ana Costa", email: "ana@email.com", status: "ativa", plan: "Premium", joined: "2024-01-13" },
  ];

  const salesData = [
    { vendedor: "Carlos Mendes", vendas: 45, comissao: 2250, meta: 50 },
    { vendedor: "Lucia Ferreira", vendas: 38, comissao: 1900, meta: 40 },
    { vendedor: "Roberto Lima", vendas: 52, comissao: 2600, meta: 50 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5 text-white" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Painel Administrativo</h1>
              <p className="text-gray-400">Quantum Experience - Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar Dados
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="sales">Vendas</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Total de Usuários</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">{stats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-gray-600">+{stats.newUsersToday} hoje</p>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Assinaturas Ativas</CardTitle>
                  <UserCheck className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">{stats.activeSubscriptions.toLocaleString()}</div>
                  <p className="text-xs text-gray-600">-{stats.canceledToday} cancelamentos hoje</p>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Receita Mensal</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">R$ {stats.monthlyRevenue.toLocaleString()}</div>
                  <p className="text-xs text-gray-600">+12% vs mês anterior</p>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Taxa de Conversão</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">{stats.conversionRate}%</div>
                  <p className="text-xs text-gray-600">+2.1% vs mês anterior</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Usuários Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-black">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={user.status === 'ativa' ? 'default' : 'destructive'}>
                            {user.status}
                          </Badge>
                          <p className="text-xs text-gray-600 mt-1">{user.plan}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Performance de Vendas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salesData.map((seller, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-black">{seller.vendedor}</span>
                          <span className="text-sm text-gray-600">{seller.vendas}/{seller.meta}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-quantum h-2 rounded-full"
                            style={{ width: `${(seller.vendas / seller.meta) * 100}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-600">Comissão: R$ {seller.comissao}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Gerenciamento de Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-quantum rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{user.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-black">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-xs text-gray-500">Membro desde: {user.joined}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={user.status === 'ativa' ? 'default' : 'destructive'}>
                          {user.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Relatório de Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {salesData.map((seller, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-black">{seller.vendedor}</h3>
                          <p className="text-sm text-gray-600">Vendas este mês: {seller.vendas}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">R$ {seller.comissao}</p>
                          <p className="text-xs text-gray-600">Comissão</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-black">Meta: {seller.meta}</span>
                          <span className="text-black">{Math.round((seller.vendas / seller.meta) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-quantum h-3 rounded-full"
                            style={{ width: `${(seller.vendas / seller.meta) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Relatórios Disponíveis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Relatório de Vendas Mensal
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Relatório de Usuários
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Relatório Financeiro
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    Relatório de Atividade
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Exportar Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button className="w-full btn-quantum">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar Todos os Usuários (CSV)
                    </Button>
                    <Button className="w-full btn-quantum">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar Vendas (Excel)
                    </Button>
                    <Button className="w-full btn-quantum">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar Relatório Completo (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}