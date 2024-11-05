const express = require("express");
const cors = require("cors");
// const { PrismaClient } = require("@prisma/client");
// const jwt = require("jsonwebtoken");
// const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");

// INORTAÇÂO DE ROTAS
const auth = require("./routes/autenticacao");
const produto = require("./routes/produtos");

// DICAS PARA DEGUUGAR ERROS
// USAR:
// console.log(req.params)
// console.log(req.body)

dotenv.config();
const app = express();
const port = process.env.PORT || 3000 || 3005; // porta onde o server rosará
app.use(cors());
app.use(express.json());

// uso de rotas

app.use("/usuario", auth);
app.use("/produtos", produto);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
