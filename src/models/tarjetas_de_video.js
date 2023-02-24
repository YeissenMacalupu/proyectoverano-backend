//ESQUEMA

const mongoose = require('mongoose');

const tarjetas_de_videoSchema = mongoose.Schema({

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

module.exports = mongoose.model('Tarjeta_de_video', tarjetas_de_videoSchema)