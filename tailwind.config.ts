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
        
        // Cores específicas Quantum
        'quantum': {
          'night-bg': '#0B0E1A',
          'night-card': '#0F1220',
          'night-text': '#F5F7FF',
          'night-muted': '#B9C0FF',
          'night-primary': '#7B61FF',
          'night-accent': '#12D6DF',
          'light-bg': '#F7F9FF',
          'light-card': '#FFFFFF',
          'light-text': '#0F1220',
          'light-muted': '#4A4F6A',
          'light-primary': '#6C4DFF',
          'light-accent': '#0FBED8',
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
            boxShadow: "0 0 10px rgba(123, 97, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(123, 97, 255, 0.6)",
          },
        },
        "pulse-quantum-light": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(108, 77, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(108, 77, 255, 0.6)",
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