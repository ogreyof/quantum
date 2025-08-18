import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração essencial para Vercel
  output: "standalone",
  
  // Configurações de imagem otimizadas
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.placeholder.com",
      },
    ],
    unoptimized: false,
  },

  // Configurações de webpack simplificadas para Vercel
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },

  // Configurações para produção na Vercel
  eslint: {
    ignoreDuringBuilds: false, // Ativar ESLint para produção
  },

  typescript: {
    ignoreBuildErrors: false, // Ativar verificação TypeScript
  },

  // Otimizações de compilação
  swcMinify: true,
  
  // Configurações experimentais mínimas
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Configurações de redirecionamento
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing',
        permanent: false,
      },
    ];
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;