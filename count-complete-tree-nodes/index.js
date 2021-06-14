/**
 * Ref - https://leetcode.com/problems/count-complete-tree-nodes/
 * Given the root of a complete binary tree, return the number of the
 * nodes in the tree.
 *
 * According to Wikipedia, every level, except possibly the last, is
 * completely filled in a complete binary tree, and all nodes in the last
 * level are as far left as possible. It can have between 1 and 2h nodes
 * inclusive at the last level h.
 *
 * Design an algorithm that runs in less than O(n) time complexity.
 *
 * Eg - Input: root = [1,2,3,4,5,6], Output: 6
 */

var countNodes = function (root) {
  const stack = [];
  let counter = 0;
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    counter++;
    node = node.right;
  }

  return counter;
};

module.exports = countNodes;
