const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//RUTAS
app.get('/', (req, res) => {
    res.send('Bienvenido a la API REST')
});

mongoose.set('strictQuery', true);


//CONECTANDO A MONGO DB ATLAS

mongoose.connect(process.env.mongodb_conexion)
    .then(() => console.log("Conexion correcta a MongoDB Atlas"))
    .catch((error) => console.error(error));


//COMPROBAMOS QUE ESTE ESCUCHANDO EL PUERTO
app.listen(port, () => console.log('Servidor funcionando en el puerto', port));









//Requieres

// const { append } = require("express/lib/response");
/*const express = require("express");
var mongoose = require("mongoose");


require("dotenv").config();
const app = express();
const port = 3000;
mongoose.set('strictQuery', true);

mongoose.connect(process.env.mongodb_conexion)
    //Comprobamos con then - catch si funciona //
    .then(() => console.log("Conexion correcta a MongoDB Atlas"))
    .catch((error) => console.log(error))

/*Comprovamos si el servidor funciona*/
// app.listen(3000, () => console.log("Servidor funcionando en el puerto", port));