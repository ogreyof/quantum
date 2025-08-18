import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Star, Heart, Zap, Smile } from "lucide-react";

interface CompletionViewProps {
  programTitle: string;
  onBack: () => void;
  onHome: () => void;
}

export const CompletionView = ({ programTitle, onBack, onHome }: CompletionViewProps) => {
  const [selectedFeeling, setSelectedFeeling] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const feelings = [
    { id: 'relaxed', label: 'Mais Relaxado', icon: Heart, color: 'text-purple-600' },
    { id: 'energized', label: 'Mais Energia', icon: Zap, color: 'text-blue-500' },
    { id: 'happy', label: 'Mais Feliz', icon: Smile, color: 'text-cyan-400' },
    { id: 'pain-relief', label: 'Menos Dor', icon: Star, color: 'text-purple-600' }
  ];

  const handleSubmit = () => {
    console.log('Avaliação:', { rating, feeling: selectedFeeling });
    onHome();
  };

  return (
    <>
      <CategoryHeader 
        title="Sessão Concluída! 🎉" 
        subtitle={`Parabéns por completar: ${programTitle}`} 
        onBack={onBack} 
      />
      
      <div className="p-6 space-y-6">
        {/* Celebração */}
        <Card className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 border-0 text-white">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold mb-2">Excelente trabalho!</h2>
            <p className="text-white/80">Você completou mais uma sessão rumo aos seus objetivos</p>
          </CardContent>
        </Card>

        {/* Avaliação por Estrelas */}
        <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="font-bold text-black mb-4 text-center">⭐ Como foi sua experiência?</h3>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => setRating(star)}
                >
                  <Star 
                    className={`h-8 w-8 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                </Button>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600">
              {rating > 0 && `${rating} de 5 estrelas`}
            </p>
          </CardContent>
        </Card>

        {/* Como se sente */}
        <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="font-bold text-black mb-4 text-center">💭 Como você se sente agora?</h3>
            <div className="grid grid-cols-2 gap-3">
              {feelings.map((feeling) => {
                const IconComponent = feeling.icon;
                return (
                  <Button
                    key={feeling.id}
                    variant={selectedFeeling === feeling.id ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 ${
                      selectedFeeling === feeling.id 
                        ? 'bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white' 
                        : 'bg-white text-black hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedFeeling(feeling.id)}
                  >
                    <IconComponent className={`h-6 w-6 ${selectedFeeling === feeling.id ? 'text-white' : feeling.color}`} />
                    <span className="text-sm font-medium">{feeling.label}</span>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas */}
        <Card className="bg-gray-100 border border-purple-500/30 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="font-bold text-black mb-4 text-center">📊 Seu Progresso</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">6</div>
                <p className="text-xs text-gray-600">Sequência</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">260</div>
                <p className="text-xs text-gray-600">Min. Totais</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">12</div>
                <p className="text-xs text-gray-600">Sessões</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Botões de Ação */}
        <div className="space-y-3">
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl py-3"
            onClick={handleSubmit}
            disabled={rating === 0 || selectedFeeling === ''}
          >
            Finalizar Avaliação
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-purple-500/30 text-white hover:bg-purple-500/20"
            onClick={onHome}
          >
            Voltar ao Início
          </Button>
        </div>
      </div>
    </>
  );
};