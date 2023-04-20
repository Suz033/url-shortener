// modules
const express = require('express')
const router = express.Router()

// files
const home = require('./modules/home')
const url = require('./modules/url')

// routes
router.use('/', home)
router.use('/url', url)

// exports
module.exports = router