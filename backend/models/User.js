const mongoose = require('mongoose')
const Schema = mongoose.Schema

const defaultRoleId="65c7a4c6bde45224870c7884"

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: 'Role' ,default:defaultRoleId},
})

module.exports = mongoose.model('User', userSchema)
