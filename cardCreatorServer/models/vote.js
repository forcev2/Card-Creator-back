const mongoose = require('mongoose')

const voteSchema = new mongoose.Schema({
    cardid: {
        type: String,
    },
    userid: {
        type: String,
    },
})

module.exports = mongoose.model('Vote', voteSchema)