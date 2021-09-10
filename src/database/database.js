// importação do mongoose
const mongoose = require("mongoose");
require("dotenv").config();

// variaveis de ambientes
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbChar = process.env.DB_CHAR;
const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.${dbChar}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// conexão mongoose 
const mogooseConnect = () => {
 mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB conectado.");
    }
  }
);
}
module.exports = mogooseConnect;
