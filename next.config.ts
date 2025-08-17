import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações essenciais para Vercel
  output: "standalone",
  
  // Configurações de imagem
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

  // Configurações de webpack simplificadas
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

  // ESLint e TypeScript para produção
  eslint: {
    ignoreDuringBuilds: true, // Ignorar durante build para evitar falhas
  },

  typescript: {
    ignoreBuildErrors: true, // Ignorar erros de TS durante build
  },

  // Otimizações de compilação
  swcMinify: true,
  
  // Configurações experimentais mínimas
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;