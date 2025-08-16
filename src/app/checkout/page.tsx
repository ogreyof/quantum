"use client";

import { useState } from "react";
import { 
  CreditCard, 
  Shield, 
  Check, 
  ArrowLeft,
  Lock,
  Star,
  Clock,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface CheckoutStep {
  id: number;
  title: string;
  completed: boolean;
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const steps: CheckoutStep[] = [
    { id: 1, title: 'Informações', completed: false },
    { id: 2, title: 'Pagamento', completed: false },
    { id: 3, title: 'Confirmação', completed: false }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const benefits = [
    "Programas ilimitados de massagem",
    "Novos conteúdos mensais",
    "Sons relaxantes premium",
    "Suporte especializado 24/7",
    "Cancele quando quiser"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/landing" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft size={16} />
            Voltar para página inicial
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Finalizar Assinatura</h1>
          <p className="text-gray-600 mt-1">Complete sua assinatura do Quantum Experience</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.id 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step.completed ? <Check size={16} /> : step.id}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${
                      currentStep >= step.id ? 'text-purple-600' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-4 ${
                        currentStep > step.id ? 'bg-purple-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1 && "Suas Informações"}
                  {currentStep === 2 && "Dados de Pagamento"}
                  {currentStep === 3 && "Confirmação"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo
                      </label>
                      <Input
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <Input
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Payment */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Lock size={16} className="text-green-600" />
                      <span className="text-sm text-gray-600">Pagamento 100% seguro e criptografado</span>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Número do Cartão
                      </label>
                      <div className="relative">
                        <Input
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        />
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Validade
                        </label>
                        <Input
                          placeholder="MM/AA"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <Input
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome no Cartão
                      </label>
                      <Input
                        placeholder="Nome como está no cartão"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Assinatura Confirmada! 🎉
                      </h3>
                      <p className="text-gray-600">
                        Sua assinatura do Quantum Experience foi ativada com sucesso.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Próximos Passos:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>✅ Baixe o app Quantum Experience</li>
                        <li>✅ Faça login com seu email</li>
                        <li>✅ Complete o quiz de personalização</li>
                        <li>✅ Comece sua primeira sessão</li>
                      </ul>
                    </div>
                    <Link href="/app">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        Acessar Aplicativo
                      </Button>
                    </Link>
                  </div>
                )}

                {/* Navigation Buttons */}
                {currentStep < 3 && (
                  <div className="flex justify-between pt-6">
                    <Button 
                      variant="outline" 
                      onClick={handlePreviousStep}
                      disabled={currentStep === 1}
                    >
                      Voltar
                    </Button>
                    <Button 
                      onClick={handleNextStep}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    >
                      {currentStep === 2 ? 'Finalizar Pagamento' : 'Continuar'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">Q</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Quantum Experience</h4>
                    <p className="text-sm text-gray-600">Assinatura Mensal</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span>R$ 14,90</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Desconto</span>
                    <span className="text-green-600">-R$ 0,00</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span className="text-xl">R$ 14,90/mês</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-purple-700 font-medium">
                    🎁 Primeiro mês já incluso no kit
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>O que está incluso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={16} className="text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="text-green-600" size={20} />
                    <div>
                      <p className="text-sm font-medium">Pagamento Seguro</p>
                      <p className="text-xs text-gray-600">SSL 256-bit criptografado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm font-medium">7 Dias de Garantia</p>
                      <p className="text-xs text-gray-600">Devolução do dinheiro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="text-purple-600" size={20} />
                    <div>
                      <p className="text-sm font-medium">+10.000 Clientes</p>
                      <p className="text-xs text-gray-600">Satisfeitos com o serviço</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-medium">4.9/5 estrelas</p>
                  <p className="text-xs text-gray-600">Baseado em 2.847 avaliações</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}