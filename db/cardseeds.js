const Card = require('../models/cardmodel')
const Artists = require('../models/artistmodel')
const seedData = require('./top15seeds.json')
const seedData2 = require('./35anniseeds.json')
const seedData3 = require('./foodfightseeds.json')
const seedData4 = require('./gallery.json')
Card.deleteMany()
    .then(() => {
        return Card.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })
Card.deleteMany()
    .then(() => {
        return Card.insertMany(seedData2)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })
Card.deleteMany()
    .then(() => {
        return Card.insertMany(seedData3)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })
Artists.deleteMany()
    .then(() => {
        return Artists.insertMany(seedData4)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })