const roleModel = require('../models/Role')
const bcrypt = require('bcrypt')

const readall = async (req, res, next) => {
  try {
    const role = await roleModel.find()

    // console.log(!role) ;

    if (!role) {
      res.status(404).send({ message: 'Not Found' })
    }
    res.status(200).json(role)
  } catch (error) {
    console.error(error)

    res.status(500).send('Server Error')
  }
}

const readbyid = async (req, res, next) => {
  try {
    const role = await roleModel.findById(req.params.id)

    if (!role) {
      return res.status(404).json({ message: 'role not found' })
    }

    res.status(200).json(role)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}
const create = async (req, res, next) => {
  const { roleName, permission } = req.body //destr

  try {
    const newRole = await role.create({
      roleName,
      permission,
    })
    res.status(201).json({ role: newRole })
    console.log('Request Body:', req.body)
  } catch (error) {
    console.error(error)
    console.error('Error adding new Role:', error)

    res.status(500).send('Internal Server Error')
  }
}
const updatebyid = async (req, res, next) => {
  const roleId = req.params._id

  try {
    if (!req.body) {
      // If req.body is undefined or falsy, handle the error
      return res.status(400).json({ message: 'Request body is missing' })
    }

    const { roleName, permission } = req.body

    const role = await roleModel.findById(roleId)

    if (!role) {
      return res.status(404).json({ message: 'Role not found' })
    }

    // Update role information based on the request body
    role.nameRole = roleName !== undefined ? roleName : role.nameRole
    role.permissions = permission !== undefined ? permission : role.permissions

    // Save the updated role
    const updatedRole = await role.save()

    return res
      .status(200)
      .json({ message: 'Role updated successfully', role: updatedRole })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message })
  }
}
const deletebyid = async (req, res) => {
  try {
    const roleId = req.params._id

    // Verify that the server got the ID
    console.log('Received request with ID:', roleId)
    const deletedRole = await roleModel.findByIdAndDelete(roleId)

    // Check if the role was not found
    if (!deletedRole) {
      return res.status(404).json({ error: 'Role not found' })
    }

    return res.json({
      message: 'role is deleted successfully',
      data: deletedRole,
    })
  } catch (error) {
    // Handle any unexpected errors
    console.error(error)
    return res.status(500).json({ error: 'An error occurred' })
  }
}



module.exports = {
  readall,
  readbyid,
  create,
  updatebyid,
  deletebyid,
}
