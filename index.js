const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override')
const ejsLayouts = require('express-ejs-layouts')
const cardController = require('./controllers/cardcontroller')

//configs
app.use(cors())
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//set up static files
app.use(express.static(__dirname + '/public'))
// app.get('/', (req, res) => {
//     res.render('index')
// })

//controllers
app.use('/gpk', cardController)

//port
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log(`in good shape on PORT: ${app.get('port')}`)

})