const express = require("express");
const procesadoresSchema = require('../models/procesadores');

const router = express.Router();


// POST Crear productos
router.post('/procesadores', (req, res) => {
    const procesadores = procesadoresSchema(req.body);
    procesadores
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/procesadores', (req, res) => {
    procesadoresSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/procesadores/:id', (req, res) => {
    const { id } = req.params;
    procesadoresSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/procesadores/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    procesadoresSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/procesadores/:id', (req, res) => {
    const { id } = req.params;
    procesadoresSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;