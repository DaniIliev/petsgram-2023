const router = require('express').Router()

const homeController = require('./controller/homePageController')
const pageController = require('./controller/pageController')
const photoCotroller = require('./controller/photoController')

router.get('/', homeController.getHomePage)
router.get('/register', pageController.getRegisterPage)
router.get('/login', pageController.getLoginPage)
router.post('/login', pageController.postLogin)
router.post('/register', pageController.postRegister)
router.get('/catalog', pageController.getCatalogPage)
router.get('/details/:id', pageController.getDetailsPage)
router.post('/details/:id', photoCotroller.getComment)
router.get('/photo-add', pageController.getCreatePage)
router.post('/photo-add', photoCotroller.create)
router.get('/logout', pageController.getLogout)
router.get('/my-profile', pageController.getProfile)
router.get('/edit/:id', photoCotroller.getEditPage)
router.post('/edit/:id', photoCotroller.editPhoto)
router.get('/delete/:id', pageController.getDeletePhoto)

module.exports = router