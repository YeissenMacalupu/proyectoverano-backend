//ESQUEMA

const mongoose = require('mongoose');

const monitoresSchema = mongoose.Schema({

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

module.exports = mongoose.model('Monitores', monitoresSchema)