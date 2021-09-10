const mongoose = require('mongoose')

const approvedSchema = new mongoose.Schema({
    cardid: {
        type: String,
    },
})

module.exports = mongoose.model('Approved', approvedSchema)