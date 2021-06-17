/**
 * Ref - https://leetcode.com/problems/maximum-subarray/
 *
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest sum and return
 * its sum.
 */

var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i] + currentSum, nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
