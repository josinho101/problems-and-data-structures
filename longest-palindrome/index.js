/**
 * Given a string s which consists of lowercase or uppercase letters,
 * return the length of the longest palindrome that can be built with
 * those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a
 * palindrome here.
 *
 * Eg
 * Input: s = "abccccdd", Output: 7
 */

var longestPalindrome = function (s) {
  const map = {};

  if (!s || s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  for (let i = 0; i < s.length; i++) {
    const val = s[i];

    if (map[val]) {
      map[val]++;
    } else {
      map[val] = 1;
    }
  }

  let hasOdd = false;
  let oddCount = 0;

  for (var i in map) {
    if (map[i] % 2 !== 0) {
      if (hasOdd) {
        oddCount++;
      }

      hasOdd = true;
    }
  }

  if (oddCount) {
    return s.length - oddCount;
  } else {
    return s.length;
  }
};

module.exports = longestPalindrome;
