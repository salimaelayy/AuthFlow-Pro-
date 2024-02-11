const express = require('express')
const router = express.Router()
const RoleController = require('../controllers/RoleController')
const{ validateToken }=require('../middlewares/ValidateToken')

router.get('/',validateToken,RoleController.readall)
router.get('/:id',validateToken, RoleController.readbyid)
router.post('/create',validateToken, RoleController.create)
router.put('/update/:id',validateToken, RoleController.updatebyid)
router.delete('/delete/:id',validateToken, RoleController.deletebyid)

module.exports = router
