const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password is too short!']
    },
    email: {
        type: String,
        required: true,
    }
})

authSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password,10)
})

authSchema.method('validatePassword', function(password){
    return bcrypt.compare(password, this.password);
})

const User = mongoose.model('User', authSchema);

module.exports = User
