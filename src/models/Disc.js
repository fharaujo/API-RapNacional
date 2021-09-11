const mongoose = require("mongoose");

const discSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name required"],
    lowercase: true,
  },
  artist: {
    type: String,
    required: [true, "Name required"],
    lowercase: true,
  },
  imgURL: {
    type: String,
    required: [true, "Name required"],
    lowercase: true,
  },
  companyRecord: {
    type: String,
    required: [true, "Name required"],
    lowercase: true,
  },
  description: {
    type: String,
    required: [true, "Name required"],
    lowercase: true,
  },
  releaseYear: {
    type: Number,
    required: [true, "Name required"],
    lowercase: true,
  },
});

discSchema.set("versionKey", false);
const Disc = mongoose.model("Disc", discSchema);
module.exports = Disc;
