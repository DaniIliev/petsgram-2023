const mongoose = require('mongoose')

async function mongooseConnect(){
    mongoose.set('strictQuery', false)
    await mongoose.connect('mongodb://127.0.0.1:27017/petsgram')
    console.log('DB connected!')
}

module.exports = mongooseConnect