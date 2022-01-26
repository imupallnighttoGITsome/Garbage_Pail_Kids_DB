const express = require('express')
const app = express()
const methodOverride = require('method-override')
const ejsLayouts = require('express-ejs-layouts')
const cardController = require('./controllers/cardcontroller')



app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))
// app.get('/', (req, res) => {
//     res.redirect('/gpkcards')
// })


app.use('/gpkcards', cardController)

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
    console.log(`in good shape on PORT: ${app.get('port')}`)

})