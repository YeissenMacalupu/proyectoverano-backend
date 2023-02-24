const express = require("express");
const laptopsSchema = require('../models/laptops');

const router = express.Router();


// POST Crear productos
router.post('/laptops', (req, res) => {
    const laptops = laptopSchema(req.body);
    laptops
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/laptops', (req, res) => {
    laptopsSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/laptops/:id', (req, res) => {
    const { id } = req.params;
    laptopsSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/laptops/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    laptopsSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/laptops/:id', (req, res) => {
    const { id } = req.params;
    laptopsSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;