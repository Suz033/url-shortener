// modules
const express = require('express')
const router = express.Router()

// files


// routes
router.post('/', (req, res) => {
  res.render('copy')
})

// exports
module.exports = router