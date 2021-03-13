const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const { repeatTimes, addition, additionRepeatTimes } = options;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';

  let result = '';
  let addStr = '';

  for (let i = 1; i <= additionRepeatTimes; i += 1) {
    addStr += String(addition);
    if (i != additionRepeatTimes) addStr += String(additionSeparator);
  }

  if (!additionRepeatTimes) addStr += addition ? String(addition) : '';

  for (let i = 1; i <= repeatTimes; i += 1) {
    result += String(str);
    result += addStr;
    if (i != repeatTimes) result += String(separator);
  }

  if (!repeatTimes) result += String(str) + addStr;

  return result;
};
