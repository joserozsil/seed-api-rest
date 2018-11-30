'use strict'

const User = require('../models/user');
const utils = require('../utils/password');
const jwt = require('../utils/jwt');
const _ = require('underscore');

const operations = {
  async login(req, res, next) {
    try {

      const user = await User.find({
        username: req.body.username
      });

      if (!user) {
        return res.status(400).json({
          message: 'El nombre de usuario no coincide con nuestros registros'
        });
      }

      const hasEqualsPassword = await utils.compare(req.body.password, user.password);

      if (!hasEqualsPassword) {
        return res.status(400).json({
          message: 'El nombre de usuario no coincide con nuestros registros'
        });
      }

      const data = await jwt.encoded(user);

      return res.status(200).json(data);

    } catch(error) {
      next(error);
    }
  }
}

module.exports = operations