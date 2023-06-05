const router = require('express').Router()

const homeController = require('./controller/homePageController')
const pageController = require('./controller/pageController')

router.get('/', homeController.getHomePage)
router.get('/register', pageController.getRegisterPage)
router.get('/login', pageController.getLoginPage)
router.get('/catalog', pageController.getCatalogPage)
router.get('/details/:id', pageController.getDetailsPage)
router.get('/create', pageController.getCreatePage)



module.exports = router