const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { validateToken } = require('../middlewares/ValidateToken');
const { verifyPermission } = require('../middlewares/RoleValidation');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */
router.get('/',verifyPermission(['READALL_ROLE']),validateToken, UserController.readall)
router.get('/:id',verifyPermission(['READBYID_USER']),validateToken, UserController.readbyid)
router.get('/username',verifyPermission(['READBYUSERNAME_USER']),validateToken, UserController.readbyname)
router.post('/register',UserController.register)
router.put('/update/:id',verifyPermission(['UPDATE_USER']),validateToken,verifyPermission(['UPDATE_USER']), UserController.updatebyid)
router.delete('/delete/:id',verifyPermission(['DELETE_USER']),validateToken, UserController.deletebyid)
router.post('/assignrole',verifyPermission(['ADDROLE_USER']),validateToken, UserController.assignRole);
router.delete('/:id/roles/:roleId/remove',verifyPermission(['DELETEROLE_USER']),validateToken, UserController.removeRole);
module.exports = router
