const express = require('express');
const app = express();

// Middleware
app.use(express.json());
const AuthMiddleware = require('./middlewares/authMiddleware.js');

// Routes
const horoscopeRoutes = require('./routes/horoscopeRoutes.js');
const authRoutes = require('./routes/authRoutes');

app.use('/', authRoutes);
app.use('/horoscope', AuthMiddleware.verifyJwtToken, horoscopeRoutes);

// 404 Handler
app.use((req, res) => {
  return res.status(404).json({
    msg: 'Error: Invalid URL'
  });
});

module.exports = app;
