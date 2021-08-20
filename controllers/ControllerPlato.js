const {response, request} = require('express');
const Plato = require("../models/plato");

const prueba3 = async (req,res)=> {
    res.status(200).send({message: 'probando una acción'});
}

const platoAll = async (req=request, res=response) => {
    const plato = await Plato.find();
    res.json( plato);
}


const platoPost = async (req, res) => {
    const { name, description, price, id, idtype ,img} = req.body;
    const plato = new Plato({name, description, price, id, idtype ,img });
    await plato.save();
    res.json({tipodeplato});
}

const platoPut = async (req, res) => {
    const { name, description, price, id, idtype ,img} = req.body;
    const plato = await Plato.findByIdAndUpdate(req.params.id, {name, description, price, id, idtype ,img});
    res.json(plato);
}

const platoDelete = async (req, res=response) => {
    const plato = await Plato.findByIdAndDelete(req.params.id);
    res.json(plato);
}


module.exports = {
    prueba3,
    platoAll,
    platoPost,
    platoPut,
    platoDelete
}

