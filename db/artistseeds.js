const Artists = require('../models/artistmodel')
const seedData4 = require('./gallery.json')

Artists.deleteMany()
    .then(() => {
        return Artists.insertMany(seedData4)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })

module.exports = Artists