const express = require("express");
const tarjetas_de_videoSchema = require('../models/tarjetas_de_video');

const router = express.Router();


// POST Crear productos
router.post('/tarjetas_de_video', (req, res) => {
    const tarjetas_de_video = tarjetas_de_videoSchema(req.body);
    tarjetas_de_video
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/tarjetas_de_video', (req, res) => {
    tarjetas_de_videoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/tarjetas_de_video/:id', (req, res) => {
    const { id } = req.params;
    tarjetas_de_videoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/tarjetas_de_video/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    tarjetas_de_videoSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/tarjetas_de_video/:id', (req, res) => {
    const { id } = req.params;
    tarjetas_de_videoSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;