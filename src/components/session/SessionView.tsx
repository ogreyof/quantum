import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CategoryHeader } from "@/components/shared/CategoryHeader";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";

interface SessionViewProps {
  programTitle: string;
  duration: string;
  onBack: () => void;
  onComplete: () => void;
}

export const SessionView = ({ programTitle, duration, onBack, onComplete }: SessionViewProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  // Converter duração para segundos (ex: "15min" -> 900)
  const totalSeconds = parseInt(duration.replace('min', '')) * 60;
  const progress = (currentTime / totalSeconds) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < totalSeconds) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
    } else if (currentTime >= totalSeconds) {
      setIsPlaying(false);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, totalSeconds, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  return (
    <>
      <CategoryHeader 
        title={programTitle} 
        subtitle="Sessão em andamento" 
        onBack={onBack} 
      />
      
      <div className="p-6 space-y-6">
        {/* Timer Principal */}
        <Card className="bg-gradient-quantum border-0 text-white">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold mb-4">
              {formatTime(totalSeconds - currentTime)}
            </div>
            <p className="text-white/80 text-lg">Tempo restante</p>
          </CardContent>
        </Card>

        {/* Barra de Progresso */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalSeconds)}</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Controles */}
        <div className="flex justify-center items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 hover:bg-primary/20"
            onClick={handleRestart}
          >
            <RotateCcw className="h-6 w-6" />
          </Button>

          <Button
            size="icon"
            className="h-16 w-16 bg-gradient-quantum hover:scale-110 transition-transform duration-200"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white ml-1" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 hover:bg-primary/20"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <VolumeX className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Instruções */}
        <Card className="card-quantum">
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">📋 Instruções da Sessão:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <p>Posicione o massageador na área indicada</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <p>Ajuste a intensidade conforme seu conforto</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <p>Relaxe e respire profundamente durante a sessão</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nota de Segurança */}
        <Card className="card-quantum border-accent/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <div className="text-accent">⚠️</div>
              <div className="text-sm">
                <p className="font-semibold text-accent mb-1">Nota de Segurança:</p>
                <p className="text-muted-foreground">
                  Este programa promove bem-estar e relaxamento. Não substitui tratamento médico. 
                  Interrompa se sentir desconforto.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <div className="text-center">
          <p className="text-muted-foreground">
            {isPlaying ? "🟢 Sessão em andamento..." : "⏸️ Sessão pausada"}
          </p>
        </div>
      </div>
    </>
  );
};