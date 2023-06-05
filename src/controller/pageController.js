

exports.getRegisterPage = (req, res) => {
res.render('register')
}



exports.getLoginPage = (req,res) => {
    res.render('login')
}

exports.getCatalogPage = (req,res) =>{
    res.render('catalog')
}

exports.getDetailsPage = (req,res) => {
    res.render('details')
}

exports.getCreatePage = (req,res) => {
    res.render('create')
}