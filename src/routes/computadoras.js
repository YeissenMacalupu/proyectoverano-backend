const express = require("express");
const computadorasSchema = require('../models/computadoras');

const router = express.Router();


// POST Crear productos
router.post('/computadoras', (req, res) => {
    const computadoras = computadoraSchema(req.body);
    computadoras
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/computadoras', (req, res) => {
    computadorasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/computadoras/:id', (req, res) => {
    const { id } = req.params;
    computadorasSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/computadoras/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    computadorasSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/computadoras/:id', (req, res) => {
    const { id } = req.params;
    computadorasSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;