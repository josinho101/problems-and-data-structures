/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 * Eg
 *
 * Input: nums1 = [1,3], nums2 = [2], Output: 2.00000
 * Input: nums1 = [1,2], nums2 = [3,4], Output: 2.50000
 * Input: nums1 = [0,0], nums2 = [0,0], Output: 0.00000
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isItemCountOdd = totalLength % 2 !== 0;
  const maxLen = isItemCountOdd
    ? Math.ceil(totalLength / 2)
    : totalLength / 2 + 1;

  const temp = [];

  let i = 0;
  let j = 0;
  let iterations = 0;

  while (iterations <= maxLen - 1) {
    const tempLen = temp.length;
    const num1 = nums1[i] !== undefined ? nums1[i] : Number.MAX_SAFE_INTEGER;
    const num2 = nums2[j] !== undefined ? nums2[j] : Number.MAX_SAFE_INTEGER;

    if (num1 < num2) {
      if (nums1[i] !== undefined) {
        temp[tempLen] = nums1[i];
        i++;
      }
    } else {
      if (nums2[j] !== undefined) {
        temp[tempLen] = nums2[j];
        j++;
      }
    }

    iterations++;
  }

  return isItemCountOdd
    ? temp[temp.length - 1]
    : (temp[temp.length - 1] + temp[temp.length - 2]) / 2;
};

module.exports = findMedianSortedArrays;
