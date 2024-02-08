const express = require('express');
const router = express.Router();
const PermissionController= require('../controllers/PermissionController')


router.get('/', PermissionController.readall);
router.get('/:id', PermissionController.readbyid);
router.post('/create', PermissionController.create);
router.put('/update/:id', PermissionController.updatebyid); 
router.delete('/delete/:id', PermissionController.deletebyid);

module.exports = router; 