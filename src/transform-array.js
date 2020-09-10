const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(Array.isArray(arr)) || !arr) throw new Error('Error');
  let res = [];
  for (let i=0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      if (i + 1 < arr.length) res.push(arr[i + 1]);
    } else if (arr[i] == '--discard-next') {
      i++;
    } else if (arr[i] == '--double-prev') {
      if ((i >= 1) && (arr[i - 2] != '--discard-next')) res.push(arr[i - 1]);
    } else if (arr[i] == '--discard-prev') {
      if ((i >= 1) && (arr[i - 2] != '--discard-next')) res.splice(-1, 1);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};
