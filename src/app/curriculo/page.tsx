'use client';

import { useEffect, useState } from 'react';
import { Download, Briefcase, GraduationCap, Code2, User, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import data from '@/data/config.json';

export default function Curriculo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const competências = {
    linguagens: ['Python', 'Java', 'Javascript', 'C', 'Spring Framework'],
    noCode: ['Bubble.io', 'AppSheet', 'n8n'],
    banco: ['SQL'],
    ferramentas: ['Git/GitHub', 'Google Colab', 'VS Code'],
    metodologias: ['Scrum', 'Kanban'],
    sistemas: ['Windows', 'SAP', 'Lotus Notes', 'Redes'],
    outros: ['Lógica', 'Integrações', 'Prototipagem']
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-800 pb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">{data.perfil.nome}</h1>
          <p className="text-blue-500 font-medium text-lg mt-1">{data.perfil.titulo}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400">
            <span className="flex items-center gap-1"><MapPin size={14} /> {data.perfil.cidade}</span>
            <span className="flex items-center gap-1"><Mail size={14} /> {data.perfil.email}</span>
            <span className="flex items-center gap-1"><Phone size={14} />{data.perfil.telefone}</span>
          </div>
        </div>
        
      </div>

      {/* Perfil Profissional */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <User className="text-blue-500" size={22} /> Resumo Profissional
        </h2>
        <p className="text-slate-400 leading-relaxed text-justify">
          {data.stack.Resumo}
        </p>
      </section>

      {/* Competências e Habilidades (Estilo Botões/Tags) */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Code2 className="text-blue-500" size={22} /> Competências e Habilidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(data.curriculo.habilidades).map(([categoria, itens]) => (
            <div key={categoria} className="space-y-3">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-l-2 border-blue-500 pl-2">
                {categoria.replace('noCode', 'Plataformas No/Low-Code').replace('ferramentas', 'Ambientes').replace('banco', 'Dados')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {itens.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg text-xs font-medium hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiências */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Briefcase className="text-blue-500" size={22} /> Experiência Profissional
        </h2>
        
        <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-6">
          {data.curriculo.experiencias.map((exp, index) => {
            const isAtual = exp.periodo.includes("Atual");
            
            return (
              <div key={index} className="relative">
                {/* Indicador na Timeline */}
                <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-4 border-[#0a0c10] ${
                  isAtual ? "bg-blue-600" : "bg-slate-700"
                }`}></div>
                
                <h3 className="text-lg font-bold text-white leading-none">
                  {exp.cargo}
                </h3>
                
                <p className={`${isAtual ? "text-blue-400" : "text-slate-500"} text-sm font-semibold mt-1`}>
                  {exp.empresa} | {exp.periodo}
                </p>
                
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {exp.descricao}
                </p>

                {/* Tags de Competências da Experiência */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags?.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-slate-800 text-slate-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Formação */}
      <section className="space-y-4 pb-12">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <GraduationCap className="text-blue-500" size={22} /> Formação Acadêmica
        </h2>
        
        <div className="space-y-4">
          {data.curriculo.formacao.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#0d1117] border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center group hover:border-blue-500/30 transition-all duration-300 gap-4"
            >
              <div>
                <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                  {item.curso}
                </h3>
                <p className="text-slate-400">
                  {item.instituicao}
                </p>
                {item.detalhes && (
                  <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest font-medium">
                    {item.detalhes}
                  </p>
                )}
              </div>
              <div className="shrink-0 w-fit">
                <span className="text-blue-500 font-bold bg-blue-500/10 px-4 py-1 rounded-full text-xs">
                  {item.periodo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}