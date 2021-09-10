const Disc = require("../models/Disc");

// funções assincrônas de controllers

// getAll controller
const getAll = async (req, res) => {
  try {
    const discs = await Disc.find(); // promise para retorno dos dados no banco
    return res.send({ discs });
  } catch (error) {
    return res.status(500).send({ err: error });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const disc = await Disc.findById(id);
    if (!disc) {
      res.status(404).send({ error: "Disco não encontrado." });
      return;
    }
  } catch (error) {
    res.status(500).send({ err: error });
  }
};
const create = async (req, res) => {
  const { name, artist, imgURL, description, releaseYear } = req.body;

  if (!name || !artist || !imgURL || !description || !releaseYear) {
    res.status(400).send({ message: "Precisa preencher os campos pedidos." });
    return;
  }

  const newDisc = await new Disc({
    name,
    artist,
    imgURL,
    description,
    releaseYear,
  });


  try {
    await newDisc.save();
    return res.status(201).send({message: "Disco inserido com sucesso."})
  } catch (error) {
    res.status(500).send({err: error})
  }
};
const update = (req, res) => {};
const remove = (req, res) => {};

module.exports = {
  getAll,
  getById,
  create,
};
