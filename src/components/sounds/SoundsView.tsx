"use client";

import { useState } from "react";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { SoundPlayer } from "./SoundPlayer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { soundLibrary, soundCategories, Sound } from "@/data/sounds";

interface SoundsViewProps {
  onBack: () => void;
}

export const SoundsView = ({ onBack }: SoundsViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentSound, setCurrentSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredSounds = selectedCategory === 'all' 
    ? soundLibrary 
    : soundLibrary.filter(sound => sound.category === selectedCategory);

  const handlePlaySound = (sound: Sound) => {
    if (currentSound?.id === sound.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSound(sound);
      setIsPlaying(true);
    }
  };

  const handleStopSound = () => {
    setIsPlaying(false);
    setCurrentSound(null);
  };

  return (
    <>
      <CategoryHeader 
        title="Biblioteca de Sons" 
        subtitle="Sons relaxantes para suas sessões" 
        onBack={onBack} 
      />
      
      <div className="p-6 space-y-6">
        {/* Filtros por Categoria */}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">Categorias</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-gradient-quantum text-white' : ''}
            >
              Todos
            </Button>
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

        {/* Player Atual */}
        {currentSound && (
          <div className="space-y-3">
            <h3 className="font-semibold text-white">Tocando Agora</h3>
            <SoundPlayer
              sound={currentSound}
              isPlaying={isPlaying}
              onPlayPause={() => setIsPlaying(!isPlaying)}
              onStop={handleStopSound}
            />
          </div>
        )}

        {/* Lista de Sons */}
        <div className="space-y-3">
          <h3 className="font-semibold text-white">
            {selectedCategory === 'all' ? 'Todos os Sons' : 
             soundCategories.find(c => c.id === selectedCategory)?.name || 'Sons'}
          </h3>
          <div className="grid gap-4">
            {filteredSounds.map((sound) => (
              <Card 
                key={sound.id} 
                className="card-quantum cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => handlePlaySound(sound)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{sound.icon}</div>
                      <div>
                        <h4 className="font-semibold">{sound.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {sound.duration} • {sound.description}
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
                          handlePlaySound(sound);
                        }}
                      >
                        {currentSound?.id === sound.id && isPlaying ? 'Pausar' : 'Tocar'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};