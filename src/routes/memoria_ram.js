const express = require("express");
const memoria_ramSchema = require('../models/memoria_ram');

const router = express.Router();


// POST Crear productos
router.post('/memoria_ram', (req, res) => {
    const memoria_ram = memoria_ramsSchema(req.body);
    memoria_ram
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/memoria_ram', (req, res) => {
    memoria_ramSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/memoria_ram/:id', (req, res) => {
    const { id } = req.params;
    memoria_ramSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/memoria_ram/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    memoria_ramSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/memoria_ram/:id', (req, res) => {
    const { id } = req.params;
    memoria_ramSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;