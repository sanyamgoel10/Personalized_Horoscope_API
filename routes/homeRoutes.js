const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/homeController.js');

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Registers a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *               - Email
 *               - Password
 *               - Birthdate
 *             properties:
 *               Name:
 *                 type: string
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *               Birthdate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Signup successful -> Returns a jwt token valid for 1 hour
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server Error
 */
router.post('/signup', HomeController.signUp);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Logs in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Email
 *               - Password
 *             properties:
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful -> Returns a jwt token valid for 1 hour
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server Error
 */
router.post('/login', HomeController.login);

module.exports = router;