/**
 * Ref - https://leetcode.com/problems/path-sum/
 *
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding up all the values along the
 * path equals targetSum.
 *
 * A leaf is a node with no children.
 */

var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  const newtarget = targetSum - root.val;

  return hasPathSum(root.left, newtarget) || hasPathSum(root.right, newtarget);
};
