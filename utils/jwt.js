'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

const operations = {
  /**
  * @description encode payload
  * @param string $data | (requerido)
  * @return promise : resolve { token, itt } - reject { message, error }
  * @author: José Rodríguez @joserozsil
  */
  encoded: (data) => {
    return new Promise((resolve, reject) => {
      try {

        const payload = {
          data,
          itt: moment().add(7, 'hours').unix()
        }

        const encode = jwt.encode(payload, config.SECRET);

        resolve({
          token: encode,
          itt: payload.itt
        });

      } catch (error) {
        reject({
          message: 'Algo ha salido mal',
          error
        });
      }
    })
  },
  /**
  * @description descodificar payload
  * @param string $payload - (requerido)
  * @return promise : resolve { payload } - reject { message, error }
  * @author: José Rodríguez @joserozsil
  */
  decoded: (payload) => {
    return new Promise((resolve, reject) => {
      try {
        const decoded = jwt.decode(payload, config.SECRET);
        resolve(decoded);
      } catch (error) {
        reject({
          message: 'Token inválido',
          error
        });
      }
    })
  }
}

module.exports = operations
