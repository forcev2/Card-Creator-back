const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    imgURL: {
        type: String,
    },
    type: {
        type: Number,
    },
    health: {
        type: Number,
    },
    attack: {
        type: Number,
    },
    abilities: {
        type: Array
    }

})

module.exports = mongoose.model('Card', cardSchema)