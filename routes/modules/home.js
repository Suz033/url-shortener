// modules
const express = require('express')
const router = express.Router()

// files


// routes
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  res.render('index')
})

// exports
module.exports = router