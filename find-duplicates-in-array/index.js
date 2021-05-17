/**
 * Given an array of integers, 1 <= a[i] <= n (n = size of array), some elements
 * appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 * Could you do it without extra space and in O(n) runtime?
 *
 * Eg- Input = [4, 3, -2, -7, 8, 2, 3, 1] => Output = [2, 3]
 * i = 5
 */

const findDuplicates = (input) => {
  const output = [];
  for (let i = 0; i <= input.length - 1; i++) {
    const index = Math.abs(input[i]) - 1;
    if (input[index] < 0) {
      output.push(Math.abs(input[i]));
    } else {
      input[index] = -input[index];
    }
  }

  return output;
};

module.exports = findDuplicates;
