const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// instalar o nodemon

// Middleware para processar JSON
app.use(express.json());

// Rota de exemplo
app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
