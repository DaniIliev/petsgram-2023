const authService = require('../manager/userService')

exports.getRegisterPage = (req, res) => {
    res.render('register')
}

exports.postRegister = (req, res) => {
    const { username, email, password, repeatPassword} = req.body
    
    authService.register(username, email, password, repeatPassword)
    res.redirect('/')
}


exports.getLoginPage = (req, res) => {
    res.render('login')
}

exports.getCatalogPage = (req, res) => {
    res.render('catalog')
}

exports.getDetailsPage = (req, res) => {
    res.render('details')
}

exports.getCreatePage = (req, res) => {
    res.render('create')
}