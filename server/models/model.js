const mongoose = require('mongoose')

const event = mongoose.Schema({
    name:String,
    description:String,
    imageUrl:{
        data:Buffer,
        contentType:String
    },
    timestamp:String,
    keywords:Array,

})

module.exports = mongoose.model('Event',event)