const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/homeController.js');

router.post('/signup', HomeController.signUp);
router.post('/login', HomeController.login);

module.exports = router;