class HoroscopeController {
  async getUserTodaysHoroscope(req, res) {
    return res.status(200).json({
      status: 1,
      msg: "Hello From getUserTodaysHoroscope"
    });
  }

  async getUserHistoryHoroscope(req, res){
    return res.status(200).json({
      status: 1,
      msg: "Hello From getUserHistoryHoroscope"
    });
  }
}

module.exports = new HoroscopeController();