// modules
const mongoose = require('mongoose')
require('mongoose-type-url')
const Schema = mongoose.Schema

// create schema
const UrlSchema = new Schema({
  url: {
    original: {
      type: mongoose.SchemaTypes.Url,
      required: true,
      unique: true
    },
    short: {
      type: mongoose.SchemaTypes.Url,
      required: true,
      unique: true
    }
  }
})

// export model
const UrlModel = mongoose.model('Url', UrlSchema)
module.exports = UrlModel