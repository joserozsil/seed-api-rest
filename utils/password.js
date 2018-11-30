'use strict'

const bcrypt = require('bcrypt');

const operations = {
  /**
   * @description: comparar texto plano con hash de bcrypt
   * @param: text | string  | texto plano | requerido
   * @param: hash | string  | hash bcrypt | requerido
   * @author: José Rodríguez @joserozsil
  */
  compare: (text, hash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(text, hash, (err, res) => {
        if (err) {
          reject(false)
        }
        if (res === true) {
          resolve(true)
        } else {
          reject(false)
        }
      })
    })
  }
}

module.exports = operations
