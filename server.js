// importação das dependencias
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectionDB = require("./src/database/database")
const routes = require("./src/routes/routes");

connectionDB()
// criando o app
const app = express();
const port = process.env.PORT || 3000;

// utilizando o json
app.use(express.json());
// utilizando as rotas
app.use(routes);

// Servidor
app.listen(port, () => {
  try {
    console.info(`Servidor rodando em: http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
