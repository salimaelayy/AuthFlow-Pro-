const { verify } = require('jsonwebtoken')
require('dotenv').config();


const validateToken = (req, res, next) => {
    console.log('Token validation middleware');
    // check if access Token exists 
    const accessToken = req.cookies ? req.cookies['access-token'] : null

    if (!accessToken) {
        return res.status(400).json({ message: 'user not authenticated' })
    }
    try {
        const validToken = verify(accessToken, process.env.SECRET_TOKEN)
        if (validToken) {
        req.authenticated = true
        return next()
        }
    } catch (err) {
        return res.status(400).json({error:err})
    }
    next(); 
}

module.exports = { validateToken }