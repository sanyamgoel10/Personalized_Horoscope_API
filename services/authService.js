const jwt = require("jsonwebtoken");

class AuthService{
    async createNewToken(email){
        let jwtObj = {
            email
        };
        let token = jwt.sign(jwtObj);
    }
}

module.exports = new AuthService();