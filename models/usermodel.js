const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema ({
    name: String,
    series: String,
    number: Number,
    aOrb: String,
    fanFave: Boolean,
    yearReleased: Number,
    value: Number,
    img: String,
    user: String,
    condition: String, 
    forSale: Boolean
})

const User = mongoose.model('User', userSchema)
module.exports = User