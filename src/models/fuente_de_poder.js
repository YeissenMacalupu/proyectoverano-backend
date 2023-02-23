//ESQUEMA

const mongoose = require('mongoose');

const fuente_de_poderSchema = mongoose.Schema({

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

module.exports = mongoose.model('Fuente de Poder', fuente_de_poderSchema)