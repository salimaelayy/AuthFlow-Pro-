const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware for verifying permissions
const verifyPermission = (requiredPermissions) => {
    
    return async (req, res, next) => {
        // Retrieve the access token from the request cookies
        const accessToken = req.cookies['access-token'];

        // Check if the access token is provided
        if (!accessToken) {
            return res.status(401).json({ message: 'Access token not provided' });
        }

        try {
            // Verify the access token and extract the user ID
            const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
            const userId = decodedToken.userId;

            // Find the user in the database by user ID and populate the role with permissions
            const user = await User.findById(userId).populate({
                path: 'role',
                populate: { path: 'permissions' }
            });

            // Check if the user exists
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Extract the permission names from the user's role
            const userPermissions = user.role.permissions.map(permission => permission.permissionName);

            // Check if the user has at least one of the required permissions
            const hasPermission = userPermissions.some(permission => requiredPermissions.includes(permission));

            // If the user has the required permission, proceed to the next middleware
            if (hasPermission) {
                req.user = user; // Attach user object to the request for further processing
                next();
            } else {
                // If the user does not have the required permission, return a 403 Forbidden error
                return res.status(403).json({ error: 'Access forbidden' });
            }
        } catch (error) {
            // If there's an error during token verification or user retrieval, return a 401 Unauthorized error
            console.error('Error verifying token:', error);
            return res.status(401).json({ error: 'Invalid token' });
        }
    };
};

module.exports = { verifyPermission };

