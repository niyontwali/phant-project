import express from 'express'
import authController from '../controllers/authController'

const router = express.Router()

router.post('/users/login', authController.login)

export default router
