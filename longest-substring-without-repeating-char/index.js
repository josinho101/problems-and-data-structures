/**
 * Given a string s, find the length of the longest substring without
 * repeating characters.
 *
 * Eg
 *
 * Input: s = "abcabcbb", Output: 3
 * Input: s = "bbbbb", Output: 1
 * Input: s = "pwwkew", Output: 3
 */

var lengthOfLongestSubstring = function (s) {
  const map = {};
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < s.length) {
    const c = s[right];
    if (!map[c]) {
      map[c] = 1;
      result = Math.max(result, right - left + 1);
      right++;
    } else {
      delete map[s[left]];
      left++;
    }
  }

  return result;
};

module.exports = lengthOfLongestSubstring;
