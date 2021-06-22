/**
 * Ref - https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest
 * path from the root node down to the farthest leaf node.
 */

var maxDepth = function (root) {
  let height = 0;
  const queue = [];

  if (root === null) {
    return height;
  }

  queue.unshift(root);

  while (queue.length) {
    height++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.pop();

      if (node.left) {
        queue.unshift(node.left);
      }

      if (node.right) {
        queue.unshift(node.right);
      }
    }
  }

  return height;
};
