const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({
  nameRole: { type: String, required: true },
  permissions: [{ type: Schema.Types.ObjectId, ref: 'Permission' }]
})

module.exports = mongoose.model('Role', roleSchema)
