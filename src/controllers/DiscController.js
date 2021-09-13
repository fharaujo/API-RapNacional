const Disc = require("../models/Disc");

// getAll controller
const getAll = async (req, res) => {
  try {
    const discs = await Disc.find(); // promise para retorno dos dados no banco
    return res.send({ discs });
  } catch (error) {
    return res.status(500).send({ err: error.message });
  }
};

// gelById controller
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const disc = await Disc.findById(id);
    if (!disc) {
      res.status(404).send({ error: "Disco não encontrado." });
      return;
    }
    return res.status(200).send({ disc });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

// Create controller
const create = async (req, res) => {
  const { name, artist, imgURL, companyRecord, description, releaseYear } =
    req.body;

  if (
    !name ||
    !artist ||
    !imgURL ||
    !companyRecord ||
    !description ||
    !releaseYear
  ) {
    res
      .status(400)
      .send({ message: "Necessário preencher os campos pedidos." });
    return;
  }

  const newDisc = await new Disc({
    name,
    artist,
    imgURL,
    companyRecord,
    description,
    releaseYear,
  });

  try {
    await newDisc.save();
    res.status(200).send({ message: "Disco inserido com sucesso.", newDisc });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

// update controller
const update = async (req, res) => {
  const { name, artist, imgURL, companyRecord, description, releaseYear } =
    req.body;
  if (
    !name ||
    !artist ||
    !imgURL ||
    !companyRecord ||
    !description ||
    !releaseYear
  ) {
    res
      .status(400)
      .send({ message: "Necessário preencher os campos pedidos." });
    return;
  }

  res.disc.name = name;
  res.disc.artist = artist;
  res.disc.imgURL = imgURL;
  res.disc.companyRecord = companyRecord;
  res.disc.description = description;
  res.disc.releaseYear = releaseYear;

  try {
    await res.disc.save();
    res.send({ message: "Disco atualizado com sucesso." });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// delete controller
const remove = async (req, res) => {
  try {
    await res.disc.remove();
    return res.send({ message: "Disco removido com sucesso." });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// query filters
const filterByNameDisc = async (req, res) => {
  const nameDisc = req.query.name;

  if (!nameDisc) {
    res.status(404).send({ message: "Parâmetro não recebido" });
  }

  try {
    const discs = await Disc.find({ name: { $regex: `${nameDisc}` } });
    res.status(200).send({discs})
  } catch (error) {
    res.status(500).send({error: error.message})
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  filterByNameDisc,
};
