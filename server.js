// importação das dependencias
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// criando o app
const app = express();
const port = 3000;

// utilizando o json
app.use(express.json())

// Servidor
app.listen(port, () => {
  try {
    console.info(`Servidor rodando em: http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
