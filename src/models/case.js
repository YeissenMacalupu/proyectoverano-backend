//ESQUEMA

const mongoose = require('mongoose');

const caseSchema = mongoose.Schema({
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
    categoria: {
        type: String,
        required: true
    },
    descripcion: {
        dimensions: {
            type: String,
            required: true
        },
        panelLateral: {
            type: String,
            required: true
        },

    },
});

module.exports = mongoose.model('Cases', caseSchema)