/**
 * Write a function that takes in an array of integers and returns a boolean
 * representing whether the array is monotonic
 * An array is said to be monotonic if its elements, from left to right are
 * entirley non increasing or entirely non decreasing
 */

function isMonotonic(array) {
  const length = array.length;
  let p1 = 0;
  let p2 = 1;
  let isAsc = false;

  if (length < 2) {
    return true;
  }

  while (array[p1] === array[p2]) {
    p2++;
  }

  if (array[p1] < array[p2]) {
    isAsc = true;
  }

  for (let i = p2; i < length - 1; i++) {
    if (isAsc) {
      if (array[i + 1] < array[i]) {
        return false;
      }
    } else {
      if (array[i + 1] > array[i]) {
        return false;
      }
    }
  }

  return true;
}
