/**
 * Given the root of a binary tree, determine if it is a valid
 * binary search tree (BST).
 *
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the
 *   node's key.
 * - The right subtree of a node contains only nodes with keys greater than
 *   the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (
  root,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) {
  if (!root) {
    return true;
  }

  if (root.val >= max) {
    return false;
  }

  if (root.val <= min) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

module.exports = { isValidBST, TreeNode };
