/**
 * Ref - https://leetcode.com/problems/recover-binary-search-tree/
 * You are given the root of a binary search tree (BST), where exactly two
 * nodes of the tree were swapped by mistake. Recover the tree without changing
 * its structure.
 *
 * Follow up: A solution using O(n) space is pretty straight forward. Could you
 * devise a constant space solution?
 */

var recoverTree = function (root) {
  let prev = null;
  let first = null;
  let second = null;

  function inorder(node) {
    if (!node) {
      return null;
    }

    inorder(node.left);

    if (prev && prev.val > node.val) {
      if (!first) {
        first = prev;
      }
      second = node;
    }

    prev = node;

    inorder(node.right);
  }

  inorder(root);

  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};
