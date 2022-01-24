require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const ejsLayouts = require('express-ejs-layouts')



app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'))
app.get('/', (req, res) => {
    res.render('index.ejs')
})


const cardController = require('./controllers/cardcontroller')
app.use('/gpk', cardController)

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
    console.log(`in good shape on PORT: ${app.get('port')}`)

})