"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, Users, Target, TrendingUp, Link as LinkIcon, 
  Copy, Share, Calendar, ArrowLeft, Plus, Eye
} from "lucide-react";
import Link from "next/link";

export default function VendedorPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [linkPersonalizado, setLinkPersonalizado] = useState("");

  // Mock data do vendedor
  const vendedorData = {
    nome: "Carlos Mendes",
    id: "VEND001",
    vendas: 45,
    meta: 50,
    comissao: 2250,
    comissaoTotal: 18750,
    conversao: 8.5,
    linkVendas: "https://quantum.app/v/carlos-mendes"
  };

  const vendasRecentes = [
    { id: 1, cliente: "Maria Silva", plano: "Premium", valor: 97, data: "2024-01-15", status: "ativa" },
    { id: 2, cliente: "João Santos", plano: "Basic", valor: 47, data: "2024-01-14", status: "ativa" },
    { id: 3, cliente: "Ana Costa", plano: "Premium", valor: 97, data: "2024-01-13", status: "pendente" },
  ];

  const metas = {
    mensal: 50,
    atual: 45,
    faltam: 5,
    diasRestantes: 8
  };

  const copyLink = () => {
    navigator.clipboard.writeText(vendedorData.linkVendas);
    alert("Link copiado!");
  };

  const gerarLinkPersonalizado = () => {
    if (linkPersonalizado) {
      const novoLink = `https://quantum.app/v/${linkPersonalizado}`;
      alert(`Link personalizado gerado: ${novoLink}`);
    }
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
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="vendas">Minhas Vendas</TabsTrigger>
            <TabsTrigger value="links">Links de Venda</TabsTrigger>
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
                  <CardTitle className="text-sm font-medium text-black">Comissão Total</CardTitle>
                  <Target className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">R$ {vendedorData.comissaoTotal.toLocaleString()}</div>
                  <p className="text-xs text-gray-600">Acumulado</p>
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

            {/* Vendas Recentes */}
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Vendas Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vendasRecentes.map((venda) => (
                    <div key={venda.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-black">{venda.cliente}</p>
                        <p className="text-sm text-gray-600">{venda.plano} - R$ {venda.valor}</p>
                        <p className="text-xs text-gray-500">{venda.data}</p>
                      </div>
                      <Badge variant={venda.status === 'ativa' ? 'default' : 'secondary'}>
                        {venda.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vendas" className="space-y-6">
            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Histórico de Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vendasRecentes.map((venda) => (
                    <div key={venda.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-quantum rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{venda.cliente.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-black">{venda.cliente}</p>
                          <p className="text-sm text-gray-600">{venda.plano}</p>
                          <p className="text-xs text-gray-500">Vendido em: {venda.data}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">R$ {venda.valor}</p>
                        <Badge variant={venda.status === 'ativa' ? 'default' : 'secondary'}>
                          {venda.status}
                        </Badge>
                        <div className="mt-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Detalhes
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
                  <CardTitle className="text-black">Seu Link de Vendas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      value={vendedorData.linkVendas} 
                      readOnly 
                      className="flex-1"
                    />
                    <Button onClick={copyLink} variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full btn-quantum">
                    <Share className="h-4 w-4 mr-2" />
                    Compartilhar Link
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-quantum">
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
                    Gerar Link
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="card-quantum">
              <CardHeader>
                <CardTitle className="text-black">Estatísticas do Link</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <span className="font-bold text-green-600">R$ 1.950</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-black">Dezembro 2023</p>
                      <p className="text-sm text-gray-600">Pago em 05/12/2023</p>
                    </div>
                    <span className="font-bold text-green-600">R$ 2.180</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-black">Novembro 2023</p>
                      <p className="text-sm text-gray-600">Pago em 05/11/2023</p>
                    </div>
                    <span className="font-bold text-green-600">R$ 1.875</span>
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