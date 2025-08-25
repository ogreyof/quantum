"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Play, Star, CheckCircle, Users, Clock, Zap, 
  Shield, Award, TrendingUp, ArrowRight, Phone, Mail
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const planos = [
    {
      nome: "Basic",
      preco: 47,
      precoOriginal: 97,
      desconto: "51% OFF",
      periodo: "mensal",
      beneficios: [
        "Acesso a todos os programas básicos",
        "Sons relaxantes inclusos",
        "Suporte por email",
        "Atualizações gratuitas"
      ],
      popular: false
    },
    {
      nome: "Premium",
      preco: 97,
      precoOriginal: 197,
      desconto: "51% OFF",
      periodo: "mensal",
      beneficios: [
        "Todos os benefícios do Basic",
        "Programas avançados exclusivos",
        "Planos personalizados",
        "Suporte prioritário",
        "Consultoria individual",
        "Acesso antecipado a novidades"
      ],
      popular: true
    },
    {
      nome: "Anual",
      preco: 497,
      precoOriginal: 1164,
      desconto: "57% OFF",
      periodo: "anual",
      beneficios: [
        "Todos os benefícios do Premium",
        "2 meses grátis",
        "Garantia de 30 dias",
        "Bônus exclusivos",
        "Acesso vitalício a atualizações"
      ],
      popular: false
    }
  ];

  const depoimentos = [
    {
      nome: "Maria Silva",
      idade: 45,
      problema: "Dores cervicais",
      resultado: "Alívio completo em 2 semanas",
      foto: "👩‍💼",
      texto: "Sofria com dores no pescoço há anos. Com o Quantum, em apenas 2 semanas senti um alívio incrível!"
    },
    {
      nome: "João Santos",
      idade: 38,
      problema: "Insônia e estresse",
      resultado: "Sono reparador todas as noites",
      foto: "👨‍💻",
      texto: "O programa de sono mudou minha vida. Agora durmo profundamente e acordo descansado."
    },
    {
      nome: "Ana Costa",
      idade: 52,
      problema: "Papada e rugas",
      resultado: "Rosto mais jovem e firme",
      foto: "👩‍🦳",
      texto: "Os resultados na estética facial foram surpreendentes. Meu rosto está mais firme e jovem!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-quantum rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Q</span>
            </div>
            <span className="text-xl font-bold text-white">Quantum Experience</span>
          </div>
          <Link href="/">
            <Button variant="outline">Voltar ao App</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-quantum text-white">
            🔥 Oferta Limitada - 51% OFF
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforme Sua Vida com os
            <span className="bg-gradient-quantum bg-clip-text text-transparent"> Massageadores Quantum</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Programas científicos para alívio de dores, melhoria do sono, rejuvenescimento facial 
            e muito mais. Resultados comprovados em milhares de usuários.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="btn-quantum text-lg px-8 py-4"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Agora - 51% OFF
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4"
              onClick={() => setShowVideo(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50.000+</div>
              <p className="text-gray-400">Usuários Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <p className="text-gray-400">Taxa de Satisfação</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <p className="text-gray-400">Avaliação Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-20 px-4 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Você Sofre com Algum Desses Problemas?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problema: "Dores no pescoço e ombros", icon: "😣", cor: "text-red-400" },
              { problema: "Insônia e estresse", icon: "😴", cor: "text-blue-400" },
              { problema: "Papada e rugas faciais", icon: "😟", cor: "text-yellow-400" },
              { problema: "Pernas inchadas", icon: "🦵", cor: "text-purple-400" },
              { problema: "Queda de cabelo", icon: "💇", cor: "text-green-400" },
              { problema: "Gordura localizada", icon: "⚖️", cor: "text-orange-400" }
            ].map((item, index) => (
              <Card key={index} className="card-quantum text-center p-6">
                <div className="text-4xl mb-4">{item.problema}</div>
                <h3 className={`font-semibold ${item.cor} mb-2`}>{item.problema}</h3>
                <p className="text-sm text-gray-600">
                  Quantum tem a solução específica para você
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Por Que Escolher o Quantum Experience?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                titulo: "Resultados Rápidos",
                descricao: "Sinta alívio já nas primeiras sessões"
              },
              {
                icon: <Shield className="h-8 w-8 text-green-500" />,
                titulo: "100% Seguro",
                descricao: "Protocolos validados cientificamente"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-500" />,
                titulo: "50.000+ Usuários",
                descricao: "Comunidade ativa e resultados comprovados"
              },
              {
                icon: <Clock className="h-8 w-8 text-purple-500" />,
                titulo: "Apenas 8-15min/dia",
                descricao: "Cabe na sua rotina corrida"
              },
              {
                icon: <Award className="h-8 w-8 text-yellow-500" />,
                titulo: "Garantia de 30 dias",
                descricao: "Satisfação garantida ou seu dinheiro de volta"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-accent" />,
                titulo: "Evolução Constante",
                descricao: "Novos programas adicionados mensalmente"
              }
            ].map((beneficio, index) => (
              <Card key={index} className="card-quantum text-center p-6">
                <div className="flex justify-center mb-4">{beneficio.icon}</div>
                <h3 className="font-bold text-black mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-card/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            O Que Nossos Usuários Dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="card-quantum p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{depoimento.foto}</div>
                  <div>
                    <h4 className="font-bold text-black">{depoimento.nome}</h4>
                    <p className="text-sm text-gray-600">{depoimento.idade} anos</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Badge variant="outline" className="mb-2">{depoimento.problema}</Badge>
                  <p className="text-sm font-semibold text-green-600">{depoimento.resultado}</p>
                </div>
                <p className="text-gray-700 italic">"{depoimento.texto}"</p>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500 text-white">
              🔥 OFERTA LIMITADA - Apenas hoje!
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-400">
              Preços promocionais por tempo limitado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <Card key={index} className={`card-quantum relative ${plano.popular ? 'ring-2 ring-primary' : ''}`}>
                {plano.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-quantum text-white">
                    MAIS POPULAR
                  </Badge>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{plano.nome}</h3>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 line-through">R$ {plano.precoOriginal}</span>
                      <div className="text-4xl font-bold text-black">R$ {plano.preco}</div>
                      <span className="text-gray-600">/{plano.periodo}</span>
                    </div>
                    <Badge variant="destructive">{plano.desconto}</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plano.beneficios.map((beneficio, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-black">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full py-3 ${plano.popular ? 'btn-quantum' : ''}`}>
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              💳 Aceitamos todos os cartões | 🔒 Pagamento 100% seguro
            </p>
            <p className="text-sm text-gray-500">
              Garantia de 30 dias - Se não ficar satisfeito, devolvemos seu dinheiro
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-quantum">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não Perca Esta Oportunidade!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a mais de 50.000 pessoas que já transformaram suas vidas com o Quantum
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Input 
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-sm"
            />
            <Button size="lg" variant="secondary" className="px-8">
              Garantir Meu Desconto
            </Button>
          </div>
          
          <p className="text-sm text-white/80">
            ⏰ Oferta válida apenas hoje | 🎁 Bônus exclusivos inclusos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-quantum rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Q</span>
                </div>
                <span className="text-lg font-bold text-white">Quantum Experience</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da tecnologia de massagem inteligente.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-400">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-gray-400">contato@quantum.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Links Úteis</h4>
              <div className="space-y-2">
                <Link href="/admin" className="block text-gray-400 hover:text-white">Painel Admin</Link>
                <Link href="/vendedor" className="block text-gray-400 hover:text-white">Painel Vendedor</Link>
                <Link href="/" className="block text-gray-400 hover:text-white">App Quantum</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Quantum Experience. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}