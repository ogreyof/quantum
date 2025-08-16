import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum Experience - Massagem Inteligente",
  description: "Aplicativo de programas guiados de massagem, drenagem linfática e relaxamento com os massageadores Quantum",
  keywords: "massagem, drenagem linfática, relaxamento, bem-estar, quantum",
  authors: [{ name: "Quantum Experience" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#7B61FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}