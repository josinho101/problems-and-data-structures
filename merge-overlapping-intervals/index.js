/**
 * Ref - https://www.algoexpert.io/questions/Merge%20Overlapping%20Intervals
 * Input = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
 * Output = [1, 2, [3, 8], [9, 10]]
 */

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);

  const result = [];
  let prev = array[0];

  result.push(prev);

  for (let i = 0; i < array.length; i++) {
    const prevEnd = prev[1];
    const [currentStart, currentEnd] = array[i];

    if (prevEnd >= currentStart) {
      prev[1] = Math.max(prevEnd, currentEnd);
    } else {
      prev = array[i];
      result.push(prev);
    }
  }

  return result;
}
