const express = require('express')
const router = express.Router()
const AuthController= require('../controllers/AuthController')
const { validateToken }= require('../middlewares/ValidateToken')
const {verifyPermission}=require('../middlewares/RoleValidation')

router.post('/login',AuthController.login)
router.post('/logout',validateToken, AuthController.logout)
router.get('/profile',AuthController.profile)
module.exports = router
