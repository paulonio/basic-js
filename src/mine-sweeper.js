const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  return matrix.map((row, rowIndex, matrix) => {
    let count = 0;
    const newRow = row.map((elem, index, array) => {
      count = 0
      
      array[index - 1] && count++

      if(rowIndex - 1 >= 0) {
        matrix[rowIndex - 1][index - 1] && count++
        matrix[rowIndex - 1][index] && count++         
        matrix[rowIndex - 1][index + 1] && count++
      }
    
      array[index + 1] && count++

      if(rowIndex + 1 < matrix.length) {          
        matrix[rowIndex + 1][index - 1] && count++
        matrix[rowIndex + 1][index] && count++
        matrix[rowIndex + 1][index + 1] && count++
      }
    
      return count
    })
    
    return newRow
  })
}

module.exports = {
  minesweeper
};
