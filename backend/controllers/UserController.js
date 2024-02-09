const userModel = require('../models/User')
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  try {
      const { username, password, email, role } = req.body;
      if (!username || !password || !email || !role) {
          return res.status(400).json({ message: 'Please provide valid information' });
      }

      // Hash the password
      const hashPass = await bcrypt.hash(password, 10);

      // Check if the user already exists
      const existingUser = await userModel.findOne({ username });
      if (existingUser) {
          return res.status(409).json({ message: 'User already exists' });
      }

      // Create a new user
      const newUser = await userModel.create({
          username: username,
          email: email,
          password: hashPass,
          role: "User"
      });

      return res.status(201).json({ data: newUser, message: 'New user created successfully' });
  } catch (error) {
      console.error('Error while registering user:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

const readall= async (req, res, next) =>
{ 
    console.log('all')
    return res.json('all records')  
}
const readbyid= async (req, res, next) =>
{ 
    console.log('by id')
    return res.json('one record')
}

const updatebyid= async(req,res,next)=>
{
    console.log('updated')
    return res.json('update')

}

const deletebyid= async(req,res,next)=>
{
  console.log('deleted')
  return res.json('delete')
}
const assignRole= async(req,res,next)=>
{
  console.log('deleted')
  return res.json('delete')
}
const removeRole= async(req,res)=>
{
  console.log('deleted')
  return res.json('delete')
}

module.exports={register,readall,readbyid,updatebyid,deletebyid,assignRole,removeRole}