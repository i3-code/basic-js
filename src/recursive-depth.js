const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;
    let depth;
    for (let i of arr) {
      if (!Array.isArray(i)) continue;
      depth = this.calculateDepth(i) + 1;
      if (depth > level) level = depth;
    }
    return level;
  }
};