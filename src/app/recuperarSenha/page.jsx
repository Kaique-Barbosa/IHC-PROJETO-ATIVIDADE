import Link from "next/link";

export default function recuperarSenha() {
  return (
    <div className="flex w-full items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  w-[100%] justify-center items-center m-auto">
        <h1 className="text-4xl font-bold">RECUPERAR SENHA</h1>
        <form action=""  className="flex flex-col  gap-5 w-[25rem] shadow-lg shadow-indigo-500/50 p-2 rounded-lg">
          <label className="input input-bordered flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow" placeholder="Email" />
          </label>

          
          <button type="submit" className="btn btn-outline btn-primary my-5">Recuperar senha</button>
          <div className=" flex justify-around">
            <Link href={'/login'} className="hover:underline">Voltar para login</Link>
            <Link href={'/'} className="hover:underline">Voltar para home</Link>
          </div>
        
        </form>
      </main>
    </div>
  );
}
