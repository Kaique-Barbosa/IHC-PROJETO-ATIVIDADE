"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import Moldal from "../components/Moldal";

export default function ListarProdutos() {
  const router = useRouter();
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resposta = await axiosInstance.get("/produtos");
      setData(resposta.data);
    } catch (error) {
      if (error.response) {
        // A resposta do servidor foi recebida, mas contém erro (status code diferente de 2xx)
        console.error("Erro de resposta:", error.response.status);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        console.error("Erro de requisição:", error.request);
      } else {
        // Outro tipo de erro ocorreu
        console.error("Erro ao configurar requisição:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const removerProduto = async (id) => {
    console.log("teste");
    try {
      const resposta = await axiosInstance.delete(`/produtos/${id}`);
      console.log("produto deletado com sucesso", resposta);
      fetchData();
      setTimeout(() => setIsLoading(false), 500);
    } catch (error) {
      if (error.response) {
        // A resposta do servidor foi recebida, mas contém erro (status code diferente de 2xx)
        console.error("Erro de resposta:", error.response.status);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        console.error("Erro de requisição:", error.request);
      } else {
        // Outro tipo de erro ocorreu
        console.error("Erro ao configurar requisição:", error.message);
      }
    }
  };

  const atualizarProduto = async (id, nome, quantidade, preco) => {
    try {
      const data = { nome, quantidade, preco };
      const resposta = await axiosInstance.put(`/produtos${id}`, data);

      console.log("produto deletado com sucesso", resposta);
      fetchData();
      setTimeout(() => setIsLoading(false), 500);
    } catch (error) {
      if (error.response) {
        console.error("Erro de resposta:", error.response.status);
      } else if (error.request) {
        console.error("Erro de requisição:", error.request);
      } else {
        console.error("Erro ao configurar requisição:", error.message);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex w-full md:w-[80%] m-auto items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 w-full justify-center items-center m-auto">
          <span className="loading loading-dots loading-lg"></span>
        </main>
      </div>
    );
  }

  return (
    <div className="flex w-full md:w-[80%] m-auto items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 w-full justify-center items-center m-auto">
        <div className=" flex justify-around w-full">
          <h1 className="text-4xl font-bold">Lista de Produtos</h1>
          {/* <Link href={'/'} className="text-4xl font-bold">Cadastrar Produto</Link> */}
          <button
            onClick={() => {
              router.push("/cadastroProdutos");
            }}
            className="btn btn-active btn-primary"
          >
            Cadastrar Produto
          </button>
        </div>
        <div className="overflow-x-auto w-[40rem] xl:w-[60rem] shadow-lg shadow-indigo-500/50 p-2 rounded-lg">
          <table className="table table-zebra text-center">
            {/* head */}
            <thead>
              <tr className="text-white font-bold text-lg">
                <th>id</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {data.map((produto, index) => (
                <tr key={index}>
                  <th>{produto.id}</th>
                  <td>{produto.nome}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.preco}</td>
                  <td>
                    <div className="flex items-center justify-center gap-5 my-2">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_2").showModal()
                        }
                        className="btn btn-info"
                      >
                        Editar
                      </button>
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Edite o campo desejado
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="table">
                              {/* head */}
                              <thead>
                                <tr>
                                  <th>id</th>
                                  <th>Nome</th>
                                  <th>Preço</th>
                                  <th>Quantidade</th>
                                </tr>
                              </thead>
                              <tbody>
                                {/* row 1 */}
                                <tr>
                                  <th>
                                    <input
                                      type="text"
                                      placeholder=""
                                      className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                  </th>
                                  <td>
                                    <input
                                      type="text"
                                      placeholder=""
                                      className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      placeholder=""
                                      className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      placeholder=""
                                      className="input input-bordered input-primary w-full max-w-xs"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button></button>
                        </form>
                      </dialog>
                      <button
                        onClick={() => removerProduto(produto.id)}
                        className="btn btn-error"
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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
