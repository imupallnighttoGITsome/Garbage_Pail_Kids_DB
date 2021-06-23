const mongoose = require('../db/connection')

const artistSchema = new mongoose.Schema({
    cardName: String,
    price: String,
    artist: String,
    website: String,
    img: String
})

const Artist = mongoose.model('Artist', artistSchema)
module.exports = Artist