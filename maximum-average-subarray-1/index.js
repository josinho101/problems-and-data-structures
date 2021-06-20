/**
 * Ref - https://leetcode.com/problems/maximum-average-subarray-i/
 * You are given an integer array nums consisting of n elements, and an
 * integer k.
 *
 * Find a contiguous subarray whose length is equal to k that has the maximum
 * average value and return this value. Any answer with a calculation error
 * less than 10-5 will be accepted.
 */

var findMaxAverage = function (nums, k) {
  let maxAvg = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (i + 1 >= k) {
      maxAvg = Math.max(currentSum / k, maxAvg);
      currentSum -= nums[i + 1 - k];
    }
  }

  return maxAvg;
};
