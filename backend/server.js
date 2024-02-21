<<<<<<< HEAD
const express = require('express');
const cookieParser = require('cookie-parser');
const AuthRouter = require('./routes/AuthRoute');
const UserRouter = require('./routes/UserRoute');
const RoleRouter = require('./routes/RoleRoute');
const PermissionRouter = require('./routes/PermissionRoute');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc=require('../swaggerConfig')

=======
const express = require('express')
const cookieParser= require('cookie-parser')
const AuthRouter = require('./routes/AuthRoute')
const UserRouter = require('./routes/UserRoute')
const RoleRouter = require('./routes/RoleRoute')
const PermissionRouter = require('./routes/PermissionRoute');
const {options} =require('./swagger')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
const cors=require('cors')
const app = express()


app.use(express.json())
require('dotenv').config()
require('./connection')
app.use(cookieParser()) 
app.use(cors({credentials :true,origin :'http://localhost:5173'}));
>>>>>>> 3aa65a3af00df3528b78898f6c63df736d2c3969


const app = express();
app.use(express.json());
require('dotenv').config();
require('./connection'); 
app.use(cookieParser());

app.use(cors("*"));

//swagger
app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerJSDoc))
//swagger

// Routes
app.use('/auth', AuthRouter);
app.use('/user', UserRouter);
app.use('/role', RoleRouter);
app.use('/permission', PermissionRouter);


const specs = swaggerJsdoc(options);
console.log(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(process.env.PORT, () => {
  console.log('listening on port:' + process.env.PORT)
})
