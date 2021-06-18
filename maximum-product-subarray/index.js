/**
 * Ref - https://leetcode.com/problems/maximum-product-subarray/
 * Given an integer array nums, find a contiguous non-empty subarray
 * within the array that has the largest product, and return the product.
 *
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * A subarray is a contiguous subsequence of the array.
 */

var maxProduct = function (nums) {
  let min = nums[0];
  let max = nums[0];
  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMin = min;
    let val = nums[i];

    min = Math.min(val, min * val, max * val);
    max = Math.max(val, tempMin * val, max * val);

    maxProduct = Math.max(max, maxProduct);
  }

  return maxProduct;
};
