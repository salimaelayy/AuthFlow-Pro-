const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { validateToken } = require('../middlewares/ValidateToken');
const { verifyPermission } = require('../middlewares/RoleValidation');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve all users
 *     description: Retrieve a list of all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of users
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Users not found
 *       '500':
 *         description: Internal server error
 */
router.get('/', verifyPermission(['READBYALL_USER']), validateToken, UserController.readall);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     description: Retrieve a user's details by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A user object
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', verifyPermission(['READBYID_USER']), validateToken, UserController.readbyid);

/**
 * @swagger
 * /users/username:
 *   get:
 *     summary: Retrieve user by username
 *     description: Retrieve a user's details by username
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: username
 *         required: true
 *         description: Username
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A user object
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get('/username', verifyPermission(['READBYUSERNAME_USER']), validateToken, UserController.readbyname);

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with username, email, and password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */
router.post('/register', UserController.register);

/**
 * @swagger
 * /users/update/{id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Update a user's details by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Add properties for update here
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.put('/update/:id', verifyPermission(['UPDATE_USER']), validateToken, UserController.updatebyid);

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a user's details by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/delete/:id', verifyPermission(['DELETE_USER']), validateToken, UserController.deletebyid);

/**
 * @swagger
 * /users/assignrole:
 *   post:
 *     summary: Assign role to a user
 *     description: Assign a role to a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               roleId:
 *                 type: string
 *             required:
 *               - userId
 *               - roleId
 *     responses:
 *       '200':
 *         description: Role assigned successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: User or role not found
 *       '500':
 *         description: Internal server error
 */
router.post('/assignrole', verifyPermission(['ADDROLE_USER']), validateToken, UserController.assignRole);
/**
 * @swagger
 * /users/{id}/roles/{roleId}/remove:
 *   delete:
 *     summary: Remove role from user
 *     description: Remove a role from a user by user ID and role ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *       - in: path
 *         name: roleId
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Role removed successfully
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: User or role not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id/roles/:roleId/remove', verifyPermission(['DELETEROLE_USER']), validateToken, UserController.removeRole);


module.exports = router;