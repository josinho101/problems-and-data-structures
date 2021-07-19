/**
 * Ref - https://www.algoexpert.io/questions/Find%20Successor
 */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const result = [];

  function inorder(node) {
    if (!node) {
      return null;
    }

    inorder(node.left);
    result.push(node);
    inorder(node.right);
  }

  inorder(tree);

  for (let i = 0; i < result.length; i++) {
    if (result[i].value === node.value) {
      return result[i + 1];
    }
  }
}
