"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ListarProdutos() {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 w-full justify-center items-center m-auto">
        <div className=" flex justify-around w-full">
          <h1 className="text-4xl font-bold">Lista de Produtos</h1>
        </div>

        <form
          action=""
          className="flex flex-col justify-center gap-5 w-[25rem] shadow-lg shadow-indigo-500/50 p-3 rounded-lg"
        >
          <input
            type="text"
            placeholder="Nome "
            className="input input-bordered input-primary w-full m-auto max-w-xs"
          />
          <input
            type="number"
            placeholder="Quantidade"
            className="input input-bordered input-primary w-full m-auto max-w-xs"
          />
          <input
            type="number"
            placeholder="Preço"
            className="input input-bordered input-primary w-full m-auto max-w-xs"
          />
          <button type="submit" className="btn btn-outline w-[85%] m-auto btn-primary my-5">
            Cadastrar
          </button>
          <div className=" flex justify-around">
            <Link href={'/listarProdutos'} className="hover:underline">Lista de Produtos</Link>
            <Link href={'/'} className="hover:underline">Voltar ao Home</Link>
          </div>
        </form>
      </main>
    </div>
  );
}
