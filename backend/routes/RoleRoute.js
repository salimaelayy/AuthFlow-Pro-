const express = require('express')
const router = express.Router()
const RoleController = require('../controllers/RoleController')

router.get('/', RoleController.readall)
router.get('/:id', RoleController.readbyid)
router.post('/create', RoleController.create)
router.put('/update/:id', RoleController.updatebyid)
router.delete('/delete/:id', RoleController.deletebyid)

module.exports = router
