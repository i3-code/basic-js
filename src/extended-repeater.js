const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const { repeatTimes, addition, additionRepeatTimes } = options;
  if (!repeatTimes) return String(str) + String(addition);

  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';

  let result = '';
  let addStr = '';

  for (let i = 1; i <= additionRepeatTimes; i += 1) {
    addStr += String(addition);
    if (i != additionRepeatTimes) addStr += String(additionSeparator);
  }

  for (let i = 1; i <= repeatTimes; i += 1) {
    result += String(str);
    result += addStr;
    if (i != repeatTimes) result += String(separator);
  }

  return result;
};
