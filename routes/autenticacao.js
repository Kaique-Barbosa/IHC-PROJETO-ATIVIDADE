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
      const senhaEncripty = await bcryptjs.hash(senha, 10);
      
      const user = await prisma.user.create({
        data: {
          nome,
          email,
          senha: senhaEncripty,
        },
      });
  
      // Gera um token para o usuário registrado
    //   const token = generateToken(user.id);
    //   console.log(user.id)
    //   res.status(200).json({ message: "Usuario criado com sucesso", token });
    
      res.status(200).json({ message: "Usuario criado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  });

  // ROTA PARA LISTAR USUARIOS

  router.get('/lista', async (req, res) => {
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
