const router = require('express').Router()
const homeController = require('./controller/homePageController')


router.get('/', homeController.getHomePage)


module.exports = router