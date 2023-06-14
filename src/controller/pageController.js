const authService = require('../manager/userService')
const photoService = require('../manager/photoService')

exports.getRegisterPage = (req, res) => {
    res.render('register')
}

exports.postRegister = (req, res) => {
    const { username, email, password, repeatPassword } = req.body

    authService.register(username, email, password, repeatPassword)
    res.redirect('/login')
}


exports.getLoginPage = (req, res) => {
    res.render('login')
}

exports.getCatalogPage = async (req, res) => {
    const photos = await photoService.getAll().lean()

    res.render('catalog', {photos})
}

exports.getDetailsPage = async (req, res) => {
    const photoId = req.params.id
    const photo = await photoService.findById(photoId)

    const comments = photo.commentars
    console.log(comments);

    const isOwner = photo.owner._id == req.user._id ? true : false

    res.render('details', {photo, isOwner, comments})
}

exports.getCreatePage = (req, res) => {
    res.render('createPhoto')
}

exports.postLogin = async (req, res) => {
    const { username, password } = req.body

    try {
        const token = await authService.login(username, password)

        res.cookie('auth', token, { httpOnly: true })
        res.redirect('/catalog')

    }catch(err){
        throw(err)
    }
    
}
exports.getLogout = async(req,res) => {
    res.clearCookie('auth')
    res.redirect('/')
}

exports.getProfile = async (req,res) => {
    const user = req.user

    const myPhotos = await photoService.getAll().lean()
    myPhotos.map(x => x.owner._id == user._id)

    const hasPhotos = myPhotos.length > 0 ? true : false
    const numberOfPhotos = myPhotos.length


    res.render('profile', {myPhotos, user, hasPhotos,numberOfPhotos})
}

exports.getDeletePhoto = async (req,res) => {
    const photoId = req.params.id
    await photoService.deletePhotoById(photoId);
    res.redirect('/catalog')
}