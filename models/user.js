'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  avatar: {
    type: String
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'El campo username es requerido'],
    unique: [true, 'el campo username debe ser unico']
  },
  password: {
    type: String,
    required: [true, 'El campo password es requerido']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.post('validate', (doc, next) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(doc.password, salt, (err, hash) => {
      doc.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('user', UserSchema)
