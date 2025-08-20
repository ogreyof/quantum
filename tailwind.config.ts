import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Cores específicas Quantum - Roxo-Azul-Ciano
        'quantum': {
          'night-bg': '#0A0A0F',
          'night-card': '#FFFFFF',
          'night-text': '#FFFFFF',
          'night-muted': '#9CA3AF',
          'night-primary': '#8B5CF6',
          'night-accent': '#06B6D4',
          'light-bg': '#F8FAFC',
          'light-card': '#FFFFFF',
          'light-text': '#0F172A',
          'light-muted': '#64748B',
          'light-primary': '#7C3AED',
          'light-accent': '#0891B2',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-quantum": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(139, 92, 246, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
          },
        },
        "pulse-quantum-light": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(124, 58, 237, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-quantum": "pulse-quantum 2s ease-in-out infinite alternate",
        "pulse-quantum-light": "pulse-quantum-light 2s ease-in-out infinite alternate",
      },
      backgroundImage: {
        'gradient-quantum': 'var(--quantum-gradient)',
        'gradient-quantum-subtle': 'var(--quantum-gradient-subtle)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;