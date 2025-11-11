"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  DollarSign, Users, Target, TrendingUp, Link as LinkIcon, 
  Copy, Share, Calendar, ArrowLeft, Plus, Eye, UserPlus, 
  CheckCircle, Clock, Mail, Phone
} from "lucide-react";
import Link from "next/link";

export default function VendedorPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [linkPersonalizado, setLinkPersonalizado] = useState("");
  const [showAddClient, setShowAddClient] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    plan: ''
  });

  // Mock data do vendedor
  const vendedorData = {
    nome: "Carlos Mendes",
    id: "VEND001",
    vendas: 45,
    meta: 50,
    comissao: 2250,
    comissaoTotal: 18750,
    conversao: 8.5,
    linkVendas: "https://quantum.app/v/carlos-mendes",
    linkTrial: "https://quantum.app/trial/carlos-mendes"
  };

  const vendasRecentes = [
    { 
      id: 1, 
      cliente: "Maria Silva", 
      email: "maria@email.com",
      plano: "Premium", 
      valor: 97, 
      data: "2024-01-15", 
      status: "ativa",
      comissao: 48.50
    },
    { 
      id: 2, 
      cliente: "João Santos", 
      email: "joao@email.com",
      plano: "Basic", 
      valor: 47, 
      data: "2024-01-14", 
      status: "ativa",
      comissao: 23.50
    },
    { 
      id: 3, 
      cliente: "Ana Costa", 
      email: "ana@email.com",
      plano: "Premium", 
      valor: 97, 
      data: "2024-01-13", 
      status: "pendente",
      comissao: 48.50
    },
  ];

  const trialsAtivos = [
    {
      id: 1,
      cliente: "Pedro Lima",
      email: "pedro@email.com",
      dataInicio: "2024-01-20",
      diasRestantes: 25,
      status: "ativo"
    },
    {
      id: 2,
      cliente: "Lucia Ferreira",
      email: "lucia@email.com",
      dataInicio: "2024-01-18",
      diasRestantes: 23,
      status: "ativo"
    }
  ];

  const metas = {
    mensal: 50,
    atual: 45,
    faltam: 5,
    diasRestantes: 8
  };

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    alert("Link copiado!");
  };

  const gerarLinkPersonalizado = () => {
    if (linkPersonalizado) {
      const novoLink = `https://quantum.app/v/${linkPersonalizado}`;
      alert(`Link personalizado gerado: ${novoLink}`);
      setLinkPersonalizado("");
    }
  };

  const handleAddClient = () => {
    if (newClient.name && newClient.email && newClient.plan) {
      alert(`Cliente ${newClient.name} adicionado com sucesso!`);
      setNewClient({ name: '', email: '', phone: '', plan: '' });
      setShowAddClient(false);
    }
  };

  const gerarLinkTrial = () => {
    copyLink(vendedorData.linkTrial);
    alert("Link de trial de 30 dias copiado!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5 text-white" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Painel do Vendedor</h1>
              <p className="text-gray-400">Bem-vindo, {vendedorData.nome}!</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">ID: {vendedorData.id}</p>
            <Badge className="bg-gradient-quantum text-white">Vendedor Ativo</Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="vendas">Vendas</TabsTrigger>
            <TabsTrigger value="trials">Trials</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
            <TabsTrigger value="comissoes">Comissões</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Vendas Este Mês</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">{vendedorData.vendas}</div>
                  <p className="text-xs text-gray-600">Meta: {vendedorData.meta}</p>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Comissão Mensal</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">R$ {vendedorData.comissao}</div>
                  <p className="text-xs text-gray-600">+15% vs mês anterior</p>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Taxa de Conversão</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">{vendedorData.conversao}%</div>
                  <p className="text-xs text-gray-600">Acima da média</p>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-black">Trials Ativos</CardTitle>
                  <Clock className="h-4 w-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">{trialsAtivos.length}</div>
                  <p className="text-xs text-gray-600">Potenciais conversões</p>
                </CardContent>
              </Card>
            </div>

            {/* Meta Progress */}
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Progresso da Meta Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-black">Meta: {metas.mensal} vendas</span>
                    <span className="text-black">{metas.atual}/{metas.mensal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-gradient-quantum h-4 rounded-full transition-all duration-300"
                      style={{ width: `${(metas.atual / metas.mensal) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Faltam {metas.faltam} vendas</span>
                    <span>{metas.diasRestantes} dias restantes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ações Rápidas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full btn-quantum"
                    onClick={gerarLinkTrial}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Gerar Link Trial 30 Dias
                  </Button>
                  
                  <Dialog open={showAddClient} onOpenChange={setShowAddClient}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Adicionar Cliente Manual
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Adicionar Novo Cliente</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input
                            id="name"
                            value={newClient.name}
                            onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                            placeholder="Nome do cliente"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            value={newClient.email}
                            onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                            placeholder="email@exemplo.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Telefone (opcional)</Label>
                          <Input
                            id="phone"
                            value={newClient.phone}
                            onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                        <div>
                          <Label htmlFor="plan">Plano</Label>
                          <Select value={newClient.plan} onValueChange={(value) => setNewClient({...newClient, plan: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o plano" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basic">Basic - R$ 47</SelectItem>
                              <SelectItem value="premium">Premium - R$ 97</SelectItem>
                              <SelectItem value="annual">Anual - R$ 497</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button onClick={handleAddClient} className="w-full btn-quantum">
                          Adicionar Cliente
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" className="w-full">
                    <Share className="h-4 w-4 mr-2" />
                    Compartilhar Links
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Trials Próximos do Vencimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trialsAtivos.filter(trial => trial.diasRestantes <= 7).map((trial) => (
                      <div key={trial.id} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-black">{trial.cliente}</p>
                            <p className="text-sm text-gray-600">{trial.diasRestantes} dias restantes</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-1" />
                            Contatar
                          </Button>
                        </div>
                      </div>
                    ))}
                    {trialsAtivos.filter(trial => trial.diasRestantes <= 7).length === 0 && (
                      <p className="text-gray-600 text-center py-4">Nenhum trial próximo do vencimento</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vendas" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Histórico de Vendas</h2>
              <Dialog open={showAddClient} onOpenChange={setShowAddClient}>
                <DialogTrigger asChild>
                  <Button className="btn-quantum">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Venda
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>

            <Card className="card-quantum">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {vendasRecentes.map((venda) => (
                    <div key={venda.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-quantum rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{venda.cliente.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-black">{venda.cliente}</p>
                          <p className="text-sm text-gray-600">{venda.email}</p>
                          <p className="text-xs text-gray-500">Vendido em: {venda.data}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">R$ {venda.valor}</p>
                        <p className="text-sm text-gray-600">Comissão: R$ {venda.comissao}</p>
                        <Badge variant={venda.status === 'ativa' ? 'default' : 'secondary'}>
                          {venda.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trials" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Trials Ativos</h2>
              <Button className="btn-quantum" onClick={gerarLinkTrial}>
                <Plus className="h-4 w-4 mr-2" />
                Gerar Link Trial
              </Button>
            </div>

            <Card className="card-quantum">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {trialsAtivos.map((trial) => (
                    <div key={trial.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <Clock className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-black">{trial.cliente}</p>
                          <p className="text-sm text-gray-600">{trial.email}</p>
                          <p className="text-xs text-gray-500">Iniciado em: {trial.dataInicio}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent">{trial.diasRestantes} dias</p>
                        <p className="text-sm text-gray-600">restantes</p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="links" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Link de Vendas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      value={vendedorData.linkVendas} 
                      readOnly 
                      className="flex-1"
                    />
                    <Button onClick={() => copyLink(vendedorData.linkVendas)} variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full btn-quantum">
                    <Share className="h-4 w-4 mr-2" />
                    Compartilhar Link de Vendas
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Link Trial 30 Dias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      value={vendedorData.linkTrial} 
                      readOnly 
                      className="flex-1"
                    />
                    <Button onClick={() => copyLink(vendedorData.linkTrial)} variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full btn-quantum">
                    <Share className="h-4 w-4 mr-2" />
                    Compartilhar Trial Gratuito
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-quantum lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-black">Criar Link Personalizado</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="link-personalizado" className="text-black">Nome do Link</Label>
                    <Input 
                      id="link-personalizado"
                      placeholder="meu-link-personalizado"
                      value={linkPersonalizado}
                      onChange={(e) => setLinkPersonalizado(e.target.value)}
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Será: quantum.app/v/{linkPersonalizado}
                    </p>
                  </div>
                  <Button 
                    className="w-full btn-quantum"
                    onClick={gerarLinkPersonalizado}
                    disabled={!linkPersonalizado}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Gerar Link Personalizado
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Estatísticas dos Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">127</div>
                    <p className="text-sm text-gray-600">Cliques este mês</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-500">45</div>
                    <p className="text-sm text-gray-600">Conversões</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-accent">35.4%</div>
                    <p className="text-sm text-gray-600">Taxa de conversão</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">23</div>
                    <p className="text-sm text-gray-600">Trials gerados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comissoes" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Resumo de Comissões</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-black">Este mês:</span>
                    <span className="font-bold text-green-600">R$ {vendedorData.comissao}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Mês anterior:</span>
                    <span className="font-bold text-black">R$ 1.950</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Total acumulado:</span>
                    <span className="font-bold text-primary">R$ {vendedorData.comissaoTotal.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span className="text-black">Próximo pagamento:</span>
                    <span className="font-bold text-accent">05/02/2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-quantum">
                <CardHeader>
                  <CardTitle className="text-black">Estrutura de Comissão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-black">Plano Basic (R$ 47):</span>
                    <span className="font-bold text-black">R$ 23,50 (50%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Plano Premium (R$ 97):</span>
                    <span className="font-bold text-black">R$ 48,50 (50%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black">Plano Anual (R$ 497):</span>
                    <span className="font-bold text-black">R$ 248,50 (50%)</span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span className="text-black">Trial → Conversão:</span>
                    <span className="font-bold text-green-600">Bônus +10%</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Comissões são pagas todo dia 5 do mês seguinte
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Histórico de Pagamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-black">Janeiro 2024</p>
                      <p className="text-sm text-gray-600">Pago em 05/01/2024</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-green-600">R$ 1.950</span>
                      <p className="text-xs text-gray-600">38 vendas</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-black">Dezembro 2023</p>
                      <p className="text-sm text-gray-600">Pago em 05/12/2023</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-green-600">R$ 2.180</span>
                      <p className="text-xs text-gray-600">42 vendas</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-black">Novembro 2023</p>
                      <p className="text-sm text-gray-600">Pago em 05/11/2023</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-green-600">R$ 1.875</span>
                      <p className="text-xs text-gray-600">35 vendas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}