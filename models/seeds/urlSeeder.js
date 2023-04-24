// files
const db = require('../../config/mongoose')
const UrlModel = require('../url')
const urlData = require('./url.json').results

// models
db.once('open', () => {
  UrlModel.create(urlData)
    .then(() => {
        console.log('Seed script complete')
        db.close()
      })
    .catch(err => console.error(err))
})