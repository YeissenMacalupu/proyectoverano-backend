const express = require("express");
const almacenamientoSchema = require('../models/almacenamiento');

const router = express.Router();


// POST Crear productos
router.post('/almacenamiento', (req, res) => {
    const almacenamiento = almacenamientoSchema(req.body);
    almacenamiento
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/almacenamiento', (req, res) => {
    almacenamientoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/almacenamiento/:id', (req, res) => {
    const { id } = req.params;
    almacenamientoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/almacenamiento/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    almacenamientoSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/almacenamiento/:id', (req, res) => {
    const { id } = req.params;
    almacenamientoSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;