const HoroscopeService = require('../services/horoscopeService.js');
const UtilService = require('../services/utilService.js');

const User = require('../services/models/users.js');
const UsersHistory = require('../services/models/users_history.js');

class HoroscopeController {
  async getUserTodaysHoroscope(req, res) {
    try {
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const history = await UsersHistory.findOne({
        userId: req.UserData._id,
        createdAt: {
          $gte: startOfDay,
          $lte: endOfDay
        }
      });

      let todaysHoroscope;
      if (history) {
        todaysHoroscope = history.horoscope;
      } else {
        const userDetails = await User.findOne({
          _id: req.UserData._id
        });
        if (!UtilService.checkValidObject(userDetails)) {
          return res.status(404).json({
            status: 0,
            msg: 'User not found'
          });
        }
        todaysHoroscope = await HoroscopeService.getHoroscopeFromZodiac(userDetails.zodiac);
        const usersHistory = new UsersHistory({
          userId: req.UserData._id,
          horoscope: todaysHoroscope,
        });
        await usersHistory.save();
      }

      return res.status(200).json({
        status: 1,
        msg: 'Horoscope successfully fetched',
        horoscope: todaysHoroscope
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        status: 0,
        msg: "Something went wrong"
      });
    }
  }

  async getUserHistoryHoroscope(req, res) {
    try {
      const today = new Date();
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(today.getDate() - 7);
      sevenDaysAgo.setHours(0, 0, 0, 0);

      const resultHistory = await UsersHistory.find({
        userId: req.UserData._id,
        createdAt: { $gte: sevenDaysAgo }
      }).sort({ createdAt: -1 });

      if(resultHistory.length < 1){
        return res.status(200).json({
          status: 0,
          msg: 'No horoscope found for last 7 days'
        });
      }

      const result = {};
      resultHistory.forEach(entry => {
        const date = entry.createdAt.toISOString().split('T')[0]; // "yyyy-mm-dd"
        result[date] = entry.horoscope;
      });

      return res.status(200).json({
        status: 1,
        msg: 'Horoscope history successfully fetched',
        horoscopeHistory: result
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        status: 0,
        msg: "Something went wrong"
      });
    }
  }
}

module.exports = new HoroscopeController();