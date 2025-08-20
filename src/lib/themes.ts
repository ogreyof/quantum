export const themes = {
  night: {
    name: 'night' as const,
    displayName: 'Noite',
    colors: {
      background: '#0B0E1A',
      card: '#0F1220',
      text: '#F5F7FF',
      muted: '#B9C0FF',
      primary: '#7B61FF',
      accent: '#12D6DF',
      gradient: 'linear-gradient(135deg, #7B61FF 0%, #12D6DF 100%)',
      border: 'rgba(123, 97, 255, 0.2)',
      input: '#1A1F2E',
      ring: '#7B61FF',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      // Estados específicos
      cardHover: '#151A28',
      textSecondary: '#B9C0FF',
      textTertiary: '#8B92B0',
    }
  },
  light: {
    name: 'light' as const,
    displayName: 'Dia',
    colors: {
      background: '#F7F9FF',
      card: '#FFFFFF',
      text: '#0F1220',
      muted: '#4A4F6A',
      primary: '#6C4DFF',
      accent: '#0FBED8',
      gradient: 'linear-gradient(135deg, #6C4DFF 0%, #0FBED8 100%)',
      border: 'rgba(108, 77, 255, 0.2)',
      input: '#F1F3F9',
      ring: '#6C4DFF',
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626',
      // Estados específicos
      cardHover: '#F8FAFF',
      textSecondary: '#4A4F6A',
      textTertiary: '#6B7280',
    }
  }
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = typeof themes[ThemeName];