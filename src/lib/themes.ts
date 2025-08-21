export const themes = {
  night: {
    name: 'night' as const,
    displayName: 'Claro',
    colors: {
      background: '#F1F5F9',
      card: '#FFFFFF',
      text: '#0F172A',
      muted: '#64748B',
      primary: '#8B5CF6',
      accent: '#06B6D4',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
      border: 'rgba(139, 92, 246, 0.2)',
      input: '#FFFFFF',
      ring: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      cardHover: '#F9FAFB',
      textSecondary: '#475569',
      textTertiary: '#64748B',
    }
  },
  light: {
    name: 'light' as const,
    displayName: 'Escuro',
    colors: {
      background: '#1E293B',
      card: '#334155',
      text: '#F8FAFC',
      muted: '#94A3B8',
      primary: '#8B5CF6',
      accent: '#06B6D4',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
      border: 'rgba(139, 92, 246, 0.3)',
      input: '#475569',
      ring: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      cardHover: '#475569',
      textSecondary: '#E2E8F0',
      textTertiary: '#94A3B8',
    }
  }
} as const;

export type ThemeName = keyof typeof themes;

// Definir Theme como union type explícito
export type Theme = 
  | typeof themes.night
  | typeof themes.light;