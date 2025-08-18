import { useState } from 'react';
import { Category } from '@/types';

export const useNavigation = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>('home');

  const navigateToCategory = (category: Category) => {
    setCurrentCategory(category);
  };

  const navigateToHome = () => {
    setCurrentCategory('home');
  };

  return {
    currentCategory,
    navigateToCategory,
    navigateToHome,
    setCurrentCategory
  };
};