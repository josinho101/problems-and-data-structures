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
  find(array, target) {
    // this approach will only work if the array is in sorted order.
    array.sort((a, b) => a - b);

    const output = [];

    let p1 = 0;
    let p2 = p1 + 1;
    let p3 = array.length - 1;

    while (p2 < p3) {
      const sum = array[p1] + array[p2] + array[p3];
      if (sum < target) {
        p2++;
      } else if (sum > target) {
        p3--;
      } else {
        // if sum are equal add to output
        output.push([p1, p2, p3]);
        // check if there is a chance to find any other combination
        if (p2 + 1 < p3 - 1) {
          p2++;
          p3--;
        } else {
          // increace the pointer 1, pointer p2 to next of p1 and p3 to last
          p1++;
          p2 = p1 + 1;
          p3 = array.length - 1;
        }
      }
    }

    return output;
  }
}

module.exports = ThreeSum;
