/**
 * Ref - https://www.algoexpert.io/questions/Kadane's%20Algorithm
 */

function kadanesAlgorithm(array) {
  let max = array[0];
  let maxCurrent = array[0];

  for (let i = 1; i < array.length; i++) {
    maxCurrent = Math.max(array[i], maxCurrent + array[i]);
    if (maxCurrent > max) {
      max = maxCurrent;
    }
  }

  return max;
}
