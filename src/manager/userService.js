const User = require('../models/User')
const secretCode = require('../config/SECRET')
const jwt = require('jsonwebtoken')

exports.register = async (username, email, password, repeatPassword) => {
    if (password != repeatPassword) {
        throw ('Password do not match!')
    }
    const user = User.create({ username, email, password })
    return user
}

exports.getUsernameByUsername = (username) => User.findOne({ username })

exports.login = async (username,password) => {

    const user = await this.getUsernameByUsername(username)

    const isValid = user.validatePassword(password)

    if(!user || !isValid){
        throw 'Invalid username or password!'
    }

    const payload = {_id: user._id, username: user.username}
    const token = await jwt.sign(payload, secretCode, {expiresIn: '2h'})

    return token
}