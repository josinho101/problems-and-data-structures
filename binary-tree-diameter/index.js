/**
 * Ref - https://www.algoexpert.io/questions/Binary%20Tree%20Diameter
 */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  function inorder(node) {
    if (!node) {
      return [0, 0]; // [diameter, height]
    }

    const [leftDia, leftHeight] = inorder(node.left);
    const [rightDia, rightHeight] = inorder(node.right);

    const height = Math.max(leftHeight, rightHeight);
    const diameter = Math.max(leftDia, rightDia, leftHeight + rightHeight);

    return [diameter, height + 1];
  }

  const result = inorder(tree);

  return result[0];
}
