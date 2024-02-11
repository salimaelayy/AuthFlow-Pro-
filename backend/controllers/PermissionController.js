const permissionModel = require('../models/Permission')

const readall = async (req, res, next) => {
  try {
    const Permissions = await permissionModel.find()
    return res.json({
      data: Permissions,
    })
  } catch (error) {
    return res.json({
      error: error.message,
    })
  }
}

const create = async (req, res, next) => {
  const { permissionName } = req.body

  try {
    const newPermission = await permissionModel.create({
      permissionName,
    })

    res.status(201).json({
      data: newPermission,
      message: 'New permission added successfully',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: error.message,
      message: 'An error occurred',
    })
  }
}
const readbyid = async (req, res, next) => {
  try {
    //get id
    const permissionId = req.params.id
    //verify that server got the id
    console.log('Received request with ID:', permissionId)
    const permission = await permissionModel.findById(permissionId)
    if (!permission) {
      res.status(404).json({ error: 'permission not found' })
      return
    }

    res.json({ data: permission })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}
const updatebyid = async (req, res, next) => {
  try {
    const permissionId = req.params.id
    //verify that server got the id
    console.log('Received request with ID:', permissionId)

    console.log('Update data:', req.body)
    const updatePermission = req.body

    const response = await permissionModel.findByIdAndUpdate(
      { _id: permissionId },
      { $set: updatePermission },
    )
    if (!response) {
      return res.status(404).json({ error: 'permission not found' })
    }

    res.json({ message: 'permission is updated successfully', data: response })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'An error occurred' })
  }
}
const deletebyid = async (req, res) => {
  try {
    const permissionId = req.params.id

    // Verify that the server got the ID
    console.log('Received request with ID:', permissionId)
    const response = await permissionModel.findByIdAndDelete(permissionId)

    // Check if the permission was not found
    if (!response) {
      return res.status(404).json({ error: 'permission not found' })
    }

    return res.json({
      message: 'permission is deleted successfully',
      data: response,
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
