const mongoose = require("mongoose");

const discSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imgURL: {
    type: String,
  },
  description: {
    type: String,
  },
  releaseYear: {
    type: Number,
  },
});

module.exports = mongoose.model("Disc", discSchema)
