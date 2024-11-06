"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { useState } from "react";

export default function ListarProdutos() {
  const [nome, setNome] = useState();
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0);


  
  // Lendo em tempo real os dados dos inputs e armazenando nos states
  const handleInputs = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'quantidade':
        setQuantidade(parseInt(value));
        break;
      case 'preco':
        setPreco(parseFloat(value));
        break;
      default:
        break;
    }
  };

  const cadastrarProdutos = async (event) => {
    event.preventDefault();
    try {
      if(nome && quantidade && preco){
        const data = { nome, quantidade, preco };
        const resposta = await axiosInstance.post("/produtos", data);
        console.log("Produto cadastrado com sucesso", resposta.status);
      }
    } catch (error) {
      console.log("Erro ao cadastrar produto", error);
    }
  };

  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 w-full justify-center items-center m-auto">
        <div className="flex justify-around w-full">
          <h1 className="text-4xl font-bold">Lista de Produtos</h1>
        </div>

        <form
          onSubmit={cadastrarProdutos}
          className="flex flex-col justify-center gap-5 w-[25rem] shadow-lg shadow-indigo-500/50 p-3 rounded-lg"
        >
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            onChange={handleInputs}
            className="input input-bordered input-primary w-full m-auto max-w-xs"
          />
          <input
            type="number"
            placeholder="Quantidade"
            name="quantidade"
            onChange={handleInputs}
            className="input input-bordered input-primary w-full m-auto max-w-xs"
          />
          <input
            type="number"
            placeholder="Preço"
            name="preco"
            onChange={handleInputs}
            className="input input-bordered input-primary w-full m-auto max-w-xs"
          />
          <button type="submit" className="btn btn-outline w-[85%] m-auto btn-primary my-5">
            Cadastrar
          </button>
          <div className="flex justify-around">
            <Link href={'/listarProdutos'} className="hover:underline">Lista de Produtos</Link>
            <Link href={'/'} className="hover:underline">Voltar ao Home</Link>
          </div>
        </form>
      </main>
    </div>
  );
}
