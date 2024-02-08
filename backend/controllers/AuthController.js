const userModel=require('../models/User')
const bcrypt = require('bcrypt');



/*const register= async(req,res,next)=> 
{
    
}
const login = async (req, res, next) => { 
    
}

  */
const profile= async(req,res,next)=>
{
    console.log('you are in the profile')
    return res.json('profile')

}
/*const logout= async(req,res)=>
{
    
}*/



module.exports={profile} 