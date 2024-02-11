const express = require('express')
const router = express.Router()
const PermissionController = require('../controllers/PermissionController')
const {validateToken}= require('../middlewares/ValidateToken')

router.get('/',validateToken, PermissionController.readall)
router.post('/create',validateToken, PermissionController.create)
router.get('/:id',validateToken, PermissionController.readbyid)
router.put('/update/:id',validateToken, PermissionController.updatebyid)
router.delete('/delete/:id',validateToken,  PermissionController.deletebyid)

module.exports = router
