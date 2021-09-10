const mongoose = require("mongoose");

const discSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  artist: {
    type: String,
    require: true,
  },
  imgURL: {
    type: String,
  },
  companyRecord: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  releaseYear: {
    type: Number,
  },
});

discSchema.set("versionKey", false);
const Disc = mongoose.model("Disc", discSchema);
module.exports = Disc;
