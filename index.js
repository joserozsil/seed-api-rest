'use strict'

const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');
const chalk = require('chalk');

mongoose.connect(config.MONGO_URL, () => {
  app.listen(config.PORT, () => {
    console.log(chalk.yellow(`API REST ejecutandose en el puerto: ${config.PORT}`))
  })
})