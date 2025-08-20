export const themes = {
  night: {
    name: 'night' as const,
    displayName: 'Noite',
    colors: {
      background: '#0A0A0F',
      card: '#FFFFFF',
      text: '#FFFFFF',
      muted: '#9CA3AF',
      primary: '#8B5CF6',
      accent: '#06B6D4',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #06B6D4 100%)',
      border: 'rgba(139, 92, 246, 0.2)',
      input: '#1F2937',
      ring: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      cardHover: '#F9FAFB',
      textSecondary: '#E5E7EB',
      textTertiary: '#9CA3AF',
    }
  },
  light: {
    name: 'light' as const,
    displayName: 'Dia',
    colors: {
      background: '#F8FAFC',
      card: '#FFFFFF',
      text: '#0F172A',
      muted: '#64748B',
      primary: '#7C3AED',
      accent: '#0891B2',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #0891B2 100%)',
      border: 'rgba(124, 58, 237, 0.2)',
      input: '#F1F5F9',
      ring: '#7C3AED',
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626',
      cardHover: '#F8FAFF',
      textSecondary: '#475569',
      textTertiary: '#64748B',
    }
  }
} as const;

export type ThemeName = keyof typeof themes;

// Definir Theme como union type explícito
export type Theme = 
  | typeof themes.night
  | typeof themes.light;