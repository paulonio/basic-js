const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch (e) {
    throw new Error(`Invalid date!`);
  }
  if (!date) {
    return 'Unable to determine the time of year!';
  } else {
    if (date.getMonth() >= 2 && date.getMonth() <= 4) {
      return 'spring';
    } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
      return 'summer';
    } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
      return 'autumn';
    } else if (date.getMonth() === 11 || date.getMonth() >= 0) {
      return 'winter';
    }
  } 
}

module.exports = {
  getSeason
};
