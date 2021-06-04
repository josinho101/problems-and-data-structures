/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * Eg
 * Input: s = "babad", Output: "bab"
 */

var longestPalindrome = function (s) {
  const length = s.length;
  const dp = new Array(length).fill(0).map(() => new Array(length).fill(0));

  let maxPalindrome = "";

  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length; i++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (i === j - 1 && s[i] === s[j]) {
        dp[i][j] = 1;
      } else if (i + 1 < s.length) {
        if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
          dp[i][j] = 1;
        }
      }

      if (dp[i][j] === 1) {
        if (j + 1 - i > maxPalindrome.length) {
          const temp = s.substring(i, j + 1);
          maxPalindrome = temp;
        }
      }
    }
  }

  return maxPalindrome;
};

module.exports = longestPalindrome;
