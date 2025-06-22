const express = require('express');
const router = express.Router();

const HoroscopeController = require('../controllers/horoscopeController.js');

/**
 * @swagger
 * /horoscope/today:
 *   get:
 *     summary: Get today's horoscope for the authenticated user's zodiac sign
 *     tags: [Horoscope]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched today's horoscope
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 msg:
 *                   type: string
 *                 horoscope:
 *                   type: string
 *       400:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server Error
 */
router.get('/today', HoroscopeController.getUserTodaysHoroscope);

/**
 * @swagger
 * /horoscope/history:
 *   get:
 *     summary: Get last 7 days horoscope for the authenticated user's zodiac sign
 *     tags: [Horoscope]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched user's last 7 days horoscope
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 msg:
 *                   type: string
 *                 horoscopeHistory:
 *                   type: object
 *       400:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server Error
 */
router.get('/history', HoroscopeController.getUserHistoryHoroscope);

module.exports = router;