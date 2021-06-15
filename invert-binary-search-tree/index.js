/**
 * Ref - https://leetcode.com/problems/invert-binary-tree/
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Eg - Input: root = [4,2,7,1,3,6,9], Output: [4,7,2,9,6,3,1]
 */

var invertTree = function (root) {
  function dfs(node) {
    if (!node) {
      return;
    }

    dfs(node.left);
    dfs(node.right);

    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  dfs(root);
  return root;
};

module.exports = invertTree;
