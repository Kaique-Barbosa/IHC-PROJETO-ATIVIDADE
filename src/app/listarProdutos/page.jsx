"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

export default function ListarProdutos() {
  const router = useRouter();
  const [data, setData] = useState([{}])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const resposta = await axiosInstance.get('/produtos')
          setData(resposta.data)
        } catch (error) {
          if (error.response) {
            // A resposta do servidor foi recebida, mas contém erro (status code diferente de 2xx)
            console.error('Erro de resposta:', error.response.data);
          } else if (error.request) {
            // A requisição foi feita, mas nenhuma resposta foi recebida
            console.error('Erro de requisição:', error.request);
          } else {
            // Outro tipo de erro ocorreu
            console.error('Erro ao configurar requisição:', error.message)
        }
      }
      }
      fetchData()
    }, [])
    
  

  return (
    <div className="flex w-full md:w-[80%] m-auto items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 w-full justify-center items-center m-auto">
        <div className=" flex justify-around w-full">
          <h1 className="text-4xl font-bold">Lista de Produtos</h1>
          {/* <Link href={'/'} className="text-4xl font-bold">Cadastrar Produto</Link> */}
          <button onClick={() => {router.push('/cadastroProdutos')}} className="btn btn-active btn-primary">Cadastrar Produto</button>
        </div>
        <div className="overflow-x-auto w-[40rem] xl:w-[60rem] shadow-lg shadow-indigo-500/50 p-2 rounded-lg">
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
              {/* row  */}
            {data.map((data)=>{
              <tr>
                <th>{data.id}</th>
                <td>{data.nome}</td>
                <td>{data.quantidade}</td>
                <td>{data.preco}</td>
                <td>
                  <div className="flex items-center justify-center gap-5 my-2">
                    <button className="btn btn-info">Editar</button>
                    <button className="btn btn-error">Excluir</button>
                  </div>
                </td>
              </tr>
            })}

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
