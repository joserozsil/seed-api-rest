'use strict'

const config = require('../config');

/**
 * @description: configuración de cors
 * @param: req | res | next | (requeridos)
 * @return: 200 success | next middleware
 * @author: José Rodríguez @joserozsil
 */
function cors(req, res, next) {
  res.header('Access-Control-Allow-Origin', config.ORIGIN);
  res.header('Access-Control-Allow-Headers', 'Content-type, token');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, DELETE, POST, PUT, PATCH');
    return res.status(200).json();
  }
  next();
}

module.exports = cors;