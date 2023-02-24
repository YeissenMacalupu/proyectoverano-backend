const express = require("express");
const mouse_tecladoSchema = require('../models/mouse_teclado');

const router = express.Router();


// POST Crear productos
router.post('/mouse_teclado', (req, res) => {
    const mouse_teclado = mouse_tecladoSchema(req.body);
    mouse_teclado
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/mouse_teclado', (req, res) => {
    mouse_tecladoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/mouse_teclado/:id', (req, res) => {
    const { id } = req.params;
    mouse_tecladoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/mouse_teclado/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    mouse_tecladoSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/mouse_teclado/:id', (req, res) => {
    const { id } = req.params;
    mouse_tecladoSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;