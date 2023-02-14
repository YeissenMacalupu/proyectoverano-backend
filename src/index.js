//Requieres

// const { append } = require("express/lib/response");
const express = require("express");
var mongoose = require("mongoose");


require("dotenv").config();
const app = express();
const port = 3000;

mongoose.connect(process.env.mongodb_conexion)
    //Comprobamos con then - catch si funciona //
    .then(() => console.log("Conexion correcta a MongoDB Atlas"))
    .catch((error) => console.log(error))

/*Comprovamos si el servidor funciona*/
app.listen(3000, () => console.log("Servidor funcionando en el puerto", port));