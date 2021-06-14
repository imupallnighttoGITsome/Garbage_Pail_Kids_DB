const mongoose = require('../db/connection.js')


const cardSchema = new mongoose.Schema({
    name: String,
    series: String,
    aOrB: String,
    number: Number,
    fanFavorite: Boolean,
    yearRealeased: Number,
    value: Number,
    condition: String,
    keywords: Array,
})

const Card = mongoose.model('Card', cardSchema)
module.exports = Card