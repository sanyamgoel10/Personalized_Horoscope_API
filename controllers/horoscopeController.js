const HoroscopeService = require('../services/horoscopeService.js');
const UtilService = require('../services/utilService.js');

const User = require('../services/models/users.js');

class HoroscopeController {
  async getUserTodaysHoroscope(req, res) {
    try {
      const userDetails = await User.findOne({
        _id: req.UserData._id
      });

      if (!UtilService.checkValidObject(userDetails)) {
        return res.status(404).json({
          status: 0,
          msg: 'User not found'
        });
      }

      let todaysHoroscope;
      let currDate = new Date().toISOString().split('T')[0];
      if (UtilService.checkValidObject(userDetails.horoscopeHistory) && userDetails.horoscopeHistory[currDate]) {
        todaysHoroscope = userDetails.horoscopeHistory[currDate];
      } else {
        todaysHoroscope = await HoroscopeService.getHoroscopeFromZodiac(userDetails.zodiac);
        userDetails.horoscopeHistory = {
          [currDate]: todaysHoroscope
        };
        await userDetails.save();
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
      console.log("req.UserData: ", req.UserData);
      return res.status(200).json({
        status: 1,
        msg: 'Hello From getUserHistoryHoroscope'
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