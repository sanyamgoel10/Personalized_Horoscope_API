const express = require('express');
const app = express();

// Rate Limiter Added in all APIs
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5, // 5 requests per minute allowed from a single IP address
  message: {
    msg: 'Too many requests, please try again after a minute.'
  }
});

// Middleware
app.use(express.json());
const AuthMiddleware = require('./middlewares/authMiddleware.js');

// Routes
const HoroscopeRoutes = require('./routes/horoscopeRoutes.js');
const HomeRoutes = require('./routes/homeRoutes.js');

app.use(limiter);
app.use('/', HomeRoutes);
app.use('/horoscope', AuthMiddleware.validateJwtToken, HoroscopeRoutes);

// 404 Handler
app.use((req, res) => {
  return res.status(404).json({
    msg: 'Error: Invalid URL'
  });
});

module.exports = app;
