const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/config.js');

class AuthService {
    async generateJwtToken(userId, email) {
        const jwtObj = {
            _id: userId,
            email
        };
        const token = jwt.sign(jwtObj, jwtSecret, {
            expiresIn: '1h',
        });
        return btoa(token);
    }
}

module.exports = new AuthService();