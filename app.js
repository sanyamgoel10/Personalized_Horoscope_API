const express = require('express');
const app = express();

// Middleware
app.use(express.json());
const AuthMiddleware = require('./middlewares/authMiddleware.js');

// Routes
const HoroscopeRoutes = require('./routes/horoscopeRoutes.js');
const HomeRoutes = require('./routes/homeRoutes.js');

app.use('/', HomeRoutes);
app.use('/horoscope', AuthMiddleware.verifyJwtToken, HoroscopeRoutes);

// 404 Handler
app.use((req, res) => {
  return res.status(404).json({
    msg: 'Error: Invalid URL'
  });
});

module.exports = app;
