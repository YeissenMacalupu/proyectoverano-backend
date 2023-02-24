const express = require("express");
const refrigeracionSchema = require('../models/refrigeracion');

const router = express.Router();


// POST Crear productos
router.post('/refrigeracion', (req, res) => {
    const refrigeracion = refrigeracionSchema(req.body);
    refrigeracion
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/refrigeracion', (req, res) => {
    refrigeracionSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/refrigeracion/:id', (req, res) => {
    const { id } = req.params;
    refrigeracionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/refrigeracion/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    refrigeracionSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/refrigeracion/:id', (req, res) => {
    const { id } = req.params;
    refrigeracionSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;