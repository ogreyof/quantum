import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CategoryHeaderProps {
  title: string;
  subtitle: string;
  onBack: () => void;
}

export const CategoryHeader = ({ title, subtitle, onBack }: CategoryHeaderProps) => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-purple-500/20">
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-purple-500/20"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-gray-400">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};