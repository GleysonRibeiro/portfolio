import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gleyson Ribeiro | Bacharel em Sistemas de Informação",
  description: "Portfólio profissional de Gleyson Ribeiro, desenvolvedor de software, apresentando projetos e habilidades técnicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="bg-[#0a0c10] text-slate-200 min-h-screen flex flex-col antialiased">
        {/* Header Fixo para Navegação Facilitada no Mobile */}
        <Header />
        
        {/* Zona Central: padding menor no mobile (px-4) e maior no desktop (px-8) */}
        <main className="flex-grow pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
