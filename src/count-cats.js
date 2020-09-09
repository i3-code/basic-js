const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let element of matrix) {
    for (let subElement of element) {
      if (subElement == "^^") count += 1;
    }
  }
  return count;
};
