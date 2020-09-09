const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || sampleActivity == '' || !parseFloat(sampleActivity) || sampleActivity < 0) return false;
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  return (res > 0) ? res : false;
};
