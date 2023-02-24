const express = require("express");
const perifericosSchema = require('../models/perifericos');

const router = express.Router();


// POST Crear productos
router.post('/perifericos', (req, res) => {
    const perifericos = perifericosSchema(req.body);
    perifericos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/perifericos', (req, res) => {
    perifericosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/perifericos/:id', (req, res) => {
    const { id } = req.params;
    perifericosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/perifericos/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    perifericosSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/perifericos/:id', (req, res) => {
    const { id } = req.params;
    perifericosSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;