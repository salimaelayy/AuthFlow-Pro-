const express = require('express');
const cookieParser = require('cookie-parser');
const AuthRouter = require('./routes/AuthRoute');
const UserRouter = require('./routes/UserRoute');
const RoleRouter = require('./routes/RoleRoute');
const PermissionRouter = require('./routes/PermissionRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc =require('swagger-jsdoc');

// const swaggerJSDoc = require('../swagger'); 
const cors = require('cors');


const app = express();
app.use(express.json());
require('dotenv').config();
require('./connection'); 
app.use(cookieParser());

app.use(cors("*"));



// Routes
app.use('/auth', AuthRouter);
app.use('/user', UserRouter);
app.use('/role', RoleRouter);
app.use('/permission', PermissionRouter);

//swagger __________________

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Authflow',
      version: '3.0.0',
      description: 'authentification app',
    },
  },
  apis: ['./routes/AuthRoute.js'],
  // apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Changed the path to /api-docs

//swagger _________________________

app.listen(process.env.PORT, () => {
  console.log('listening on port:' + process.env.PORT)
})
