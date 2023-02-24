const express = require("express");
<<<<<<< HEAD
const caseSchema = require('../models/almacenamiento');
=======
const almacenamientoSchema = require('../models/almacenamiento');
>>>>>>> 6c3a98ea8a353100c14e2cc6878d034adfa4d3e8

const router = express.Router();


// POST Crear productos
<<<<<<< HEAD
router.post('/cases', (req, res) => {
    const cases = caseSchema(req.body);
    cases
=======
router.post('/almacenamiento', (req, res) => {
    const almacenamiento = almacenamientoSchema(req.body);
    almacenamiento
>>>>>>> 6c3a98ea8a353100c14e2cc6878d034adfa4d3e8
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all productos
<<<<<<< HEAD
router.get('/cases', (req, res) => {
    caseSchema
=======
router.get('/almacenamiento', (req, res) => {
    almacenamientoSchema
>>>>>>> 6c3a98ea8a353100c14e2cc6878d034adfa4d3e8
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// GET all ID
<<<<<<< HEAD
router.get('/cases/:id', (req, res) => {
    const { id } = req.params;
    caseSchema
=======
router.get('/almacenamiento/:id', (req, res) => {
    const { id } = req.params;
    almacenamientoSchema
>>>>>>> 6c3a98ea8a353100c14e2cc6878d034adfa4d3e8
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

// UPDATE a producto
<<<<<<< HEAD
router.put('/cases/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    caseSchema
=======
router.put('/almacenamiento/:id', (req, res) => {
    const { id } = req.params;
    const { nameProduct, imagen, precio, marca, descripcion, categoria } = req.body;
    almacenamientoSchema
>>>>>>> 6c3a98ea8a353100c14e2cc6878d034adfa4d3e8
        .updateOne({ _id: id }, { $set: { nameProduct, imagen, precio, marca, descripcion, categoria } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

//DELETE a producto
<<<<<<< HEAD
router.delete('/cases/:id', (req, res) => {
    const { id } = req.params;
    caseSchema
=======
router.delete('/almacenamiento/:id', (req, res) => {
    const { id } = req.params;
    almacenamientoSchema
>>>>>>> 6c3a98ea8a353100c14e2cc6878d034adfa4d3e8
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
})

module.exports = router;