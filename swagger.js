const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personalized Horoscope API',
      version: '1.0.0',
      description: 'API documentation for Horoscope service',
    },
  },
  apis: ['./routes/*.js'], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = { swaggerUi, swaggerSpec };
