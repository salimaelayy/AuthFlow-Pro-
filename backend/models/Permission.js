const mongoose = require('mongoose')
const Schema = mongoose.Schema

const permissionSchema = new Schema({
  permissionName: { type: Array, required: true },
})

module.exports = mongoose.model('Permission', permissionSchema)
