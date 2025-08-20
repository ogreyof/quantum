import React from "react";
import { Button } from "@/components/ui/button";
import { CategoryInfo, Category } from "@/types";

interface CategoryButtonProps {
  category: CategoryInfo;
  onNavigate: (category: Category) => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  category, 
  onNavigate 
}) => {
  const IconComponent = category.icon;

  return (
    <Button 
      className="w-full bg-gray-100 text-black hover:bg-gray-200 rounded-xl p-4 h-auto justify-start"
      onClick={() => onNavigate(category.id)}
    >
      <IconComponent className={`h-6 w-6 ${category.color} mr-3`} />
      <div className="text-left">
        <div className="font-semibold">{category.title}</div>
        <div className="text-sm text-gray-600">{category.subtitle}</div>
      </div>
    </Button>
  );
};