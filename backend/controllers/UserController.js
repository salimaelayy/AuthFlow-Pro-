const userModel = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
  try {
    const { username, password, email, role } = req.body
    if (!username || !password || !email || !role) {
      return res
        .status(400)
        .json({ message: 'Please provide valid information' })
    }

    // Hash the password
    const hashPass = await bcrypt.hash(password, 10)

    // Check if the user already exists
    const existingUser = await userModel.findOne({ username })
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' })
    }

    // Create a new user
    const newUser = await userModel.create({
      username: username,
      email: email,
      password: hashPass,
      role: 'User',
    })

    return res
      .status(201)
      .json({ data: newUser, message: 'New user created successfully' })
  } catch (error) {
    console.error('Error while registering user:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const readall = async (req, res, next) => {
  try {
    const users = await userModel.find()
    return res.json({
      data: users,
    })
  } catch (error) {
    return res.json({
      error: error.message,
    })
  }
}
const readbyid = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }

    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}

const updatebyid = async (req, res, next) => {
  const userId = req.params._id

  try {
    if (!req.body) {
      // If req.body is undefined or falsy, handle the error
      return res.status(400).json({ message: 'Request body is missing' })
    }

    const { userName, permission } = req.body

    const user = await userModel.findById(userId)

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }

    // Update user information based on the request body
    user.username = userName !== undefined ? userName : user.username
    user.permissions = permission !== undefined ? permission : user.permissions

    // Save the updated user
    const updatedUser = await user.save()

    return res
      .status(200)
      .json({ message: 'User updated successfully', user: updatedUser })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message })
  }
}

const deletebyid = async (req, res, next) => {
  try {
    const userId = req.params._id

    // Verify that the server got the ID
    console.log('Received request with ID:', userId)
    const deletedUser = await roleModel.findByIdAndDelete(userId)

    // Check if the user was not found
    if (!deletedUser) {
      return res.status(404).json({ error: 'user not found' })
    }

    return res.json({
      message: 'user is deleted successfully',
      data: deletedUser,
    })
  } catch (error) {
    // Handle any unexpected errors
    console.error(error)
    return res.status(500).json({ error: 'An error occurred' })
  }
}
const assignRole = async (req, res, next) => {
  const { userId, roleId } = req.body;

    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user already has the role assigned
        if (user.role.includes(roleId)) {
            return res.status(400).json({ message: 'Role already assigned to user' });
        }

        user.role.push(roleId);
        await user.save();

        return res.status(200).json({ message: 'Role assigned successfully', user });
    } catch (error) {
        console.error('Error assigning role:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
const removeRole = async (req, res) => {
  const { userId, roleId } = req.body;

    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user has the role assigned
        if (!user.role.includes(roleId)) {
            return res.status(400).json({ message: 'Role not assigned to user' });
        }

        // Remove the role from the user's roles array
        user.role = user.role.filter(role => role !== roleId);
        await user.save();

        return res.status(200).json({ message: 'Role removed successfully', user });
    } catch (error) {
        console.error('Error removing role:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
  register,
  readall,
  readbyid,
  updatebyid,
  deletebyid,
  assignRole,
  removeRole,
}
