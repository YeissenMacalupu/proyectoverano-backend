//ESQUEMA

const mongoose = require('mongoose');

const procesadoresSchema = mongoose.Schema({

    nameProduct: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Tarjeta de video', procesadoresSchema)