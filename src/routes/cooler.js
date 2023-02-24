const express = require("express");
const coolerSchema = require('../models/cooler');

const router = express.Router();


// POST Crear productos
router.post('/cooler', (req, res) => {
    const cooler = coolerSchema(req.body);
    cooler
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/cooler', (req, res) => {
    coolerSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/cooler/:id', (req, res) => {
    const { id } = req.params;
    coolerSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/cooler/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    coolerSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/cooler/:id', (req, res) => {
    const { id } = req.params;
    coolerSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;