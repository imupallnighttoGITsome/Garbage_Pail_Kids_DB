const express = require('express')
const router = express.Router()

const Cards = require('../models/cardmodel')
const Artists = require('../models/artistmodel')


router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/top15', (req, res, next) => {
    Cards.find({$or: [ { series: '1st Series' }, { series: '2nd Series' }]})
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)

})

router.get('/foodfight', (req, res, next) => {
    Cards.find({ series: 'Food Fight' })
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)
})

router.get('/35thanniversary', (req, res, next) => {
    Cards.find({ series: '35th Anniversary' })
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)
})
router.get('/gallery', (req, res, next) => {
    Artists.find({})
    .then(artists => res.render('fanart', { artists }))
    .catch(next)
})
router.post('/35thanniversary/add', (req, res, next) => {
    console.log(req.body)
    Cards.create({req}, {
        name: req.body.name,
        series: '35th Anniversary',
        number: req.body.nuber,
        aOrb: true,
        value: req.body.value,
        img: req.body.img
    })
    .then(card => res.redirect('/gpk/35thanniversary'))
    .catch(next)
})
router.post('/foodfight/add', (req, res, next) => {
    Cards.create(req.body)
    .then(card => res.redirect('/gpk/foodfight'))
    .catch(next)
})
router.get('/35thanniversary/add', (req, res) => {
    res.render('add35anni')
})


router.get('/foodfight/add', (req, res) => {
    res.render('addfoodfight')
})

router.delete('/foodfight/:id', (req, res) => {
    console.log(req.body)
    let id = req.params.id
    Cards.findOneAndDelete({_id: id })
    .then(cards => res.redirect('/gpk/foodfight'))
})
router.delete('/35thanniversary/:id', (req, res) => {
    let id = req.params.id
    Cards.findOneAndDelete({_id: id })
    .then(cards => res.redirect('/gpk/35thanniversary'))
})
module.exports = router