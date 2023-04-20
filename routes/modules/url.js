// modules
const express = require('express')
const router = express.Router()

// files


// routes
router.get('/', (req, res) => {
  res.render('url')
})

// exports
module.exports = router