const roleModel = require('../models/Role')
const bcrypt = require('bcrypt');



const readall= async (req, res, next) =>
{ 
    console.log('all')
    return res.json('all roles')  
}
const create = async (req, res, next) => {
 
};
const readbyid= async (req, res, next) =>
{ 
    console.log('by id')
    return res.json('one role')
}

const updatebyid= async(req,res,next)=>
{
    console.log('updated')
    return res.json('update one role')

}
const deletebyid= async(req,res)=>
{
  console.log('deleted')
  return res.json('delete')
}

module.exports={readall,readbyid,create,updatebyid,deletebyid}