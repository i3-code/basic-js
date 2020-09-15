const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.map((subMatrix) => subMatrix.filter((item) => item === '^^')).flat().length;
};
