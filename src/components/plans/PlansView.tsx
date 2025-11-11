"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Clock, Target, CheckCircle, Star, Crown,
  Zap, Award, TrendingUp, Users
} from "lucide-react";

interface PlansViewProps {
  onBack: () => void;
  onStartPlan: (planId: string) => void;
}

const availablePlans = [
  {
    id: 'basic-monthly',
    title: 'Plano Basic',
    subtitle: 'Ideal para começar',
    price: 47,
    originalPrice: 97,
    period: 'mensal',
    discount: '51% OFF',
    popular: false,
    features: [
      'Acesso a todos os programas básicos',
      'Biblioteca de sons relaxantes',
      'Suporte por email',
      'Atualizações gratuitas'
    ],
    color: 'border-gray-200'
  },
  {
    id: 'premium-monthly',
    title: 'Plano Premium',
    subtitle: 'Mais popular',
    price: 97,
    originalPrice: 197,
    period: 'mensal',
    discount: '51% OFF',
    popular: true,
    features: [
      'Todos os benefícios do Basic',
      'Programas avançados exclusivos',
      'Planos personalizados',
      'Suporte prioritário',
      'Consultoria individual',
      'Acesso antecipado a novidades'
    ],
    color: 'border-primary'
  },
  {
    id: 'annual',
    title: 'Plano Anual',
    subtitle: 'Melhor custo-benefício',
    price: 497,
    originalPrice: 1164,
    period: 'anual',
    discount: '57% OFF',
    popular: false,
    features: [
      'Todos os benefícios do Premium',
      '2 meses grátis',
      'Garantia de 30 dias',
      'Bônus exclusivos',
      'Acesso vitalício a atualizações'
    ],
    color: 'border-green-200'
  }
];

const guidedPlans = [
  {
    id: 'plano-7-iniciante',
    title: 'Plano 7 Dias - Introdução',
    duration: '7 dias',
    description: 'Introdução completa ao uso dos massageadores Quantum',
    difficulty: 'Iniciante',
    dailyPrograms: [
      'Dia 1: Relaxamento Profundo (8min)',
      'Dia 2: Cervical Básico (10min)',
      'Dia 3: Drenagem de Pernas (15min)',
      'Dia 4: Energia no Dia (5min)',
      'Dia 5: Alongamento Relaxante (10min)',
      'Dia 6: Estética Facial Básica (8min)',
      'Dia 7: Sessão Completa (20min)'
    ],
    benefits: [
      'Familiarização com os aparelhos',
      'Redução do estresse inicial',
      'Melhora na qualidade do sono',
      'Aumento da disposição diária'
    ]
  },
  {
    id: 'plano-14-coluna',
    title: 'Plano 14 Dias - Saúde da Coluna',
    duration: '14 dias',
    description: 'Programa intensivo para alívio e fortalecimento da coluna',
    difficulty: 'Intermediário',
    dailyPrograms: [
      'Semana 1: Adaptação e Alívio',
      'Dias 1-3: Alívio Cervical (10min)',
      'Dias 4-7: Alívio Lombar (12min)',
      'Semana 2: Fortalecimento',
      'Dias 8-10: Postura Completa (20min)',
      'Dias 11-14: Manutenção (15min)'
    ],
    benefits: [
      'Correção da postura corporal',
      'Fortalecimento da musculatura',
      'Redução de dores crônicas',
      'Melhora da qualidade de vida'
    ]
  },
  {
    id: 'plano-30-transformacao',
    title: 'Plano 30 Dias - Transformação Total',
    duration: '30 dias',
    description: 'Programa completo de transformação física e mental',
    difficulty: 'Avançado',
    dailyPrograms: [
      'Semana 1: Adaptação e Relaxamento',
      'Semana 2: Fortalecimento e Postura',
      'Semana 3: Estética e Bem-estar',
      'Semana 4: Performance e Resultados'
    ],
    benefits: [
      'Transformação corporal completa',
      'Melhora significativa do bem-estar',
      'Resultados estéticos visíveis',
      'Aumento da energia e disposição',
      'Redução do estresse e ansiedade'
    ]
  }
];

