const express = require('express')
const router = express.Router()
const RoleController = require('../controllers/RoleController')
const { validateToken }= require('../middlewares/ValidateToken')
const { verifyPermission }= require('../middlewares/RoleValidation')

router.get('/', verifyPermission(['READALL_ROLE']),validateToken, RoleController.readall);
router.post('/', verifyPermission(['CREATE_ROLE']),validateToken, RoleController.create);
router.post('/addpermissions/:roleId',verifyPermission(['ADD_PERMISSIONS']), validateToken, RoleController.addpermissionstorole)
router.put('/:id', verifyPermission(['UPDATE_ROLE']),validateToken, RoleController.updatebyid);
router.delete('/:id', verifyPermission(['DELETE_ROLE']),validateToken, RoleController.deletebyid);
router.delete('/deletepermissions/:roleid',verifyPermission(['REMOVE_PERMISSIONS']),validateToken, RoleController.deletepermissionsfromrole)





module.exports = router
