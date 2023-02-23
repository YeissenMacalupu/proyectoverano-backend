//ESQUEMA

const mongoose = require('mongoose');

const placa_madreSchema = mongoose.Schema({

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

    marca: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('placa madre', placa_madreSchema)