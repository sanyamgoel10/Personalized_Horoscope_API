const bcrypt = require('bcrypt');

class UtilService {
    checkValidString(inpVal) {
        return 'string' == typeof inpVal && inpVal != null && inpVal.trim() != '';
    }

    checkValidEmail(inpVal) {
        return 'string' == typeof inpVal && inpVal != null && inpVal.trim() != '' && (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(inpVal);
    }

    checkValidDateOfBirth(inpVal) {
        // Valid String and Format: yyyy-mm-dd
        if (typeof inpVal !== 'string' || !inpVal.trim() || !(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).test(inpVal)) {
            return false;
        }

        // Valid Date
        const [yyyy, mm, dd] = inpVal.split('-').map(Number);
        const parsedDate = new Date(yyyy, mm - 1, dd);
        if (parsedDate.getFullYear() !== yyyy || parsedDate.getMonth() !== mm - 1 || parsedDate.getDate() !== dd) {
            return false;
        }

        // Less than today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return parsedDate < today;
    }

    async encryptPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    async validatePassword(inputPassword, originalPassword) {
        return await bcrypt.compare(inputPassword, originalPassword);
    }

    checkValidObject(inpVal) {
        return inpVal != null && 'object' == typeof inpVal && !Array.isArray(inpVal);
    }
}

module.exports = new UtilService();