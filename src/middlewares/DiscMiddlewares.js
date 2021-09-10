const moogose = require("mongoose");
const Disc = require("../models/Disc");


// middleware
const isValidId = async (req, res, next) => {
    const {id} = req.params
    const validId = await moogose.Types.ObjectId.isValid({_id: id})
    if(!validId){
        res.status(400).send({error: "ID inválido."})
    }

    try {
        const disc = await Disc.findById(id)
        res.disc = disc
    } catch (error) {
        
    }

    next();
};

module.exports = { isValidId };
