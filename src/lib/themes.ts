export const themes = {
  dark: {
    name: 'dark' as const,
    displayName: 'Escuro',
    colors: {
      background: '#0B0E1A',
      card: '#0F1220',
      text: '#F5F7FF',
      textCard: '#F5F7FF',
      muted: '#B9C0FF',
      primary: '#7B61FF',
      accent: '#12D6DF',
      gradient: 'linear-gradient(135deg, #7B61FF 0%, #12D6DF 100%)',
      border: 'rgba(123, 97, 255, 0.3)',
      input: '#1A1F2E',
      ring: '#7B61FF',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    }
  },
  light: {
    name: 'light' as const,
    displayName: 'Claro',
    colors: {
      background: '#F7F9FF',
      card: '#FFFFFF',
      text: '#0F1220',
      textCard: '#0F1220',
      muted: '#4A4F6A',
      primary: '#6C4DFF',
      accent: '#0FBED8',
      gradient: 'linear-gradient(135deg, #6C4DFF 0%, #0FBED8 100%)',
      border: 'rgba(108, 77, 255, 0.2)',
      input: '#FFFFFF',
      ring: '#6C4DFF',
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626'
    }
  }
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = typeof themes.dark | typeof themes.light;