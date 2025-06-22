const { horoscopes } = require('../config/config.js');

class HoroscopeService {
  async getHoroscopeFromDob(inputDob) {
    let date = new Date(inputDob);
    const mmdd = (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
    for (const [sign, range] of Object.entries(horoscopes)) {
      const start = range.start;
      const end = range.end;
      if (start < end) {
        if (mmdd >= start && mmdd <= end) {
          return sign;
        }
      } else {
        if (mmdd >= start || mmdd <= end) {
          return sign;
        }
      }
    }
    return null;
  }

  async getHoroscopeFromZodiac(zodiacSign){
    // let allHoroscopes = horoscopes[zodiacSign].text;
    // return allHoroscopes[Math.floor((Math.random()*allHoroscopes.length))]
    return horoscopes[zodiacSign].text;
  }
}

module.exports = new HoroscopeService();
