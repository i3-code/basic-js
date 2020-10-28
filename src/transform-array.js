const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
/*
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
*/
  let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
        if (i + 1 < arr.length) result.push(arr[i + 1]);
        continue;
      }

      if (arr[i] === '--discard-prev') {
        if (i >= 1 && arr[i - 2] != '--discard-next') result.pop();  
        continue;
      }
            
      if (arr[i] === '--double-prev') {
        if (i >= 1 && arr[i - 2] != '--discard-next') result.push(arr[i - 1]);
        continue;
      }
        
      if (arr[i] === '--discard-next') {
        i += 1;
        continue;
      }

    result.push(arr[i]);
  }

  return result;
}