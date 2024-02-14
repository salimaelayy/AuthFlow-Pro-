const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const {CreateToken} = require('../middlewares/CreateToken')

const login = async (req, res, next) => {
  // Catch user input
  const { username, password } = req.body;
  try {
    // Verify if input is empty
    if (!username || !password) {
      return res.status(400).json({ message: 'Invalid information' });
    }
    
    // Find the user in the database
    const userLoggedIn = await userModel.findOne({ username });

    // Verify if the user exists
    if (!userLoggedIn) {
      console.log('User does not exist');
      return res.status(404).json('User does not exist');
    }

    // Compare the provided password with the hashed password from the database
    const match = await bcrypt.compare(password, userLoggedIn.password);

    // Verify if passwords match
    if (!match) {
      return res.status(400).json('Username or password is incorrect');
    }

    // Creating the access token
    const accessToken = CreateToken(userLoggedIn);

    // Putting the token in a cookie
    res.cookie("access-token", accessToken, { maxAge: 100000, httpOnly: true });

    // Send a success response
    return res.json({  id: userLoggedIn._id });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: error.message, message: 'Error during login' });
  }
}


const profile = async (req, res, next) => {
  console.log('you are in the profile')
  return res.json('profile')
}
const logout = async (req, res) => {
  console.log('you are logged out')
  res.clearCookie('access-token').send('Logout successful');
}

module.exports = { login, logout, profile }
