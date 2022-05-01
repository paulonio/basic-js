const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
    let preResult = '';
    let result = '';
  if (Array.isArray(members)) {
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
    preResult += members[i].trim().toUpperCase()[0]
    }
  }
  for (let k = 0; k < preResult.length; k++) {
    result += preResult.split('').sort()[k];
  }
    return result;
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
