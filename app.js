const express = require('express');
const logger = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Required Routes
const welcomeRoute = require('./src/routes/welcomeRoute');

// Initialize express app
const app = express();

// Morgan for the logger in the console
if (app.get('env') === 'development') {
  app.use(logger('dev'));
  console.log('Morgan logger is enabled...');
}

// Swagger Info Object
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Phantom API Documentation',
      description: 'Phantom API Documentation',
      contact: {
        name: 'Callback-Pirates',
      },
      server: 'http://localhost:3000',
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Custom Middleware
app.use(welcomeRoute);

// PORT
const port = process.env.PORT || 3000;

// Listening to requests
app.listen(port, () => {
  console.log(`Server running on port ${port}..... `);
});
