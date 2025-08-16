"use client";

import { useState } from "react";
import { 
  Play, 
  Check, 
  Star, 
  Download, 
  Clock, 
  Heart, 
  Zap, 
  Shield,
  ChevronRight,
  Smartphone,
  Users,
  Award
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Heart,
      title: "Alívio Imediato",
      description: "Programas específicos para dor cervical, lombar e tensões musculares"
    },
    {
      icon: Clock,
      title: "Sono Profundo",
      description: "Técnicas de relaxamento e massagem para melhorar sua qualidade do sono"
    },
    {
      icon: Zap,
      title: "Drenagem Segura",
      description: "Protocolos profissionais de drenagem linfática com orientações médicas"
    },
    {
      icon: Award,
      title: "Planos Personalizados",
      description: "Programas de 7, 14 e 30 dias adaptados ao seu perfil e necessidades"
    },
    {
      icon: Users,
      title: "Sons Relaxantes",
      description: "Biblioteca completa com spa, natureza, binaural e respiração guiada"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Desenvolvido com profissionais de saúde e fisioterapeutas"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Baixe o App",
      description: "Disponível para iOS e Android, instalação rápida e gratuita"
    },
    {
      number: "2", 
      title: "Quiz Personalizado",
      description: "Responda 5 perguntas sobre seus objetivos e necessidades"
    },
    {
      number: "3",
      title: "Programa Guiado",
      description: "Siga seu plano personalizado com vídeos e áudios profissionais"
    }
  ];

  const testimonials = [
    {
      name: "Ana Carolina",
      text: "Incrível! Em 7 dias já senti diferença na dor cervical. Os programas são muito bem explicados.",
      rating: 5,
      location: "São Paulo, SP"
    },
    {
      name: "Roberto Silva", 
      text: "A drenagem linfática me ajudou muito com o inchaço. Recomendo para todos!",
      rating: 5,
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Mariana Costa",
      text: "Durmo muito melhor depois dos programas de relaxamento. Vale cada centavo!",
      rating: 5,
      location: "Belo Horizonte, MG"
    },
    {
      name: "Carlos Eduardo",
      text: "Praticidade incrível! Faço minha sessão em casa, no meu tempo. Excelente!",
      rating: 5,
      location: "Brasília, DF"
    }
  ];

  const faqs = [
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Você pode cancelar sua assinatura a qualquer momento através do app, sem multas ou taxas adicionais."
    },
    {
      question: "Preciso de cartão de crédito?",
      answer: "Sim, para garantir a continuidade do serviço utilizamos assinatura recorrente simples e segura."
    },
    {
      question: "É um tratamento médico?",
      answer: "Não, o Quantum Experience é focado em bem-estar caseiro. Para questões médicas, sempre consulte um profissional."
    },
    {
      question: "Funciona com qualquer massageador?",
      answer: "O app foi desenvolvido especificamente para os massageadores Quantum, garantindo a melhor experiência."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos 7 dias de garantia. Se não ficar satisfeito, devolvemos seu dinheiro."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Seu <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Spa Guiado</span> em Casa
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                por apenas <span className="font-bold text-purple-600">R$14,90/mês</span>
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Programas guiados de massagem, drenagem linfática, sono profundo e alívio de dores com seus massageadores Quantum.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 glow-effect">
                  Quero Começar Agora
                </button>
                <Link 
                  href="/"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-200 text-center"
                >
                  Ver Demonstração
                </Link>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                ✅ Primeiro mês já incluso no kit • ✅ Cancele quando quiser
              </p>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl glow-effect">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <span className="font-semibold text-gray-900">Quantum Experience</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Play size={20} className="text-purple-600" />
                      <span className="text-gray-700">Alívio Cervical - 10min</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Heart size={20} className="text-blue-600" />
                      <span className="text-gray-700">Drenagem Pernas - 15min</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Clock size={20} className="text-purple-600" />
                      <span className="text-gray-700">Sono Profundo - 12min</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Quantum Experience?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia avançada e conhecimento científico para transformar sua rotina de bem-estar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 glow-effect">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600">
              3 passos simples para começar sua jornada de bem-estar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ChevronRight size={24} className="text-purple-400 mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-100">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star size={16} />
              Oferta Especial
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apenas <span className="text-5xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">R$14,90</span>/mês
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Primeiro mês já incluso no kit. A partir do 2º mês, cobrança recorrente automática.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-500" />
                <span className="text-gray-700">Programas ilimitados</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-500" />
                <span className="text-gray-700">Novos conteúdos mensais</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-500" />
                <span className="text-gray-700">Suporte especializado</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-green-500" />
                <span className="text-gray-700">Cancele quando quiser</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 glow-effect">
              Garantir Minha Experiência Quantum
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              🔒 Pagamento 100% seguro • 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 10.000 pessoas já transformaram sua rotina de bem-estar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre o Quantum Experience
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight 
                    size={20} 
                    className={`text-gray-400 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para sentir a diferença hoje?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Junte-se a milhares de pessoas que já transformaram sua rotina de bem-estar
          
          </p>
          
          <button className="bg-white text-purple-600 px-12 py-4 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-6">
            Apenas R$14,90/mês — Começar Hoje
          </button>
          
          <div className="flex items-center justify-center gap-8 text-purple-100">
            <div className="flex items-center gap-2">
              <Shield size={20} />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={20} />
              <span>7 Dias de Garantia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="font-bold text-xl">Quantum Experience</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da tecnologia e bem-estar.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LGPD</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Quantum Experience. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
        }
        .glow-effect:hover {
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
        }
      `}</style>
    </div>
  );
}