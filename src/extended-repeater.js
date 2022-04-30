const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
      let result = str;
       if (options['repeatTimes'] && options['separator'] && options['additionRepeatTimes'] && options['addition'] + '' && options['additionSeparator']) {
        str += options['addition'] + '';
        for (let i = 0; i < options['additionRepeatTimes'] - 1; i++) {
          str += options['additionSeparator'] + options['addition'] + '';
        }
        result = str;
        for (let i = 0; i < options['repeatTimes'] - 1; i++) {
          result += options['separator'] + str
        } 
      } else if (options['separator'] && options['addition'] && options['additionSeparator']) {
          result += options['addition'];
      } else if (options['repeatTimes'] && options['addition'] && options['additionRepeatTimes'] && !options['separator'] && !options['additionSeparator']) {
          str += options['addition'];
          for (let i = 0; i < options['additionRepeatTimes'] - 1; i++) {
            str += '|' + options['addition'];
          }              
            result = str;
          for (let i = 0; i < options['repeatTimes'] - 1; i++) {
            result += '+' + str
          } 
      } else if (options['repeatTimes'] && options['addition'] && options['additionRepeatTimes'] && !options['separator'] && options['additionSeparator']) {
        str += options['addition'];
        for (let i = 0; i < options['additionRepeatTimes'] - 1; i++) {
          str += options['additionSeparator'] + options['addition'] + '';
        }              
          result = str;
        for (let i = 0; i < options['repeatTimes'] - 1; i++) {
          result += '+' + str
        } 
      } else if (options['repeatTimes'] && options['addition'] && options['additionRepeatTimes'] && options['separator'] && !options['additionSeparator']) {
        str += options['addition'];
        for (let i = 0; i < options['additionRepeatTimes'] - 1; i++) {
          str += '|' + options['addition'];
        }              
          result = str;
        for (let i = 0; i < options['repeatTimes'] - 1; i++) {
          result += options['separator'] + str
        } 
      } else if (options['repeatTimes'] && options['separator'] && options['addition'] && options['additionRepeatTimes']) {
          str += options['addition'];
          result += options['addition'];
        for (let i = 0; i < options['repeatTimes'] - 1; i++) {
          result += options['separator'] + str
        }
      } else if (options['repeatTimes'] && options['separator']) {
        for (let i = 0; i < options['repeatTimes'] - 1; i++) {
          result += options['separator'] + str
        }
      }else if (options['repeatTimes'] && options['addition']) {
        str += options['addition'] + '';
        result = str;
        for (let i = 0; i < options['repeatTimes'] - 1; i++) {
         result += '+' + str
       }
      } else if (options['repeatTimes']) {
          for (let i = 0; i < options['repeatTimes'] - 1; i++) {
            result += '+' + str
          }
        }
      return result
  } 


module.exports = {
  repeater
};
