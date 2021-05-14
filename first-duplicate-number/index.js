/**
 * Given an array of integers, find first duplicate number
 *
 * Example
 *
 * [1, 2, 1, 3] => 1
 * [3, 2, 1, 4, 2, 5] => 2
 */

const findFirstDuplicate = (array) => {
  const map = {};
  for (let i = 0; i <= array.length - 1; i++) {
    const value = array[i];
    if (map[value] !== undefined) {
      return value;
    }
    map[value] = i;
  }
};

module.exports = findFirstDuplicate;
