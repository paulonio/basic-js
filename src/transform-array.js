const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) { 
  if (!Array.isArray(arr)) {
    throw new TypeError(`'arr' parameter must be an instance of the Array!`)
  } else {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-prev') {
        result.splice(arr.indexOf(arr[i - 1]), 2);
      }
      if (arr[i] === '--discard-next' && (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev')) {
        arr.splice(arr.indexOf(arr[i]), 3);
      } else if (arr[i] === '--discard-next') {
        arr.splice(arr.indexOf(arr[i]), 2);
      }
      if (arr[i] === '--double-prev') {
        result.push(arr[i - 1]);
      }
      if (arr[i] === '--double-next') {
        result.push(arr[i + 1]);
      }
      if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') {
        result.push(arr[i]);
      }     
    }
    for (let k = 0; k < result.length; k++) {
      if (result[k] === undefined) {  
      result.splice(result.indexOf(result[k]), 1) ;
      } 
    }
    return result;
  }
}

module.exports = {
  transform
};
