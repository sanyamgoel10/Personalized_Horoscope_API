const UtilService = require('../services/utilService.js');
const AuthService = require('../services/authService.js');
const HoroscopeService = require('../services/horoscopeService.js');

const User = require('../services/models/users.js');

class AuthController {
  async signUp(req, res) {
    try {
      if (!UtilService.checkValidString(req.body.Name)) {
        return res.status(404).json({
          status: 0,
          msg: 'Invalid Name in request body'
        });
      }

      if (!UtilService.checkValidString(req.body.Password)) {
        return res.status(404).json({
          status: 0,
          msg: 'Invalid Password in request body'
        });
      }

      if (!UtilService.checkValidEmail(req.body.Email)) {
        return res.status(404).json({
          status: 0,
          msg: 'Invalid Email in request body'
        });
      }

      if (!UtilService.checkValidDateOfBirth(req.body.Birthdate)) {
        return res.status(404).json({
          status: 0,
          msg: 'Invalid Birthdate in request body'
        });
      }

      const name = req.body.Name;
      const pass = await UtilService.encryptPassword(req.body.Password);
      const email = req.body.Email;
      const dob = req.body.Birthdate;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          status: 0,
          msg: 'Email already in use'
        });
      }

      const user = new User({
        email,
        name,
        password: pass,
        dob: new Date(dob),
        zodiac: await HoroscopeService.getHoroscopeFromDob(dob)
      });
      await user.save();

      const userJwt = await AuthService.generateJwtToken(user._id, email);

      return res.status(200).json({
        status: 1,
        msg: "Sign Up sucessful",
        jwtToken: userJwt
      });
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({
        status: 0,
        msg: "Something went wrong"
      });
    }
  }

  async login(req, res) {
    try {
      if (!UtilService.checkValidString(req.body.Password)) {
        return res.status(404).json({
          status: 0,
          msg: 'Invalid Password in request body'
        });
      }

      if (!UtilService.checkValidEmail(req.body.Email)) {
        return res.status(404).json({
          status: 0,
          msg: 'Invalid Email in request body'
        });
      }

      const user = await User.findOne({
        email: req.body.Email
      });
      if (!user) {
        return res.status(404).json({
          status: 0,
          msg: 'Email not found'
        });
      }

      const validPassword = await UtilService.validatePassword(req.body.Password, user.password);
      if (!validPassword) {
        return res.status(404).json({
          status: 0,
          msg: 'Password does not match'
        });
      }

      const userJwt = await AuthService.generateJwtToken(user._id, req.body.Email);

      return res.status(200).json({
        status: 1,
        msg: 'Logged in successfully',
        jwtToken: userJwt
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

module.exports = new AuthController();