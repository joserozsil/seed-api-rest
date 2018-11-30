'use strict'

const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const routes = require('./routes');
const volleyball = require('volleyball');
const cors = require('./middlewares/cors');

// habilitar logs de peticiones en consola
if (config.MODE === 'dev') {
  app.use(volleyball);
}

// permitir formato json en peticiones http
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// habilitar cors disponibles
app.use(cors);

// habilitar rutas de api rest
app.use('/api', routes);

module.exports = app
