const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.readall)
router.get('/:id', UserController.readbyid)
router.post('/register', UserController.register)
router.put('/update/:id', UserController.updatebyid)
router.delete('/delete/:id', UserController.deletebyid)
router.post('/update/:id/roles/:roleId/assign', UserController.ass);
module.exports = router
