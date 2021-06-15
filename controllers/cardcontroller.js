const express = require('express')
const router = express.Router()

const Cards = require('../models/cardmodel')

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/top15', (req, res, next) => {
    Cards.find({})
    .then((cards) => res.render('topcards', { cards }))
    .catch(next)
})

module.exports = router