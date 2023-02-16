const express = require("express");
const monitoresSchema = require('../models/monitores');

const router = express.Router();


// POST Crear productos
router.post('/monitores', (req, res) => {
    const monitores = monitoresSchema(req.body);
    monitores
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
router.get('/monitores', (req, res) => {
    monitoresSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
router.get('/monitores/:id', (req, res) => {
    const { id } = req.params;
    monitoresSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
router.put('/monitores/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio } = req.body;
    monitoresSchema
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
router.delete('/monitores/:id', (req, res) => {
    const { id } = req.params;
    monitoresSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})




/*
router.post('/productos', (req, res) => {
    res.send('crear productos')
})*/

module.exports = router;