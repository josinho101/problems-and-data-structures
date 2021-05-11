/**
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * https://leetcode.com/problems/two-sum/
 *
 * Exmaples
 *
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 *
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 */

class TwoSum {
  findByBruteForce(array, target) {
    const itemCount = array.length - 1;
    for (let i = 0; i <= itemCount; i++) {
      for (let j = i + 1; j <= itemCount; j++) {
        if (array[i] + array[j] === target) {
          return [i, j];
        }
      }
    }
  }

  findByTwoPointer(array, target) {
    // to work this approach, array should be in sorted order
    array.sort((a, b) => a - b);

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
      const sum = array[left] + array[right];

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return [left, right];
      }
    }
  }

  findByHashTable(array, target) {
    const table = {};
    for (let i = 0; i <= array.length - 1; i++) {
      const complement = target - array[i];
      const find = table[array[i]];
      if (find !== undefined) {
        return [find, i];
      } else {
        table[complement] = i;
      }
    }
  }
}

module.exports = TwoSum;
