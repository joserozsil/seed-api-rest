'use strict'
 
const express = require('express');
const api = express.Router();

const userController = require('../controllers/user');
const contactController = require('../controllers/contacts');

const { handleError, notFound } = require('../middlewares/response');

api.post('/users', userController.store)
api.get('/users/:id/contacts', userController.findContacts)

api.post('/contacts', contactController.store)
api.delete('/contacts/:id', contactController.delete)

api.use(handleError);
api.use(notFound);

module.exports = api