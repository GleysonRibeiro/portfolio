'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Terminal, Menu, X } from 'lucide-react';
import data from '@/data/config.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c10]/80 backdrop-blur-md border-b border-slate-800">
      <nav className='max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center'>
        
        {/* Logo */}
        <Link href="/" className='flex items-center gap-2 group' onClick={() => setIsOpen(false)}>
          <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-blue-500 transition-colors'>
            <Terminal 
              size={20} 
              strokeWidth={2.5} 
              className="text-white group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-white uppercase">
            {data.perfil.primeiroNome}
            <span className="text-blue-500 ml-1">{data.perfil.sobrenome}</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <li>
            <Link href="/projetos" className="hover:text-white transition-colors">Projetos</Link>
          </li>
          <li>
            <Link href="/curriculo" className="hover:text-white transition-colors">Currículo</Link>
          </li>
          <li>
            <a 
              href="#contato" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed top-0 left-0 w-full h-screen bg-[#0a0c10] flex flex-col items-start justify-center gap-2 text-3xl font-bold transition-all duration-500 md:hidden z-40
          px-10
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}>
          {/* Linha decorativa ou Categoria */}
          <span className="text-blue-500 text-xs uppercase tracking-[0.3em] mb-4">Navegação</span>

          <Link 
            href="/" 
            onClick={toggleMenu} 
            className="w-full py-6 border-b border-slate-800/50 hover:text-blue-500 transition-colors flex justify-between items-center group"
          >
            Início <span className="text-slate-800 text-sm"></span>
          </Link>
          
          <Link 
            href="/projetos" 
            onClick={toggleMenu} 
            className="w-full py-6 border-b border-slate-800/50 hover:text-blue-500 transition-colors flex justify-between items-center group"
          >
            Projetos <span className="text-slate-800 text-sm"></span>
          </Link>
          
          <Link 
            href="/curriculo" 
            onClick={toggleMenu} 
            className="w-full py-6 border-b border-slate-800/50 hover:text-blue-500 transition-colors flex justify-between items-center group"
          >
            Currículo <span className="text-slate-800 text-sm"></span>
          </Link>
          
          <div className="w-full pt-10">
            <a 
              href="#contato" 
              onClick={toggleMenu}
              className="w-full bg-blue-600 text-white py-6 rounded-2xl shadow-xl shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-2 text-xl"
            >
              Contato
            </a>
          </div>

          {/* Opcional: Footer do Menu Mobile para preencher espaço inferior */}
          <div className="absolute bottom-10 left-10">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} Gleyson Ribeiro
            </p>
          </div>
        </div>

      </nav>
    </header>
  );
}