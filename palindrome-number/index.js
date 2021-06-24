/**
 * Ref - https://leetcode.com/problems/palindrome-number/
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is palindrome while 123 is not.
 */

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let quotient = x;
  let reminder = "";
  let iteration = 0;

  while (quotient > 0) {
    const result = quotient % 10;
    reminder += "" + result;
    quotient = Math.floor(quotient / 10);
    iteration++;
  }

  return +reminder === x;
};
