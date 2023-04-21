// files
const UrlModel = require('../url')
const db = require('../../config/mongoose')

// models
db.once('open', () => {
  UrlModel.create({ 'url.original': 'https://www.google.com.tw/', 'url.short': 'http://localhost:3000/DpB6S' })
  console.log('Seed script complete')
})