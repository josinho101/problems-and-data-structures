/**
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 * Eg
 *           1
 *         /   \
 *        2     2
 *       / \   / \
 *      3   4 4   3
 */

var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  const result = isMirror(root, root);
  return result;
};

const isMirror = (node1, node2) => {
  if (!node1 && !node2) {
    return true;
  }

  if (node1 && node2 && node1.val === node2.val) {
    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    );
  }

  return false;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

module.exports = { isSymmetric, TreeNode };
