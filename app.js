//// modules ////
// express
const express = require('express')
const app = express()

// express-handlebars
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

// db
const routes = require('./routes')
require('./config/mongoose')

// files
app.use(express.static('public'))


//// routes ////
// index
app.use(routes)

// listeners
const PORT = process.env.PORT || 3000
const HOST_URL = process.env.HOST_URL || `http://localhost:${PORT}`
app.listen(PORT, () => console.log(HOST_URL))