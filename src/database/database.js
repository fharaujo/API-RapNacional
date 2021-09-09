// importação do mongoose
const mongoose = require("mongoose");

// função para conexão com o banco de dados
const connectDB = () => {
  mongoose.connect(
    "string de conexão",
    {
      useNewUrlParse: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("... MongoDB conectado com sucesso.");
      }
    }
  );
};

module.exports = connectDB;
