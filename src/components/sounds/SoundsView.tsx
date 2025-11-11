"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, Pause, Volume2, VolumeX, RotateCcw, SkipForward, SkipBack
} from "lucide-react";

interface SoundsViewProps {
  onBack: () => void;
}

const soundCategories = [
  {
    id: 'chuva',
    name: 'Chuva',
    icon: '🌧️',
    sounds: [
      { id: 'chuva-leve', title: 'Chuva Leve', duration: null, description: 'Som suave de chuva para relaxamento' },
      { id: 'chuva-forte', title: 'Chuva Forte', duration: null, description: 'Som intenso de chuva para concentração' },
      { id: 'chuva-trovao', title: 'Chuva com Trovão', duration: null, description: 'Chuva com trovões distantes' }
    ]
  },
  {
    id: 'meditacao',
    name: 'Meditação',
    icon: '🧘',
    sounds: [
      { id: 'tibetan-bowls', title: 'Tigelas Tibetanas', duration: 30, description: 'Sons de tigelas para meditação profunda' },
      { id: 'om-chanting', title: 'Mantras OM', duration: 20, description: 'Cânticos sagrados para meditação' },
      { id: 'zen-garden', title: 'Jardim Zen', duration: 25, description: 'Ambiente tranquilo de jardim zen' }
    ]
  },
  {
    id: 'respiracao',
    name: 'Respiração',
    icon: '🫁',
    sounds: [
      { id: 'respiracao-478', title: 'Respiração 4-7-8', duration: 15, description: 'Técnica guiada para relaxamento' },
      { id: 'respiracao-box', title: 'Respiração Box', duration: 20, description: 'Respiração quadrada para equilíbrio' },
      { id: 'respiracao-profunda', title: 'Respiração Profunda', duration: 12, description: 'Exercícios de respiração consciente' }
    ]
  },
  {
    id: 'piano',
    name: 'Piano Relaxante',
    icon: '🎹',
    sounds: [
      { id: 'piano-classico', title: 'Piano Clássico', duration: null, description: 'Melodias clássicas relaxantes' },
      { id: 'piano-moderno', title: 'Piano Moderno', duration: null, description: 'Composições contemporâneas suaves' },
      { id: 'piano-natureza', title: 'Piano & Natureza', duration: null, description: 'Piano com sons da natureza' }
    ]
  }
];

export const SoundsView = ({ onBack }: SoundsViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState('chuva');
  const [currentSound, setCurrentSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const selectedCategoryData = soundCategories.find(cat => cat.id === selectedCategory);

  const handlePlayPause = (sound: any) => {
    if (currentSound?.id === sound.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSound(sound);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const handleStop = () => {
    setCurrentSound(null);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <CategoryHeader 
        title="Biblioteca de Sons" 
        subtitle="Sons relaxantes para suas sessões" 
        onBack={onBack} 
      />
      
      <div className="p-6 space-y-6">
        {/* Player Atual */}
        {currentSound && (
          <Card className="card-quantum border-primary/20">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">
                  {selectedCategoryData?.icon}
                </div>
                <h3 className="font-bold text-lg text-black">{currentSound.title}</h3>
                <p className="text-sm text-gray-600">{currentSound.description}</p>
              </div>

              {/* Controles de Reprodução */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <Button variant="ghost" size="icon">
                  <SkipBack className="h-5 w-5" />
                </Button>

                <Button
                  size="icon"
                  className="h-12 w-12 bg-gradient-quantum hover:scale-110 transition-transform"
                  onClick={() => handlePlayPause(currentSound)}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6 text-white" />
                  ) : (
                    <Play className="h-6 w-6 text-white ml-1" />
                  )}
                </Button>

                <Button variant="ghost" size="icon">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              {/* Barra de Progresso */}
              {currentSound.duration && (
                <div className="space-y-2 mb-4">
                  <Slider
                    value={[currentTime]}
                    max={currentSound.duration * 60}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(currentSound.duration * 60)}</span>
                  </div>
                </div>
              )}

              {/* Controle de Volume */}
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-gray-600 w-8">
                  {isMuted ? 0 : volume[0]}
                </span>
              </div>

              <div className="flex justify-center mt-4">
                <Button variant="outline" onClick={handleStop}>
                  Parar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Categorias */}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">Categorias</h3>
          <div className="flex flex-wrap gap-2">
            {soundCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-gradient-quantum text-white' : ''}
              >
                <span className="mr-1">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de Sons */}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">
            {selectedCategoryData?.name}
          </h3>
          <div className="grid gap-4">
            {selectedCategoryData?.sounds.map((sound) => (
              <Card 
                key={sound.id} 
                className="card-quantum cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => handlePlayPause(sound)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{selectedCategoryData.icon}</div>
                      <div>
                        <h4 className="font-semibold text-black">{sound.title}</h4>
                        <p className="text-sm text-gray-600">
                          {sound.duration ? `${sound.duration} min` : 'Loop infinito'} • {sound.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {currentSound?.id === sound.id && isPlaying && (
                        <div className="flex gap-1">
                          <div className="w-1 h-4 bg-primary rounded-full animate-pulse"></div>
                          <div className="w-1 h-4 bg-primary rounded-full animate-pulse delay-100"></div>
                          <div className="w-1 h-4 bg-primary rounded-full animate-pulse delay-200"></div>
                        </div>
                      )}
                      <Button
                        size="sm"
                        className="bg-gradient-quantum text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause(sound);
                        }}
                      >
                        {currentSound?.id === sound.id && isPlaying ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dicas de Uso */}
        <Card className="card-quantum">
          <CardHeader>
            <CardTitle className="text-black">💡 Dicas de Uso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-600">
            <p>• Use fones de ouvido para melhor experiência</p>
            <p>• Combine sons com seus exercícios favoritos</p>
            <p>• Ajuste o volume para um nível confortável</p>
            <p>• Experimente diferentes categorias para variar</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};