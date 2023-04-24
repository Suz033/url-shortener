// modules
const mongoose = require('mongoose')
// require('mongoose-type-url')
const Schema = mongoose.Schema

// create schema
const UrlSchema = new Schema({
  original: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true
  }
})

// export model
const UrlModel = mongoose.model('Url', UrlSchema)
module.exports = UrlModel