const express = require("express");
const placa_madreSchema = require('../models/placa_madre');

const router = express.Router();


// POST Crear productos
router.post('/placa_madre', (req, res) => {
    const placa_madre = placa_madreSchema(req.body);
    placa_madre
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/placa_madre', (req, res) => {
    placa_madreSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/placa_madre/:id', (req, res) => {
    const { id } = req.params;
    placa_madreSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/placa_madre/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    placa_madreSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/placa_madre/:id', (req, res) => {
    const { id } = req.params;
    placa_madreSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;