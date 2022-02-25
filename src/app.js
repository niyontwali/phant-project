import express from 'express'
import logger from 'morgan'
import { sequelize } from '../server/models'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import bodyParser from 'body-parser'

// Required Routes
import welcomeRoute from './routes/welcomeRoute'
import loginRoute from './routes/loginRoute'
import signupRoute from './routes/signupRoute'

// Initialize express app
const app = express()

// Morgan for the logger in the console
if (app.get('env') === 'development') {
  app.use(logger('dev'))
  console.log('Morgan logger is enabled...')
}
app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET')
  res.header('Access-Control-Max-Age', '3600')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token')
  next()
})

app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: 'true' }))
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// Swagger Info Object
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Phantom API Documentation',
      description: 'Phantom API Documentation',
      contact: {
        name: 'Callback-Pirates'
      },
      server: 'http://localhost:3000'
    }
  },
  apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

// Custom Middleware
app.use(welcomeRoute)
app.use(loginRoute)
app.use(signupRoute)

// PORT
const port = process.env.APP_PORT || 3000

// Listening to requests
app.listen(port, async () => {
  console.log(`Server running on port ${port}..... `)
  await sequelize.authenticate()
  console.log('Databse connected successfully')
})
