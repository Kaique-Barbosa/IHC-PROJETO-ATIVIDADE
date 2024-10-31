import Link from "next/link";

export default function CadastroUsuario() {
  return (
    <div className="flex w-full items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  w-[100%] justify-center items-center m-auto">
        <h1 className="text-4xl font-bold">FAÇA SEU CADASTRO</h1>
        <form
          action=""
        
          className="flex flex-col  gap-5 w-[25rem] shadow-lg shadow-indigo-500/50 p-2 rounded-lg"
        >
          <label className="input input-bordered flex items-center gap-2">
            Nome:
            <input type="text" className="grow" placeholder="" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            E-mail:
            <input
              type="text"
              className="grow"
              placeholder="email@exemplo.com"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Senha"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confirmar Senha"
            />
          </label>
       
          <button type="submit" className="btn btn-outline btn-primary my-5">Cadastrar</button>
          <div className=" flex justify-around">
            <Link href={"/login"} className="hover:underline">Voltar ao login</Link>
          </div>
        </form>
      </main>
    </div>
  );
}