export const PlansView = ({ onBack, onStartPlan }: PlansViewProps) => {
  const [activeTab, setActiveTab] = useState<'subscription' | 'guided'>('subscription');
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setShowPayment(false);
    alert('Assinatura ativada com sucesso! 🎉');
  };

  if (showPayment && selectedPlan) {
    const plan = availablePlans.find(p => p.id === selectedPlan);
    
    return (
      <>
        <CategoryHeader 
          title="Finalizar Assinatura" 
          subtitle={`${plan?.title} - R$ ${plan?.price}`}
          onBack={() => setShowPayment(false)} 
        />
        
        <div className="p-6 space-y-6">
          <Card className="card-quantum">
            <CardHeader>
              <CardTitle className="text-black">Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-black">{plan?.title}</span>
                <span className="font-bold text-black">R$ {plan?.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Desconto</span>
                <span className="text-green-600">-R$ {plan ? plan.originalPrice - plan.price : 0}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold">
                <span className="text-black">Total</span>
                <span className="text-black">R$ {plan?.price}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-quantum">
            <CardHeader>
              <CardTitle className="text-black">Método de Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">
                  💳 Cartão
                </Button>
                <Button variant="outline" className="h-12">
                  📱 PIX
                </Button>
              </div>
              
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Número do cartão"
                  className="w-full p-3 border rounded-lg"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="MM/AA"
                    className="p-3 border rounded-lg"
                  />
                  <input 
                    type="text" 
                    placeholder="CVV"
                    className="p-3 border rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button 
            className="w-full btn-quantum py-4 text-lg"
            onClick={handlePaymentComplete}
          >
            Confirmar Assinatura
          </Button>

          <div className="text-center text-sm text-gray-600">
            <p>🔒 Pagamento 100% seguro</p>
            <p>Garantia de 30 dias - Cancele quando quiser</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <CategoryHeader 
        title="Planos Quantum" 
        subtitle="Escolha o melhor plano para você" 
        onBack={onBack} 
      />
      
      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === 'subscription' ? 'default' : 'outline'}
            onClick={() => setActiveTab('subscription')}
            className={activeTab === 'subscription' ? 'bg-gradient-quantum text-white' : ''}
          >
            Assinaturas
          </Button>
          <Button
            variant={activeTab === 'guided' ? 'default' : 'outline'}
            onClick={() => setActiveTab('guided')}
            className={activeTab === 'guided' ? 'bg-gradient-quantum text-white' : ''}
          >
            Planos Guiados
          </Button>
        </div>

        {activeTab === 'subscription' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Badge className="mb-2 bg-red-500 text-white">
                🔥 OFERTA LIMITADA
              </Badge>
              <p className="text-sm text-gray-600">
                Preços promocionais por tempo limitado
              </p>
            </div>

            <div className="space-y-4">
              {availablePlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`card-quantum relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-quantum text-white">
                      <Crown className="h-3 w-3 mr-1" />
                      MAIS POPULAR
                    </Badge>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-black mb-2">{plan.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                      
                      <div className="mb-4">
                        <span className="text-sm text-gray-500 line-through">R$ {plan.originalPrice}</span>
                        <div className="text-3xl font-bold text-black">R$ {plan.price}</div>
                        <span className="text-gray-600">/{plan.period}</span>
                      </div>
                      <Badge variant="destructive">{plan.discount}</Badge>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-black">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full py-3 ${plan.popular ? 'btn-quantum' : ''}`}
                      onClick={() => handleSubscribe(plan.id)}
                    >
                      Assinar Agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 space-y-2">
              <p className="text-sm text-gray-600">
                💳 Aceitamos todos os cartões | 🔒 Pagamento 100% seguro
              </p>
              <p className="text-xs text-gray-500">
                Garantia de 30 dias - Se não ficar satisfeito, devolvemos seu dinheiro
              </p>
            </div>
          </div>
        )}

        {activeTab === 'guided' && (
          <div className="space-y-6">
            {guidedPlans.map((plan) => (
              <Card key={plan.id} className="card-quantum">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">{plan.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-blue-100 text-blue-700">
                          {plan.difficulty}
                        </Badge>
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {plan.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Programa Diário:</h4>
                    <div className="space-y-1">
                      {plan.dailyPrograms.slice(0, 3).map((day, idx) => (
                        <p key={idx} className="text-sm text-gray-600">• {day}</p>
                      ))}
                      {plan.dailyPrograms.length > 3 && (
                        <p className="text-sm text-gray-500">
                          +{plan.dailyPrograms.length - 3} dias adicionais
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-black mb-2">Benefícios:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {plan.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-black">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-quantum"
                    onClick={() => onStartPlan(plan.id)}
                  >
                    <Target className="h-4 w-4 mr-2" />
                    Iniciar Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};