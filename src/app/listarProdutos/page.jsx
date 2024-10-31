"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ListarProdutos() {

  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 w-full justify-center items-center m-auto">
        <div className=" flex justify-around w-full">
          <h1 className="text-4xl font-bold">Lista de Produtos</h1>
          {/* <Link href={'/'} className="text-4xl font-bold">Cadastrar Produto</Link> */}
          <button onClick={() => {router.push('/cadastroProdutos')}} className="btn btn-active btn-primary">Cadastrar Produto</button>
        </div>
        <div className="overflow-x-auto w-[60rem] shadow-lg shadow-indigo-500/50 p-2 rounded-lg">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-white font-bold text-lg">
                <th></th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <div className="flex items-center justify-center gap-5 my-2">
                    <button className="btn btn-info">Editar</button>
                    <button className="btn btn-error">Excluir</button>
                  </div>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>
                  <div className="flex items-center justify-center gap-5 my-2">
                    <button className="btn btn-info">Editar</button>
                    <button className="btn btn-error">Excluir</button>
                  </div>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>
                  <div className="flex items-center justify-center gap-5 my-2">
                    <button className="btn btn-info">Editar</button>
                    <button className="btn btn-error">Excluir</button>
                  </div>
                </td>
              </tr>
              {/* row 4 */}
            </tbody>
          </table>
          <div className="flex justify-around mt-10">
            <Link href={"/"} className="hover:underline">
              Voltar a home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
