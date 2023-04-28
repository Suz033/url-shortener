// modules
const express = require('express')
const router = express.Router()

// files


// routes
router.get('/', (req, res) => {
  res.sendStatus(200)
})

// exports
module.exports = router