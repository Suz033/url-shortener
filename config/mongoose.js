// modules
const mongoose = require('mongoose')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// db
const db = mongoose.connection

db.on('error', console.error.bind(console, '=== connection error ==='))
db.once('open', () => {
  console.log('=== connected to db ===')
})

// exports
module.exports = db