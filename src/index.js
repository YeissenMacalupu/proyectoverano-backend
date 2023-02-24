const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const productos = require('./routes/productos');
const monitores = require('./routes/monitores');
const cases = require('./routes/case');
const fuente_de_poder = require('./routes/fuente_de_poder');
const placa_madre = require('./routes/placa_madre');
const memoria_ram = require('./routes/memoria_ram');
const computadoras = require('./routes/computadoras');
const tarjetas_de_video = require('./routes/tarjetas_de_video');

const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

//TRANSFORMAR A JSON LA INFORMACION
app.use(express.json());

// MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use('/api', productos);
app.use('/api', monitores);
app.use('/api', cases);
app.use('/api', fuente_de_poder);
app.use('/api', placa_madre);
app.use('/api', memoria_ram);
app.use('/api', computadoras);
app.use('/api', tarjetas_de_video);


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



// .ENV
/**   mongodb_conexion = mongodb+srv://proyectoverano:proyectoverano123@proyectoverano.dxq7gjb.mongodb.net/Productos?retryWrites=true&w=majority     */









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