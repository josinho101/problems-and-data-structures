/**
 * Given an array, Find K numbers in an array such that their sum is equal to a target
 * Eg-
 * K = 4, Input = [1, 2, -2, 3, -1, 0], target = 0
 * ouput = [[ -2, -1, 0, 3 ], [ -2, -1, 1, 2 ]]
 *
 * Note - The solution set must not contain duplicates
 */

const findKSum = (array, target, k) => {
  if (array.length < k) {
    return null;
  }

  // for this solution, array should be sorted order
  array = array.sort((a, b) => a - b);
  const items = kSum(array, target, k);

  return items;
};

const kSum = (array, target, k) => {
  if (k === 2) {
    return twoSum(array, target);
  }

  let items = [];

  for (let i = 0; i < array.length - 1; i++) {
    const itemsToIterate = array.slice(i, array.length);
    if (itemsToIterate.length < k) {
      break;
    }
    // remove first item from items to iterate and hold
    // sum of firstItem and items in groups will be equal to k
    const firstItem = itemsToIterate.shift();
    const groups = kSum(itemsToIterate, target - firstItem, k - 1);

    // add item to all items returned by previous call
    for (let arr of groups) {
      // check if item is already added. it it is skip.
      if (arr.includes(firstItem)) {
        continue;
      }
      arr.unshift(firstItem);
      items.push(arr);
    }
  }

  return items;
};

const twoSum = (array, target) => {
  const output = [];
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      output.push([array[left], array[right]]);
      left++;
      right--;
    }
  }

  return output;
};

module.exports = findKSum;
