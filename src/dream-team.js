const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  for (let member of members) {
    if (typeof(member) == 'string') {
      result.push(member.trim()[0].toUpperCase());
    }
  }
  return result.sort().join('');
};
