const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const prisma = new PrismaClient()
const router = express.Router()

// Função para gerar o token JWT
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
  };

  // Rotas de registro
  router.post("/registrar", async (req, res) => {
    try {
      const { nome, email, senha } = req.body;
  
      // Verifique se todos os dados foram enviados corretamente
      if (!nome || !email || !senha) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }
  
      const senhaEncripty = await bcryptjs.hash(senha, 10);
  
      const user = await prisma.user.create({
        data: {
          nome,
          email,
          senha: senhaEncripty,
        },
      });
  
      // Gera um token para o usuário registrado
      const token = generateToken(user.id);
      
      // Remover a linha com sessionStorage, pois está sendo usada no lado do cliente
      res.status(200).json({ message: "Usuário criado com sucesso", token });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);  // Log do erro completo
      res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
    }
  });

  // ROTA PARA LISTAR USUARIOS

  router.get('/listar', async (req, res) => {
    try {
      const usuaios = await prisma.user.findMany()
      res.status(200).json(usuaios)
    } catch (error) {
      res.status(500).json(error)
    }
  })
  


  // rota de login
  router.post('/login', async (req, res) => {
      try {
        const {email, senha} = req.body
  
        const user = await prisma.user.findUnique({
          where: {email}
        })
  
        if(!user){
          return res.status(404).json({ error: "Usuario não encontrado"})
        }
  
        const senhaCorreta = await bcryptjs.compare(senha, user.senha)
        if(!senhaCorreta){
          return res.status(404).json({ error: "Senha incorreta" })
        }
  
        const token = generateToken(user.id)
        res.json(({message: "Login bem-Sussedidco"}, token))
  
      } catch (error) {
        res.status(500).json({error: "Erro ao fazer login"})
      }
  })

  module.exports = router
