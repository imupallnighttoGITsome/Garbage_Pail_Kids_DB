const express = require('express')
const router = express.Router()
//const seedData = require('../db/cardseeds.json')

const Card = require('../models/cardmodel')

router.get('/', (req, res, next) => {
    res.send('index route working')
})

module.exports = router