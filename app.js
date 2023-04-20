//// modules ////
// express
const express = require('express')
const app = express()

// express-handlebars
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout:'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// db
const routes = require('./routes')
require('./config/mongoose')


//// routes ////
// index
app.use('/', routes)

// listeners
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))