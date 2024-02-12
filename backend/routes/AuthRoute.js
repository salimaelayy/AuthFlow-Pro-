const express = require('express')
const router = express.Router()
const AuthController= require('../controllers/AuthController')
const { validateToken }= require('../middlewares/ValidateToken')


router.post('/login',AuthController.login)
router.post('/logout',validateToken, AuthController.logout)
router.get('/profile',validateToken, AuthController.profile)
module.exports = router
