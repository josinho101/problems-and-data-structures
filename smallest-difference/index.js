/**
 * Write a function, that takes in two non empty arrays of integer and find the
 * pair of numbers whose abs difference is closest to 0 and returns an array
 * containing these 2 numbers
 */

function smallestDifference(arrayOne, arrayTwo) {
  let p1 = 0;
  let p2 = 0;
  let result = [];
  let smallest = Number.MAX_SAFE_INTEGER;
  let diff = Number.MAX_SAFE_INTEGER;

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  // -1, 3, 5, 10, 20, 28
  // 15, 17, 26, 134, 135

  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    const first = arrayOne[p1];
    const second = arrayTwo[p2];

    if (first < second) {
      diff = second - first;
      p1++;
    } else if (second < first) {
      diff = first - second;
      p2++;
    } else {
      return [first, second];
    }

    if (smallest > diff) {
      smallest = diff;
      result = [first, second];
    }
  }

  return result;
}