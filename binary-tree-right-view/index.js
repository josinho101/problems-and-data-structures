/**
 * Given the root of a binary tree, imagine yourself standing on the right
 * side of it, return the values of the nodes you can see ordered from top
 * to bottom.
 *
 * Eg - Input: root = [1,2,3,null,5,null,4], Output: [1,3,4]
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rightSideView = function (root) {
  if (!root) {
    return [];
  }

  let queue = [];
  const result = [];

  queue.push(root);

  while (queue.length) {
    const size = queue.length;
    let isAdded = false;
    for (let i = 0; i < size; i++) {
      const node = queue.pop();
      if (!isAdded) {
        result.push(node.val);
        isAdded = true;
      }

      if (node.right) {
        queue.unshift(node.right);
      }

      if (node.left) {
        queue.unshift(node.left);
      }
    }
  }

  return result;
};

module.exports = { rightSideView, TreeNode };
