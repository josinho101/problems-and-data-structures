/**
 * Given a non-empty binary tree, find the maximum path sum. For this problem,
 * a path is defined as any sequence of nodes from some starting node to any
 * node in the tree along the parent-child connections. The path must contain
 * at least one node and does not need to go through the root.
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeUtil {
  constructor() {
    this.max = Number.MIN_SAFE_INTEGER;
  }

  findMaxPathSum(node) {
    this._findPathSum(node);
    return this.max;
  }

  _findPathSum(node) {
    if (node === null) {
      return 0;
    }

    const left = this._findPathSum(node.left);
    const right = this._findPathSum(node.right);

    const currentSum = left + right + node.data;
    this.max = Math.max(currentSum, this.max);

    return Math.max(left + node.data, right + node.data);
  }
}

module.exports = { Node, BinaryTreeUtil };
