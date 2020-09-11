const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined) return str + options.addition;

  let repeatTimes = options.repeatTimes;
  let separator = String(options.separator);
  if (separator == 'undefined') separator = '+';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = String(options.additionSeparator);
  if (additionSeparator == 'undefined') additionSeparator = '|';

  let result = '';
  let addStr = '';

  for (i=0; i < additionRepeatTimes - 1; i++) {
    addStr += addition + additionSeparator;
  }
  if (additionRepeatTimes > 0) addStr += addition;

  for (i=0; i < repeatTimes - 1; i++) {
    result += str + addStr + separator;
  }
  if (repeatTimes > 0) result += str + addStr;

  return result;
};
  