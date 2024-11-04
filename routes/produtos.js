const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const prisma = new PrismaClient();
const produtoRouter = express.Router();

// rota para cadastro de produtos
produtoRouter.post("/", async (req, res) => {
  try {
    const { nome, quantidade, preco } = req.body;

    const produto = await prisma.produto.create({
      data: {
        nome,
        quantidade,
        preco,
      },
    });

    res.status(200).json({ message: "Produto Cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar produto" });
  }
});

// rota para leitura de produtos
produtoRouter.get("/", async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
    

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto" });
   
  }
});

// rota para buscar um produto em especifico
produtoRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await prisma.produto.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

// rota para buscar atualizar um produto
produtoRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, quantidade, preco } = req.body;

    const produtoAtualizado = await prisma.produto.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome,
        quantidade,
        preco,
      },
    });

    res
      .status(200)
      .json({
        message: "Produto atualizado com sucesso",
        produto: produtoAtualizado,
      });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
});

// rota para deletar um produto 
produtoRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await prisma.produto.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
});

module.exports = produtoRouter;
