const express = require("express");
const fuente_de_poderSchema = require('../models/fuente_de_poder');

const router = express.Router();


// POST Crear productos
router.post('/fuente_de_poder', (req, res) => {
    const fuente_de_poder = fuente_de_poderSchema(req.body);
    fuente_de_poder
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/fuente_de_poder', (req, res) => {
    fuente_de_poderSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/fuente_de_poder/:id', (req, res) => {
    const { id } = req.params;
    fuente_de_poderSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/fuente_de_poder/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    fuente_de_poderSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/fuente_de_poder/:id', (req, res) => {
    const { id } = req.params;
    fuente_de_poderSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;