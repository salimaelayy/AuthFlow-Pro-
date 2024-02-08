const userModel = require('../models/User')
const bcrypt = require('bcrypt');



const login = async (req, res, next) =>
{ 
    //catch user input
    const {username,password}=req.body
    try{
    //verify if input is empty
    if(!username)
    {
      return res.status(400).json({ message: ' invalid information' });
    }
    const LogedInUser=userModel.findOne({username})
    // verify if the user already exists
    if(!LogedInUser)
    {
      console.log("user already exists");
      return res.status(409).json("user already exists")
    }
    
    const dbPassword=LogedInUser.password
    if(!password || !dbPassword)
    {
      return res.status(400).json("username or password is invalid")
    }
    //check if entered password and dbpassword match
    const match= bcrypt.compare(dbPassword,password)

    //verify if they don't match
    if(!match)
    return res.status(400).json("username of password is incorrect")
  
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: error.message, message: "Error during login" });
}
}

const profile= async(req,res,next)=>
{
    console.log('you are in the profile')
    return res.json('profile')

}
const logout= async(req,res)=>
{
  console.log('you are logged out')
  return res.json(' ')
}

module.exports={login,logout,profile}