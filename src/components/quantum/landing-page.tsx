"use client";

import { useState } from "react";
import { 
  Play, 
  Zap, 
  Heart, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Headphones,
  Timer,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LandingPageProps {
  onEnterApp: () => void;
}

export function LandingPage({ onEnterApp }: LandingPageProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Play,
      title: "Programas Guiados",
      description: "Sessões de massagem com vídeo e áudio profissionais",
      details: "Mais de 12 programas especializados para diferentes necessidades"
    },
    {
      icon: Timer,
      title: "Planos Personalizados",
      description: "Rotinas de 7, 14 e 30 dias adaptadas ao seu perfil",
      details: "Quiz personalizado define o melhor plano para você"
    },
    {
      icon: Headphones,
      title: "Sons Relaxantes",
      description: "Biblioteca de áudios para relaxamento e meditação",
      details: "Spa, natureza, binaural e técnicas de respiração"
    },
    {
      icon: Award,
      title: "Gamificação",
      description: "Sistema de pontos, níveis e recompensas",
      details: "Mantenha sua motivação com streaks e conquistas"
    }
  ];

  const programs = [
    { name: "Alívio Cervical", duration: "10min", icon: "🦴", color: "from-blue-500 to-cyan-500" },
    { name: "Drenagem Pernas", duration: "15min", icon: "🦵", color: "from-cyan-500 to-teal-500" },
    { name: "Relax Total", duration: "8min", icon: "🧘", color: "from-purple-500 to-pink-500" },
    { name: "Sono Profundo", duration: "12min", icon: "😴", color: "from-indigo-500 to-purple-500" }
  ];

  const benefits = [
    "Redução do estresse e ansiedade",
    "Melhora da qualidade do sono",
    "Alívio de dores musculares",
    "Aumento da circulação sanguínea",
    "Relaxamento profundo",
    "Correção postural"
  ];

  return (
    <div className="min-h-screen bg-quantum-dark overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="px-4 py-12 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-quantum-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-white">Q</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Quantum
              <span className="quantum-gradient bg-clip-text text-transparent"> Experience</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transforme seus massageadores Quantum em uma experiência completa de bem-estar 
              com programas guiados, sons relaxantes e acompanhamento personalizado.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={onEnterApp}
              className="quantum-button text-lg px-8 py-4 flex items-center gap-3"
            >
              <Smartphone size={24} />
              Acessar Aplicativo
              <ArrowRight size={20} />
            </button>
            <div className="text-center">
              <p className="text-quantum-accent font-semibold">R$ 14,90/mês</p>
              <p className="text-sm text-gray-400">Primeiro mês grátis com o produto</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, value: "10k+", label: "Usuários Ativos" },
              { icon: Play, value: "12+", label: "Programas" },
              { icon: Clock, value: "5-20", label: "Minutos/Sessão" },
              { icon: Star, value: "4.9", label: "Avaliação" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="quantum-card text-center">
                  <Icon size={24} className="text-quantum-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubra como o Quantum Experience potencializa seus massageadores 
              com tecnologia e conteúdo profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 transition-all duration-300 text-left",
                      activeFeature === index
                        ? "border-quantum-primary bg-quantum-primary/10"
                        : "border-quantum-muted bg-quantum-secondary hover:border-quantum-primary/50"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "p-3 rounded-lg",
                        activeFeature === index 
                          ? "bg-quantum-primary text-white" 
                          : "bg-quantum-muted text-quantum-accent"
                      )}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="quantum-card">
              <div className="text-center">
                <div className="w-16 h-16 bg-quantum-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {features[activeFeature] && (
                    <features[activeFeature].icon size={32} className="text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {features[activeFeature]?.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {features[activeFeature]?.details}
                </p>
                <div className="w-full h-32 bg-gradient-to-br from-quantum-primary/20 to-quantum-accent/20 rounded-lg flex items-center justify-center">
                  <Play size={32} className="text-quantum-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Programas Disponíveis
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sessões especializadas para diferentes necessidades, 
              desde alívio de dores até relaxamento profundo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {programs.map((program, index) => (
              <div key={index} className="quantum-card text-center hover:scale-105 transition-transform">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-gradient-to-r",
                  program.color
                )}>
                  <span className="text-2xl">{program.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-1">{program.name}</h3>
                <p className="text-quantum-accent text-sm">{program.duration}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">E muito mais programas sendo adicionados mensalmente!</p>
            <button 
              onClick={onEnterApp}
              className="quantum-button-outline"
            >
              Ver Todos os Programas
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Benefícios Comprovados
              </h2>
              <p className="text-gray-400 mb-8">
                Combine a tecnologia dos massageadores Quantum com programas 
                cientificamente desenvolvidos para maximizar os resultados.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-quantum-accent flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="quantum-card">
              <div className="text-center mb-6">
                <Heart size={48} className="text-quantum-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Sua Jornada de Bem-estar
                </h3>
                <p className="text-gray-400">
                  Acompanhe seu progresso e evolução com métricas detalhadas
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Minutos de relaxamento</span>
                  <span className="text-quantum-accent font-semibold">245 min</span>
                </div>
                <div className="w-full bg-quantum-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-quantum-primary to-quantum-accent h-2 rounded-full w-3/4"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sequência atual</span>
                  <span className="text-orange-400 font-semibold">5 dias 🔥</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Nível atual</span>
                  <span className="text-quantum-primary font-semibold">Nível 3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16">
          <div className="quantum-gradient rounded-2xl p-8 text-center">
            <Zap size={48} className="text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Comece Sua Jornada Hoje
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Transforme seus momentos de relaxamento em uma experiência única. 
              Primeiro mês grátis ao adquirir qualquer massageador Quantum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onEnterApp}
                className="bg-white text-quantum-primary hover:bg-white/90 font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
              >
                <Smartphone size={24} />
                Acessar Aplicativo Agora
                <ArrowRight size={20} />
              </button>
              
              <div className="text-center">
                <p className="text-white font-semibold">Apenas R$ 14,90/mês</p>
                <p className="text-white/60 text-sm">Cancele quando quiser</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 text-center border-t border-quantum-muted">
          <p className="text-gray-500 text-sm">
            © 2024 Quantum Experience. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Aplicativo de bem-estar. Não substitui orientação médica profissional.
          </p>
        </footer>
      </div>
    </div>
  );
}