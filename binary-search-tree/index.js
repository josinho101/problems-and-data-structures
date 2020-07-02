// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.left && this.data > data) {
      // if left node is already defined and data passed is less than current node data
      this.left.insert(data);
    } else if (this.right && this.data < data) {
      // if right node is already defined and data passed is greater than current node data
      this.right.insert(data);
    } else if (this.data > data) {
      // if left node is null and data passed is less than current node data
      this.left = new Node(data);
    } else if (this.data < data) {
      // if right node is null and data passed is less than current node data
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.left && data < this.data) {
      return this.left.contains(data);
    } else if (this.right && data > this.data) {
      return this.right.contains(data);
    }

    return null;
  }
}

module.exports = Node;
