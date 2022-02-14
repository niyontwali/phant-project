const express = require('express');

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
router.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; padding-top: 300px; color: purple;">Welcome to Phantom Web App!!!!!</h1>');
});

module.exports = router;
