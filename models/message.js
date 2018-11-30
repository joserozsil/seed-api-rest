'use strict'

const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  room: {
    type: String,
    required: [true, 'El campo room es requerido']
  },
  userId: {
    type: mongoose.models.Schema.type.ObjectId,
    ref: 'user',
    required: [true, 'El campo userId es requerido']
  },
  message: {
    type: String,
    required: [true, 'El campo message es requerido']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('message', MessageSchema)
