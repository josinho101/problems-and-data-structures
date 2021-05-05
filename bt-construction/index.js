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
  fromPreorder(inorder, preorder, tree = null) {
    if (preorder.length === 0 || inorder.length === 0) {
      return null;
    }

    let root = null;

    // tree will be null only when we start iteration
    if (tree === null) {
      root = preorder[0];
    } else {
      // find which element from inorder will be first in preorder
      for (let i = 0; i <= preorder.length; i++) {
        if (inorder.includes(preorder[i])) {
          root = preorder[i];
          break;
        }
      }
    }

    const node = new Node(root);
    const index = inorder.indexOf(root);

    const leftItems = inorder.slice(0, index);
    node.left = this.fromPreorder(leftItems, preorder, node);

    const rightItems = inorder.slice(index + 1, inorder.length);
    node.right = this.fromPreorder(rightItems, preorder, node);

    return node;
  }

  fromPostorder(inorder, postorder) {}
}

module.exports = { TreeGenerator: TreeGenerator, Node: Node };
