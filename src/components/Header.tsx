import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c10]/80 backdrop-blur-md border-b border-slate-800">
        <nav className='max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between itens-center'>
            {/* Logo */}
            <Link href="/" className='flex items-center gap-2 group'>
                <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-blue-500 transition-colors'>
                    <Terminal 
                        size={32} 
                        strokeWidth={2.5} 
                        className="text-blue-500 group-hover:scale-110 transition-transform duration-300" 
                    />
                </div>
                <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-white">
                    Gleyson
                    <span className="text-blue-500">
                        Ribeiro
                    </span>
                </span>
            </Link>
            {/* Links - Ocultos no mobile, visíveis no desktop. No futuro, adicionaremos o menu hambúrguer aqui */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                <li><Link href="/projetos" className="hover:text-white transition-colors">Projetos</Link></li>
                <li><Link href="/experiencia" className="hover:text-white transition-colors">Experiência</Link></li>
                <li><Link href="/habilidades" className="hover:text-white transition-colors">Habilidades</Link></li>
                <li><Link href="/contato" className="hover:text-white transition-colors border border-slate-700 px-4 py-2 rounded-full hover:bg-slate-800">Contato</Link></li>
            </ul>

            {/* Botão Mobile simples (ícone) */}
            <button className="md:hidden p-2 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
      </nav>
    </header>
  );
}