/**
 * Ref - https://leetcode.com/problems/binary-tree-tilt/
 * 
 * Given the root of a binary tree, return the sum of every tree node's tilt.
 * 
 * The tilt of a tree node is the absolute difference between the sum of all 
 * left subtree node values and all right subtree node values. If a node does 
 * not have a left child, then the sum of the left subtree node values is 
 * treated as 0. The rule is similar if there the node does not have a right
 * child.
 */

var findTilt = function (root) {
  let sum = 0;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    sum += Math.abs(right - left);

    return node.val + right + left;
  }

  dfs(root);

  return sum;
};