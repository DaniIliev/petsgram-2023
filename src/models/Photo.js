const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    }, 
    commentars: {
        type: Array
    },
    owner: {
        type: Object,
        ref: 'User'
    }
})

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo