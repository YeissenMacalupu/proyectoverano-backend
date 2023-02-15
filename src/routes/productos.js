const express = require("express");
const productosSchema = require('../models/productos');

const router = express.Router();


//Crear productos

router.post('/productos', (req, res) => {
    const productos = productosSchema(req.body);
    productos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


/*
router.post('/productos', (req, res) => {
    res.send('crear productos')
})*/

module.exports = router;