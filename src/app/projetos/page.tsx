'use client';

import { Github, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';
import data from '@/data/config.json';
import foto from '../../../public/images/projetos/portfolio.png';


export default function Projetos() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tighter uppercase">
          Meus <span className="text-blue-500">Projetos</span>
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Soluções técnicas que desenvolvi, unindo a lógica de programação à problemas reais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.projetos.map((proj, index) => (
          <div key={index} className="group relative bg-[#0d1117] border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
            
            {/* Preview da Imagem */}
            <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <NextImage 
                  src={`/portfolio${proj.imagem}`} 
                  alt={`Imagem do projeto ${proj.titulo}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{proj.titulo}</h3>
                <div className="flex gap-3">
                  <Link href={proj.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </Link>
                  <Link href={proj.demo} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {proj.descricao}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-blue-500/5 border border-blue-500/10 text-blue-400 rounded-md text-[10px] font-bold uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Card Placeholder para o Futuro */}
        <div className="border-2 border-dashed border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 opacity-50 hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-slate-600">
            <Layers size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Novo Projeto em breve</h3>
            <p className="text-sm text-slate-500"></p>
          </div>
        </div>
      </div>
    </div>
  );
}