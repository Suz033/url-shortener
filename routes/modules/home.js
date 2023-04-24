// modules
const express = require('express')
const router = express.Router()

// files
const UrlModel = require('../../models/url')
const generateUrl = require('../../models/generate_url')

// routes
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const originalUrl = req.body.url
  const shortenedUrl = await generateUrl()

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

// exports
module.exports = router