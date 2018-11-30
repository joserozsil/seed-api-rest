'use strict'

const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  userFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'El campo userFrom es requerido']
  },
  userTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'El campo userFrom es requerido']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date
  },
  deletedAt: {
    type: Date
  }
});

module.exports = mongoose.model('contact', ContactSchema)
