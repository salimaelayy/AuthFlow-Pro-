const express= require('express')
const UserRoute= require('./routes/UserRoute')
const app=express()

require('dotenv').config()
require('./connection')

// app.use('/', Route)
app.use('/users', UserRoute);
app.use(express.json())

app.listen(process.env.PORT,()=>
{
    console.log("listening on port:"+process.env.PORT);
})