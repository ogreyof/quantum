import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações essenciais para Vercel
  output: "standalone",
  
  // Configurações de imagem otimizadas
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "/storage/v1/object/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.placeholder.com",
      },
    ],
    unoptimized: false, // Permitir otimização de imagens
  },

  // Configurações experimentais estáveis
  experimental: {
    serverComponentsExternalPackages: ["@supabase/supabase-js"],
  },

  // Configurações de webpack otimizadas
  webpack: (config, { isServer }) => {
    // Resolver problemas com módulos Node.js
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    return config;
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
          },
        ],
      },
    ];
  },

  // ESLint e TypeScript configurações
  eslint: {
    ignoreDuringBuilds: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  // Configurações de compilação
  swcMinify: true,

  // Configurações de ambiente
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "",
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  },

  // Configurações específicas para produção
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: true, // Remove console.logs em produção
    },
  }),
};

export default nextConfig;