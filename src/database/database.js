// importação do mongoose
const mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId();

require("dotenv").config();

// função para conexão com o banco de dados
const connectionDB = () => {
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;
  const dbChar = process.env.DB_CHAR;
  const connectionString = `mongodb+srv://mainAdmin:<password>@cluster0.ionvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const client = new mongoose.MongoClient(connectionString, options);
  const db = client.db("db_disc");
  const disc = db.collection("disc");

  async function connection() {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = {
  connectionDB,
  db,
  disc,
  ObjectId,
};
