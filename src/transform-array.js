const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(Array.isArray(arr)) || !arr) throw new Error('Error');
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    switch (arr[index]) {
      case '--double-next':
        if (index + 1 < arr.length) result.push(arr[index + 1]);
        break;
      case '--discard-next':
        index += 1;
        break;
      case '--double-prev':
        if ((index >= 1) && (arr[index - 2] != '--discard-next')) result.push(arr[index - 1]);
        break;
      case ('--discard-prev'):
        if ((index >= 1) && (arr[index - 2] != '--discard-next')) result.splice(-1, 1);
        break;
      default:
        result.push(arr[index]);
    }
  }
  return result;
}