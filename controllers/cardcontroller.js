const express = require('express')
const router = express.Router()

const Cards = require('../models/cardmodel')
const Artists = require('../models/artistmodel')


router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/top15', (req, res, next) => {
    Cards.find({ yearReleased: 1985 })
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)

})

router.get('/foodfight', (req, res, next) => {
    Cards.find({ yearReleased: 2021 })
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)
})

router.get('/35thanniversary', (req, res, next) => {
    Cards.find({ yearReleased: 2020 })
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)
})
router.get('/gallery', (req, res, next) => {
    Artists.find({})
    .then(artists => res.render('fanart', { artists }))
    .catch(next)
})
router.post('/35thanniversary', (req, res, next) => {
    Cards.create(req.body)
    .then(card => res.redirect('35thanniversary'))
    .catch(next)
})
router.post('/foodfight', (req, res, next) => {
    Cards.create(req.body)
    .then(card => res.redirect('foodfight'))
    .catch(next)
})
router.get('/35thanniversary/add', (req, res) => {
    res.render('add35anni')
})


router.get('/foodfight/add', (req, res) => {
    res.render('addfoodfight')
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Cards.findOneAndDelete({_id: id })
    .then(cards => res.redirect('foodfight'))
})
module.exports = router