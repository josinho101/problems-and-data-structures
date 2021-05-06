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

  fromPostorder(inorder, postorder, tree = null) {
    if (inorder.length === 0 || postorder.length === 0) {
      return null;
    }

    let root = null;

    if (tree === null) {
      root = postorder[postorder.length - 1];
    } else {
      // iterate from right in post order and
      // find which element from inorder is comming first
      for (let i = postorder.length; i >= 0; i--) {
        if (inorder.includes(postorder[i])) {
          root = postorder[i];
          break;
        }
      }
    }

    const node = new Node(root);
    const rootIndex = inorder.indexOf(root);

    const leftItems = inorder.slice(0, rootIndex);
    node.left = this.fromPostorder(leftItems, postorder, node);

    const rightItems = inorder.slice(rootIndex + 1, inorder.length);
    node.right = this.fromPostorder(rightItems, postorder, node);

    return node;
  }
}

module.exports = TreeGenerator;
