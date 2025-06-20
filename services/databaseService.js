const mongoose = require('mongoose');

const { mongoDbConnectionUrl } = require('../config/config.js');

class DatabaseService {
  async connectToDatabase() {
    try{
      await mongoose.connect(mongoDbConnectionUrl);
      console.log('Database is connected');
      return true;
    }catch(error){
      console.log("Error connecting to database: ", error);
      return false;      
    }
  }
}

module.exports = new DatabaseService();