class UtilService {
    checkValidString(inpVal) {
        return 'string' == typeof inpVal && inpVal != null && inpVal.trim() != '';
    }

    checkValidEmail(inpVal) {
        return 'string' == typeof inpVal && inpVal != null && inpVal.trim() != '' && (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(inpVal);
    }

    checkValidDateOfBirth(inpVal) {
        // Valid String
        if (typeof inpVal !== 'string' || !inpVal.trim() || !(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/).test(inpVal)){
            return false;
        }

        // Valid Date
        const [dd, mm, yyyy] = inpVal.split('-').map(Number);
        const parsedDate = new Date(yyyy, mm - 1, dd);
        if (!(parsedDate.getFullYear() === yyyy && parsedDate.getMonth() === mm - 1 && parsedDate.getDate() === dd)){
            return false;
        }

        // Less than today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return parsedDate < today;
    }
}

module.exports = new UtilService();