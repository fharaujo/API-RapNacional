// importação das dependencias
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config();
const connectionDB = require("./src/database/database");
const routes = require("./src/routes/routes");

connectionDB();
// criando o app
const app = express();
const port = process.env.PORT || 3000;

// utilizando o json
app.use(express.json());
// utilizando as rotas
app.use(routes);
// utilizando cors
app.use(cors());
app.options("*", cors());

// swagger documentação da API
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title:
        "API Rap Nacional - 2021 [Projeto Módulo 3 - Back-end Blue Edtech ",
      version: "1.0.0",
      description:
        "Catálogo gerenciador dos melhores discos/cds/eps de Rap Nacional e seus respectivos artistas.",
    },
    servers: [
      {
        url: "https://api-rapnacional.herokuapp.com",
      },
    ],
    basePath: "/",
    paths: {},
    definitions: {},
    responses: {},
    parameters: {},
    securityDefinitions: {},
  },
  apis: ["./src/routes/routes.js"], // files containing annotations as above
};
const specs = swaggerJsDoc(options);
// utilizando a documentção swagger
app.use("/api-documentation", swaggerUI.serve, swaggerUI.setup(specs));

// Servidor
app.listen(port, () => {
  try {
    console.info(
      `Servidor rodando em: http://localhost:${port}/api-documentation`
    );
  } catch (error) {
    console.log(error);
  }
});
