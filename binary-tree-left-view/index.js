// Given a tree print left view
/* Eg

                10
              /    \   
             5      2
           /   \   /  \
          4     7 3    8

        Left view - [10, 5, 4]


                 4
               /   \   
              5     2
               \     
                7     

        Left view - [4, 5, 7]
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeLeftView {
  constructor() {
    this.levelAdded = 0;
  }

  getView(node, output = [], level = 1) {
    if (node === null) {
      return;
    }

    if (this.levelAdded < level) {
      this.levelAdded = level;
      output.push(node.data);
    }

    this.getView(node.left, output, level + 1);
    this.getView(node.right, output, level + 1);

    return output;
  }
}

module.exports = { Node: Node, TreeLeftView: TreeLeftView };
