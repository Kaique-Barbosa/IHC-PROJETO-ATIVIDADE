import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-6xl">Bem vindo </h2>
            <p className="text-2xl"> Acesse o nosso sistema!</p>

            <div className="card-actions justify-center my-6 gap-5">
              <Link href={'/login'} className="btn btn-wide bg-purple-900  text-xl">LOGIN</Link>
              <Link href={'/cadastroUsuario'} className="btn btn-wide bg-purple-900  text-xl">CRIAR CONTA</Link>
              <Link href={'/listarProdutos'} className="btn btn-wide bg-purple-900  text-xl">VER PRODUTOS</Link>
              
             
            
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
