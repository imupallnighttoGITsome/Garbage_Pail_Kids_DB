// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const ejsLayouts = require('express-ejs-layouts')
const cardController = require('./controllers/cardcontroller')
const methodOverride = require('method-override')

//configs
app.use(cors())
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//set up static files
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.render('index')
})

//controllers
app.use('/gpkcards', cardController)

//port
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
    console.log(`in good shape on PORT: ${app.get('port')}`)

})