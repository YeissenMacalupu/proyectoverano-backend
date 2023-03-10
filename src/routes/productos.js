const express = require("express");
const productosSchema = require('../models/productos');

const router = express.Router();


// POST Crear productos
router.post('/productos', (req, res) => {
    const productos = productosSchema(req.body);
    productos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/productos', (req, res) => {
    productosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    productosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio } = req.body;
    productosSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productosSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})




/*
router.post('/productos', (req, res) => {
    res.send('crear productos')
})*/

module.exports = router;