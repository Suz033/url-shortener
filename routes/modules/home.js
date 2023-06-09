//// modules ////
const express = require('express')
const router = express.Router()


//// files ////
const UrlModel = require('../../models/url')
const generateUrl = require('../../models/generate_url')
require('dotenv').config()


//// routes ////
// index page
router.get('/', (req, res) => {
  res.render('index')
})

// shorten url
const PORT = process.env.PORT || 3000
const HOST_URL = process.env.HOST_URL || `http://localhost:${PORT}`

router.post('/', async (req, res) => {
  const originalUrl = req.body.url
  const shortenedUrl = await generateUrl(HOST_URL)

  UrlModel.findOne({ original: originalUrl })
    .then(url => {
      if (!url) {
        return UrlModel.create({
          original: originalUrl,
          short: shortenedUrl
        })
      } else {
        return url
      }
    })
    .then(url => {
      res.render('index', { shortUrl: url.short, originalUrl: url.original })
    })
    .catch(err => console.error(err))
})

// redirect to original url
router.get('/:short', (req, res) => {
  const shortenedUrl = HOST_URL + req.params.short
  UrlModel.findOne({ short: shortenedUrl })
    .then(url => {
      if (!url) {
        res.render('index', { errorUrl: shortenedUrl })
      } else {
        res.redirect(url.original)
      }
    })
    .catch(err => console.error(err))
})


//// exports ////
module.exports = router