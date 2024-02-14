const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const { validateToken } = require('../middlewares/ValidateToken');
const { verifyPermission } = require('../middlewares/RoleValidation');

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login user
 *     description: Logs in a user with the provided credentials
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
 *     responses:
 *       200:
 *         description: Logged in successfully
 *       400:
 *         description: Invalid information
 *       404:
 *         description: User does not exist
 *       401:
 *         description: Username or password is incorrect
 *       500:
 *         description: Error during login
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: Logout user
 *     description: Logs out the currently logged-in user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       401:
 *         description: Unauthorized
 */
router.post('/logout', validateToken, AuthController.logout);

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieves the profile of the currently logged-in user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (insufficient permissions)
 */
router.get('/profile', validateToken, verifyPermission, AuthController.profile);

module.exports = router;
