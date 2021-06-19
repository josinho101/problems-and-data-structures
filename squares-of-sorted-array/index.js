/**
 * Ref - https://leetcode.com/problems/squares-of-a-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, return an array
 * of the squares of each number sorted in non-decreasing order.
 *
 * Eg Input: nums = [-4,-1,0,3,10], Output: [0,1,9,16,100]
 */

var sortedSquares = function (nums) {
  const length = nums.length;
  const result = [];

  let left = 0;
  let right = length - 1;

  for (let i = length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = Math.pow(nums[right], 2);
      right--;
    } else {
      result[i] = Math.pow(nums[left], 2);
      left++;
    }
  }

  return result;
};

module.exports = sortedSquares;
