import { Download, Github, ArrowRight, Code, Database, Layout as LayoutIcon } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function Home() {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      
      {/* --- HERO SECTION --- */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
        
        {/* Lado Esquerdo*/}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            Bacharel em <br />
            <span className="text-blue-500">Sistemas.</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Especialista em transformar processos operacionais em soluções digitais eficientes. 
            Com bagagem como <strong>Supervisor Operacional</strong>, uno a visão de gestão à 
            engenharia de software para construir sistemas robustos e escaláveis.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
              <Download size={20} />
              Download CV
            </button>
            <Link href="https://github.com/GleysonRibeiro" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all border border-slate-700">
              <Github size={20} />
              GitHub
            </Link>
          </div>
        </div>

        {/* Lado Direito: Foto/Card*/}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0d1117] border border-slate-800 rounded-3xl p-2 overflow-hidden aspect-square flex items-center justify-center">
             <div className="relative bg-[#0d1117] border border-slate-800 rounded-3xl p-2 overflow-hidden aspect-square flex items-center justify-center">
              <NextImage 
                src="public/foto-perfil.jpg" 
                alt="Foto de Gleyson Ribeiro"
                fill
                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- RESUMO PROFISSIONAL --- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-3 text-blue-500 font-bold uppercase text-xs tracking-widest">
            <Code size={16} /> Resumo Profissional
          </div>
          <h2 className="text-2xl font-bold text-white">Engenharia de Software & Gestão</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Minha trajetória é marcada pela dualidade entre a técnica e a operação. 
            Como Bacharel em Sistemas, domino linguagens como <strong>Python, Java e JavaScript</strong>. 
            Minha experiência como supervisor me deu o "olhar de dono" necessário para 
            garantir que cada linha de código gere valor real para o negócio.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Python', 'Spring'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-800 rounded-lg text-xs text-slate-300 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl flex flex-col justify-between group cursor-pointer">
          <div className="text-white/80 text-sm font-medium">Tem um projeto em mente?</div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Vamos construir algo incrível.</h3>
            <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </section>

    </div>
  );
}