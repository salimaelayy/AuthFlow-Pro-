const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');
const { validateToken }= require('../middlewares/ValidateToken');
const { verifyPermission }= require('../middlewares/RoleValidation');

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Role management endpoints
 */

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Retrieve all roles
 *     description: Retrieve a list of all roles
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of roles
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '500':
 *         description: Internal server error
 */
router.get('/', verifyPermission(['READALL_ROLE']), validateToken, RoleController.readall);

/**
 * @swagger
 * /roles:
 *   post:
 *     summary: Create a new role
 *     description: Create a new role
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Add properties for role creation here
 *     responses:
 *       '201':
 *         description: Role created successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '500':
 *         description: Internal server error
 */
router.post('/', verifyPermission(['CREATE_ROLE']), validateToken, RoleController.create);

/**
 * @swagger
 * /roles/addpermissions/{roleId}:
 *   post:
 *     summary: Add permissions to role
 *     description: Add permissions to a role by role ID
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Add properties for permissions addition here
 *     responses:
 *       '200':
 *         description: Permissions added successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Internal server error
 */
router.post('/addpermissions/:roleId', verifyPermission(['ADD_PERMISSIONS']), validateToken, RoleController.addpermissionstorole);

/**
 * @swagger
 * /roles/{id}:
 *   put:
 *     summary: Update a role by ID
 *     description: Update a role's details by ID
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Add properties for role update here
 *     responses:
 *       '200':
 *         description: Role updated successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', verifyPermission(['UPDATE_ROLE']), validateToken, RoleController.updatebyid);

/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     summary: Delete a role by ID
 *     description: Delete a role's details by ID
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Role deleted successfully
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', verifyPermission(['DELETE_ROLE']), validateToken, RoleController.deletebyid);

/**
 * @swagger
 * /roles/deletepermissions/{roleId}:
 *   delete:
 *     summary: Remove permissions from role
 *     description: Remove permissions from a role by role ID
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Permissions removed successfully
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/deletepermissions/:roleId', verifyPermission(['REMOVE_PERMISSIONS']), validateToken, RoleController.deletepermissionsfromrole);

module.exports = router;

