const permissionModel = require('../models/Permission')
const bcrypt = require('bcrypt')

const readall = async (req, res, next) => {
  console.log('all')
  return res.json('all permissions')
}
const create = async (req, res, next) => {
  console.log('all')
  return res.json('all permissions')
}
const readbyid = async (req, res, next) => {
  console.log('by id')
  return res.json('one permission')
}

const updatebyid = async (req, res, next) => {
  console.log('updated')
  return res.json('update one permission')
}
const deletebyid = async (req, res) => {
  console.log('deleted')
  return res.json('delete permission')
}

module.exports = { readall, readbyid, create, updatebyid, deletebyid }
