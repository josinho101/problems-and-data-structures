/**
 * Ref - https://www.algoexpert.io/questions/Validate%20Subsequence
 */

function isValidSubsequence(array, sequence) {
  let p1 = 0;

  for (let item of array) {
    if (p1 === sequence.length) {
      return true;
    }

    if (item === sequence[p1]) {
      p1++;
    }
  }

  return p1 === sequence.length;
}
