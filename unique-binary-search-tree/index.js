/**
 * Ref - https://leetcode.com/problems/unique-binary-search-trees/
 * Given an integer n, return the number of structurally unique BST's
 * (binary search trees) which has exactly n nodes of unique values
 * from 1 to n.
 *
 * Eg - Input: n = 3, Output: 5
 */

var numTrees = function (n) {
  const dp = [];

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};

module.exports = numTrees;
