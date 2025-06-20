const UtilService = require('../services/utilService.js');

class AuthController {
  async signUp(req, res) {
    if(!UtilService.checkValidString(req.body.Name)){
      return res.status(404).json({
        status: 0,
        msg: "Invalid Name in request body"
      });
    }

    if(!UtilService.checkValidString(req.body.Password)){
      return res.status(404).json({
        status: 0,
        msg: "Invalid Password in request body"
      });
    }

    if(!UtilService.checkValidEmail(req.body.Email)){
      return res.status(404).json({
        status: 0,
        msg: "Invalid Email in request body"
      });
    }

    if(!UtilService.checkValidDateOfBirth(req.body.Birthdate)){
      return res.status(404).json({
        status: 0,
        msg: "Invalid Birthdate in request body"
      });
    }

    return res.status(200).json({
      status: 1,
      msg: "Hello From signup"
    });
  }

  async login(req, res) {
    return res.status(200).json({
      status: 1,
      msg: "Hello From login"
    });
  }
}

module.exports = new AuthController();