'use strict'

const MODE = 'dev';

const SETTINGS = {
    'MONGO_URL': process.env.MONGO_URL || 'mongodb://localhost:27017/my-db',
    'SECRET': process.env.SECRET || 'MY SECRET KEY',
    "ORIGIN": process.env.ORIGIN || '*',
    'PORT': process.env.PORT || 3001,
    'LIMIT': process.env.LIMIT || 100,
    'MODE': process.env.MODEL || MODE
}

module.exports = SETTINGS