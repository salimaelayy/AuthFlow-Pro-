const { validate,verify } = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const accessToken = req.cookies ? req.cookies['access-token'] : null
console.log(accessToken)
  if (!accessToken) {
    return res.status(401).json({ message: 'user not authenticated' })
  }
  try {
    const validToken = verify(accessToken, process.env.SECRETTOKEN)
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