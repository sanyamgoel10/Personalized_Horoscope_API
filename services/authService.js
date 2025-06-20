const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/config.js');
const UtilService = require('./utilService.js');

class AuthService {
    async generateJwtToken(userId, email) {
        const jwtObj = {
            _id: userId,
            email
        };
        const token = jwt.sign(jwtObj, jwtSecret, {
            expiresIn: '1h',
        });
        return token;
    }

    async verifyJwtToken(jwtToken) {
        try {
            let verified = jwt.verify(jwtToken, jwtSecret);
            console.log("verified: ", verified);
            if (UtilService.checkValidObject(verified)) {
                return verified;
            } else {
                return false;
            }
        }
        catch (e) {
            console.log("Error: Invalid JWT", e);
            return false;
        }
    }
}

module.exports = new AuthService();