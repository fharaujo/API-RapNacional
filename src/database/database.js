// importação do mongoose
const mongoose = require("mongoose");
require("dotenv").config();

// função para conexão com o banco de dados
const connectDB = () => {

   
    const connectToDb = () => {
      const dbUser = process.env.DB_USER;
      const dbPassword = process.env.DB_PASSWORD;
      const dbName = process.env.DB_NAME;
      const dbChar = process.env.DB_CHAR;
      const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.${dbChar}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      const client = new mongodb.MongoClient(connectionString, options);
    //   const db = client.db("db_disc");
    //   const personagens = db.collection("disc");
    
      async function conexao() {
        try {
          await client.connect();
          console.log("Connected to MongoDB");
        } catch (err) {
          console.log(err);
        }
      }
    };
};

module.exports = connectDB;
