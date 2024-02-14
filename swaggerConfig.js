const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Authflow API',
      version: '3.0.0',
      description: 'authentification',
    },
    servers: [
        {
          url: 'http://localhost:3002',
        },
      ],
  },
  apis: ['./Routes/*.js', './Controllers/*.js'],
};

module.exports = swaggerJSDoc(options);
