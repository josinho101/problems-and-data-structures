class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.left === null && this.data > data) {
      this.left = new Node(data);
    } else if (this.left && this.data > data) {
      this.left.insert(data);
    } else if (this.right === null && this.data < data) {
      this.right = new Node(data);
    } else if (this.right && this.data < data) {
      this.right.insert(data);
    }
  }

  getPreorder(arr = []) {
    if (!this.data) {
      return;
    }

    arr.push(this.data);
    if (this.left) {
      this.left.getPreorder(arr);
    }
    if (this.right) {
      this.right.getPreorder(arr);
    }

    return arr;
  }

  getInorder(arr = []) {
    if (!this.data) {
      return;
    }

    if (this.left) {
      this.left.getInorder(arr);
    }
    arr.push(this.data);
    if (this.right) {
      this.right.getInorder(arr);
    }

    return arr;
  }

  getPostorder(arr = []) {
    if (!this.data) {
      return;
    }

    if (this.left) {
      this.left.getPostorder(arr);
    }
    if (this.right) {
      this.right.getPostorder(arr);
    }
    arr.push(this.data);

    return arr;
  }
}

module.exports = Node;
