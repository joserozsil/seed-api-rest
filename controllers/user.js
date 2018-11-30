'use strict'

const Contact = require('../models/contact')
const User = require('../models/user')
const _ = require('underscore')
const chalk = require('chalk')

const operations = {
  async findContacts(req, res, next) {
    try {

      const contacts = await Contact.find({
        userFrom: req.params.id,
        deletedAt: null
      })

      return res.status(200).json({
        contacts
      })

    } catch(error) {
      next(error);
    }
  },
  async store (req, res, next) {
    try {
      const user = new User(req.body)
      const newUser = await user.save()

      return res.status(201).json(
        newUser
      )

    } catch(error) {
      next(error);
    }
  }
}

module.exports = operations