const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (Object.values(date).length) throw new Error('Error');
    let month = date.getMonth() + 1;
    if (month <= 2 || month == 12) return 'winter';
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
}
