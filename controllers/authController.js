class AuthController{
  async signUp(req, res){
    return res.status(200).json({
      status: 1,
      msg: "Hello From signup"
    });
  }

  async login(req, res){
    return res.status(200).json({
      status: 1,
      msg: "Hello From login"
    });
  }
}

module.exports = new AuthController();