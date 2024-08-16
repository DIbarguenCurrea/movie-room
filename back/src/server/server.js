//Paso 1: Aqui llamo a toda la libreria de Express.

const express = require("express");
const movieRouter = require("../routes/movieRoutes.js");
const homeRouter = require("../routes/homeRoutes.js");

// Paso 2: Aqui lo instancio

const app = express();
const cors = require("cors");
const morgan = require("morgan");

//Aqui colocaremos los Middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", homeRouter);
app.use("/movies", movieRouter);

// Paso 3: Aqui lo exporto.

module.exports = app;
