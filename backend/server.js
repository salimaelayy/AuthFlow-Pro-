const express = require('express')
const cookieParser= require('cookie-parser')
const AuthRouter = require('./routes/AuthRoute')
const UserRouter = require('./routes/UserRoute')
const RoleRouter = require('./routes/RoleRoute')
const PermissionRouter = require('./routes/PermissionRoute')

const app = express()
app.use(express.json())
require('dotenv').config()
require('./connection')
app.use(cookieParser()) 


app.use('/auth', AuthRouter)
app.use('/user', UserRouter)
app.use('/role', RoleRouter)
app.use('/permission', PermissionRouter)


app.listen(process.env.PORT, () => {
  console.log('listening on port:' + process.env.PORT)
})
