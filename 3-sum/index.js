/**
 * Given an array of integers nums and an integer target, return indices of the
 * three numbers such that they add up to target.
 *
 * Exmaples
 *
 * Input: nums = [2, 7, 11, 15], target = 20
 * Output: [0, 1, 2]
 *
 * Input: nums = [3, 2, 4, 5, 6], target = 12
 * Output: [1, 2, 4]
 */

class ThreeSum {
  find(nums, target) {
    const length = nums.length;
    const result = [];
    const maxIndex = length - 1;

    if (!nums || length < 3) {
      return result;
    }

    // sort the array O(n log(n))
    nums.sort((a, b) => a - b);

    for (let i = 0; i < length - 2; i++) {
      if (nums[i] !== nums[i - 1]) {
        let p2 = i + 1;
        let p3 = maxIndex;

        while (p2 < p3) {
          const sum = nums[i] + nums[p2] + nums[p3];

          if (sum < target) {
            p2++;
          } else if (sum > target) {
            p3--;
          } else {
            result.push([nums[i], nums[p2], nums[p3]]);
            while (p2 < p3 && nums[p2] === nums[p2 + 1]) p2++;
            while (p2 < p3 && nums[p3] === nums[p3 - 1]) p3--;
            p2++;
            p3--;
          }
        }
      }
    }
    console.log(result);
    return result;
  }
}

module.exports = ThreeSum;
