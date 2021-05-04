// Given Preorder and Inorder traversals, Construct the Binary tree
// Eg: Inorder = [5, 10, 15] PreOrder = [10, 5, 15]
// Tree          10
//             /    \
//            5      15

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeGenerator {
  fromPreorder(inorder, preorder) {}

  fromPostorder(inorder, postorder) {}
}

module.exports = { TreeGenerator: TreeGenerator, Node: Node };
