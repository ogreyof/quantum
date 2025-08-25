export const themes = {
  dark: {
    name: 'dark' as const,
    displayName: 'Escuro',
    colors: {
      background: '#1A1A2E',
      card: '#FFFFFF',
      text: '#FFFFFF',
      textCard: '#000000',
      muted: '#9CA3AF',
      primary: '#8B5CF6',
      accent: '#06B6D4',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
      border: 'rgba(139, 92, 246, 0.3)',
      input: '#2D2D44',
      ring: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    }
  },
  light: {
    name: 'light' as const,
    displayName: 'Claro',
    colors: {
      background: '#F8FAFC',
      card: '#FFFFFF',
      text: '#000000',
      textCard: '#000000',
      muted: '#64748B',
      primary: '#7C3AED',
      accent: '#0891B2',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 50%, #0891B2 100%)',
      border: 'rgba(124, 58, 237, 0.2)',
      input: '#FFFFFF',
      ring: '#7C3AED',
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626'
    }
  }
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = typeof themes.dark | typeof themes.light;