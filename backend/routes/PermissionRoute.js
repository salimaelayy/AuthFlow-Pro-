const express = require('express');
const router = express.Router();
const PermissionController = require('../controllers/PermissionController');
const { validateToken }= require('../middlewares/ValidateToken');
const { verifyPermission } = require('../middlewares/RoleValidation');

/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: Permission management endpoints
 */


/**
 * @swagger
 * /permissions:
 *   get:
 *     summary: Retrieve all permissions
 *     description: Retrieve a list of all permissions
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of permissions
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '500':
 *         description: Internal server error
 */
router.get('/', verifyPermission(['READALL_PERMISSIONS']), validateToken, PermissionController.readall);

/**
 * @swagger
 * /permissions/create:
 *   post:
 *     summary: Create a new permission
 *     description: Create a new permission
 *     tags: [Permissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Add properties for permission creation here
 *     responses:
 *       '201':
 *         description: Permission created successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '500':
 *         description: Internal server error
 */
router.post('/create', verifyPermission(['CREATE_PERMISSION']), validateToken, PermissionController.create);

/**
 * @swagger
 * /permissions/{id}:
 *   get:
 *     summary: Retrieve a permission by ID
 *     description: Retrieve a permission's details by ID
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Permission ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A permission object
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Permission not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', verifyPermission(['READBYID_PERMISSION']), validateToken, PermissionController.readbyid);

/**
 * @swagger
 * /permissions/update/{id}:
 *   put:
 *     summary: Update a permission by ID
 *     description: Update a permission's details by ID
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Permission ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Add properties for permission update here
 *     responses:
 *       '200':
 *         description: Permission updated successfully
 *       '400':
 *         description: Invalid request body
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Permission not found
 *       '500':
 *         description: Internal server error
 */
router.put('/update/:id', verifyPermission(['UPDATE_PERMISSION']), validateToken, PermissionController.updatebyid);

/**
 * @swagger
 * /permissions/delete/{id}:
 *   delete:
 *     summary: Delete a permission by ID
 *     description: Delete a permission's details by ID
 *     tags: [Permissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Permission ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Permission deleted successfully
 *       '401':
 *         description: Unauthorized request
 *       '403':
 *         description: Forbidden request
 *       '404':
 *         description: Permission not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/delete/:id', verifyPermission(['DELETE_PERMISSION']), validateToken,  PermissionController.deletebyid);

module.exports = router;
