const Card = require('../models/cardmodel')
const seedData = require('./top15seeds.json')

Card.deleteMany()
    .then(() => {
        return Card.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })