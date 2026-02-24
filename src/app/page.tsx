export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold">Gleyson Ribeiro</h1>
      <p className="mt-4 text-xl text-slate-400">Desenvolvedor em Transição de Carreira</p>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aqui entrarão seus cards de aplicações funcionais futuramente */}
        <div className="p-6 border border-slate-700 rounded-lg hover:border-blue-500 transition-colors">
          <h2 className="font-semibold text-lg underline">Aplicações Funcionais &rarr;</h2>
          <p>Em breve: Lista de ferramentas desenvolvidas.</p>
        </div>
        
        <div className="p-6 border border-slate-700 rounded-lg hover:border-blue-500 transition-colors">
          <h2 className="font-semibold text-lg underline">Código no GitHub &rarr;</h2>
          <p>Acesse meus repositórios e estudos técnicos.</p>
        </div>
        
      </div>
    </main>
  )
}