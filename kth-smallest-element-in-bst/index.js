/**
 * Ref - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Given the root of a binary search tree, and an integer k, return the
 * kth (1-indexed) smallest element in the tree.
 *
 * Eg - Input: root = [5,3,6,2,4,null,null,1], k = 3, Output: 3
 */

var kthSmallest = function (root, k) {
  const result = [];

  function dfs(node) {
    const stack = [];
    let current = node;

    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  }

  dfs(root);
  return result[k - 1];
};

module.exports = kthSmallest;
