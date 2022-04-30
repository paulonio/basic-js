const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let result = [];
  let digit = 0;
  let arr = n.toString().split('').map(e => +e);
  digit = arr.sort()[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(digit) !== arr[i]) {
      result.push(arr[i]);
    }
  }
  
  return result
}

module.exports = {
  deleteDigit
};
