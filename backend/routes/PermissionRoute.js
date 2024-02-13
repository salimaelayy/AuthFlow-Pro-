const express = require('express')
const router = express.Router()
const PermissionController = require('../controllers/PermissionController')
const {validateToken}= require('../middlewares/ValidateToken')
const { verifyPermission } = require('../middlewares/RoleValidation')

router.get('/',verifyPermission(['READALL_PERMISSIONS']),validateToken, PermissionController.readall)
router.post('/create',verifyPermission(['CREATE_PERMISSION']),validateToken, PermissionController.create)
router.get('/:id',verifyPermission(['READBYID_PERMISSION']),validateToken, PermissionController.readbyid)
router.put('/update/:id',verifyPermission(['UPDATE_PERMISSION']),validateToken, PermissionController.updatebyid)
router.delete('/delete/:id',verifyPermission(['DELETE_PERMISSION']),validateToken,  PermissionController.deletebyid)

module.exports = router
