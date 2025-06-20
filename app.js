const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const horoscopeRoutes = require('./routes/horoscopeRoutes.js');
const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);
app.use('/horoscope', horoscopeRoutes);

// 404 Handler
app.use((req, res) => {
  return res.status(404).json({
    msg: "Error: Invalid URL"
  });
});

module.exports = app;
