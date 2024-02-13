const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const {validateToken}= require('../middlewares/ValidateToken')
const {verifyPermission}=require('../middlewares/RoleValidation')

router.get('/',verifyPermission(['READBYALL_USER']),validateToken, UserController.readall)
router.get('/:id',verifyPermission(['READBYID_USER']),validateToken, UserController.readbyid)
router.get('/username',verifyPermission(['READBYUSERNAME_USER']),validateToken, UserController.readbyname)
router.post('/register',UserController.register)
router.put('/update/:id',verifyPermission(['UPDATE_USER']),validateToken,verifyPermission(['UPDATE_USER']), UserController.updatebyid)
router.delete('/delete/:id',verifyPermission(['DELETE_USER']),validateToken, UserController.deletebyid)
router.post('/assignrole',verifyPermission(['ADDROLE_USER']),validateToken, UserController.assignRole);
router.delete('/:id/roles/:roleId/remove',verifyPermission(['DELETEROLE_USER']),validateToken, UserController.removeRole);
module.exports = router
