// modules
const express = require('express')
const router = express.Router()

// files
const home = require('./modules/home')
const url = require('./modules/url')
const healthCheck = require('./modules/health_check')

// routes
router.use('/health-check', healthCheck)
router.use('/', home)
router.use('/url', url)

// exports
module.exports = router