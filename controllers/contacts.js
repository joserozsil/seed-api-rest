'use strict'

const Contact = require('../models/contact')

const operations = {
  async findAll(req, res, next) {
    try {

      const contacts = await Contact.find({
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

      // validar que no sea un usuario repetido
      const userValidateRepeat = await Contact.findOne({
        deletedAt: null,
        $and: [
          {
            $or: [
              { userTo: req.body.userTo},
              { userTo : req.body.userFrom}
            ]
          },
          {
            $or: [
              { userFrom: req.body.userTo},
              { userFrom : req.body.userFrom}
            ]
          }
        ]
      })

      console.log(userValidateRepeat)

      if (userValidateRepeat) {
        return res.status(400).json({ message: 'Ya existe el usuario agregado' })
      }

      const contact = new Contact(req.body)

      const newContact = await contact.save()
      
      return res.status(201).json(newContact)

    } catch(error) {
      next(error);
    }
  },
  async delete (req, res, next) {
    try {

      const updated = await Contact.findByIdAndUpdate(req.params.id, { deletedAt: Date.now() }, { new : true })
      
      return res.status(200).json(updated)

    } catch(error) {
      next(error);
    }
  }
}

module.exports = operations