const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const {validateToken}= require('../middlewares/ValidateToken')

router.get('/',validateToken, UserController.readall)
router.get('/:id',validateToken, UserController.readbyid)
router.get('/username',validateToken, UserController.readbyname)
router.post('/register', UserController.register)
router.put('/update/:id',validateToken, UserController.updatebyid)
router.delete('/delete/:id',validateToken, UserController.deletebyid)
router.post('/assignrole',validateToken, UserController.assignRole);
router.delete('/:id/roles/:roleId/remove',validateToken, UserController.removeRole);
module.exports = router
