const express = require('express')
const app = express()
const mongoose = require('mongoose')

const cardController = require('./controllers/cardcontroller')
const ejsLayouts = require('express-ejs-layouts')
require('dotenv').config()
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/gpk', cardController)



app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
    console.log(`in good shape on PORT: ${app.get('port')}`)

})