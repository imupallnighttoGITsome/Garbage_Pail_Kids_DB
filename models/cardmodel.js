const mongoose = require('../db/connection')


const cardSchema = new mongoose.Schema({
    name: String,
    series: String,
    number: Number,
    aOrB: String,
    fanFavorite: Boolean,
    yearRealeased: Number,
    value: Number,
    img: String,
})

const Cards = mongoose.model('Cards', cardSchema)
module.exports = Cards