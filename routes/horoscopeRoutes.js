const express = require('express');
const router = express.Router();

const HoroscopeController = require('../controllers/horoscopeController.js');

router.get('/today', HoroscopeController.getUserTodaysHoroscope);
router.get('/history', HoroscopeController.getUserHistoryHoroscope);

module.exports = router;