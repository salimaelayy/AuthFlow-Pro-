const express=require('express')
const app=express()

require('dotenv').config



app.use(express.json())

app.listen(3002,()=>
{
    console.log("listening on port:"+3002);
})