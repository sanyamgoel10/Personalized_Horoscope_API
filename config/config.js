const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongoDbConnectionUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
}