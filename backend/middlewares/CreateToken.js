const {sign} = require('jsonwebtoken')
require('dotenv').config();


const CreateToken=(user)=>
{
    const accessToken=sign({username:user.username,id:user._id},process.env.SECRETTOKEN,{expiresIn:"1h"})
    return accessToken
}

module.exports={CreateToken}

