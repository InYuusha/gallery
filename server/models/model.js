const mongoose = require('mongoose')

const event = mongoose.Schema({
    name:String,
    description:String,
    imageUrl:String

})

module.exports = mongoose.model('Event',event)