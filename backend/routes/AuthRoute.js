const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { validateToken } = require('../middlewares/ValidateToken');
const { verifyPermission } = require('../middlewares/RoleValidation');

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication endpoints
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticate user and generate access token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '400':
 *         description: Invalid request data
 *       '401':
 *         description: Unauthorized request
 *       '500':
 *         description: Internal server error
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: User logout
 *     description: Invalidate access token and log user out
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *       '401':
 *         description: Unauthorized request
 *       '500':
 *         description: Internal server error
 */
router.post('/logout', validateToken, AuthController.logout);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve user profile information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *       '401':
 *         description: Unauthorized request
 *       '500':
 *         description: Internal server error
 */
router.get('/profile', validateToken, verifyPermission, AuthController.profile);

module.exports = router;
