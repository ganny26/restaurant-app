const express = require ('express')
const appController = require('../controllers/appcontroller')
const router = express.Router()

router.get('/ok', appController.check)
router.get('/me', appController.getMe)
router.get('/search',appController.search)


module.exports = router
