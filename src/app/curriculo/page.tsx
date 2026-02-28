'use client';

import { useEffect, useState } from 'react';
import { Download, Briefcase, GraduationCap, Code2, User, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';

export default function Curriculo() {
  const [mounted, setMounted] = useState(false);

  // Corrige o erro de Hydration garantindo que o componente foi montado no cliente
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
          <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">Gleyson Barcelos Ribeiro</h1>
          <p className="text-blue-500 font-medium text-lg mt-1">Bacharel em Sistemas de Informação | Supervisor Operacional</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400">
            <span className="flex items-center gap-1"><MapPin size={14} /> Campos dos Goytacazes, RJ</span>
            <span className="flex items-center gap-1"><Mail size={14} /> ribeiro.gleyson@gmail.com</span>
            <span className="flex items-center gap-1"><Phone size={14} /> (22) 99766-0134</span>
          </div>
        </div>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
        >
          <Download size={18} /> Exportar PDF
        </button>
      </div>

      {/* Perfil Profissional */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <User className="text-blue-500" size={22} /> Resumo Profissional
        </h2>
        <p className="text-slate-400 leading-relaxed text-justify">
          Profissional com sólida trajetória no setor de transportes, evoluindo de funções operacionais até a posição de <strong>Supervisor Operacional</strong>[cite: 13, 15]. 
          Expertise na gestão de equipes multidisciplinares e administração de contratos de fretamento[cite: 15]. Atualmente, uno a experiência 
          de gestão com a tecnologia para desenvolver soluções eficientes e automações de processos[cite: 19].
        </p>
      </section>

      {/* Competências e Habilidades (Estilo Botões/Tags) */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Code2 className="text-blue-500" size={22} /> Competências e Habilidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(competências).map(([categoria, itens]) => (
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
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#0a0c10]"></div>
            <h3 className="text-lg font-bold text-white leading-none">Supervisor de Operações / Encarregado Administrativo</h3>
            <p className="text-blue-400 text-sm font-semibold mt-1">Auto Viação 1001 Ltda | 2018 — Atual [cite: 21, 23, 27]</p>
            <ul className="text-slate-400 text-sm mt-3 space-y-2">
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-1" /> Gestão de contratos de fretamento e supervisão de equipe (planejamento de frota e pessoal)[cite: 25, 28].</li>
              <li className="flex gap-2"><CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-1" /> Coordenação de aproximadamente 150 colaboradores[cite: 15].</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-4 h-4 bg-slate-700 rounded-full border-4 border-[#0a0c10]"></div>
            <h3 className="text-lg font-bold text-white leading-none">Analista de Suporte</h3>
            <p className="text-slate-500 text-sm font-semibold mt-1">Indra | 2015 — 2017 [cite: 34, 36]</p>
            <p className="text-slate-400 text-sm mt-2">Atendimento Help desk para Windows, SAP e Lotus Notes[cite: 38, 39].</p>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="space-y-4 pb-12">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <GraduationCap className="text-blue-500" size={22} /> Formação Acadêmica
        </h2>
        <div className="bg-[#0d1117] border border-slate-800 p-6 rounded-2xl flex justify-between items-center group">
          <div>
            <h3 className="text-white font-bold text-lg">Bacharelado em Sistemas de Informação</h3>
            <p className="text-slate-400">IFF - Instituto Federal Fluminense [cite: 63, 64]</p>
          </div>
          <span className="text-blue-500 font-bold bg-blue-500/10 px-4 py-1 rounded-full text-xs">2018 — 2025 [cite: 65]</span>
        </div>
      </section>

    </div>
  );
}