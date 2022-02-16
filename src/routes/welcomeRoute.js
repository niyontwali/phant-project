const express = require('express');
const welcomeController = require('../controllers/welcomeController');

const router = express.Router();

// Welcome endpoint
/**
 * @swagger
 * /:
 *  get:
 *    description: Used to display the Welcome Page
 *    responses:
 *      '200':
 *        description: The Welcome Page was displayed successfully
 */
router.get('/', welcomeController);

module.exports = router;
