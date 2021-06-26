const express = require('express')
const router = express.Router()

const Cards = require('../models/cardmodel')
const Artists = require('../models/artistmodel')


router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/top15', (req, res, next) => {
    Cards.find({ yearReleased: 1985 })
    .then(cards => res.render('../partials/cardlayout', { cards }))
    .catch(next)

})

router.get('/foodfight', (req, res, next) => {
    Cards.find({ yearReleased: 2021 })
    .then(cards => res.render('../partials/cardlayout', { cards }))
    .catch(next)
})

router.get('/35thanniversary', (req, res, next) => {
    Cards.find({ yearReleased: 2020 })
    .then(cards => res.render('../partials/cardlayout', { cards }))
    .catch(next)
})

router.get('/gallery', (req, res, next) => {
    Artists.find({})
    .then(cards => res.render('../partials/cardlayout', { cards }))
    .catch(next)
})
router.get('/foodfight/add', (req, res) => {
    res.render('addcard')
})
router.post('/foodfight', (req, res, next) => {
    Cards.create(req.body)
    console.log(req.body)
    .then(card => res.json(card))
    .then(res.redirect('/foodfight'))
    .catch(next)
})
module.exports = router