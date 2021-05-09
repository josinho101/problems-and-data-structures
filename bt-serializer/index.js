/**
 * Construct an algorithm that serialize and deserialize a binary tree.
 *
 * In computing, serialization is the process of translating a data structure or
 * object state into a format that can be stored or transmitted and reconstructed later.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const SPLITTER = ",";
const EMPTY_NODE = "EN";

class Serializer {
  serialize(root) {
    if (root === null) {
      return null;
    }

    const data = this.buildString(root);
    return data;
  }

  buildString(node, data = "") {
    if (node === null) {
      data = data.concat(EMPTY_NODE).concat(SPLITTER);
    } else {
      data = data.concat(node.data).concat(SPLITTER);
      data = this.buildString(node.left, data);
      data = this.buildString(node.right, data);
    }

    return data;
  }

  deserialize(data) {
    // split data using SPLITTER and remove last empty item
    const arr = data.split(SPLITTER);
    arr.splice(arr.length - 1, 1);

    const tree = this.buildTree(arr);
    return tree;
  }

  buildTree(array) {
    if (array.length <= 0) {
      return;
    }

    const data = array.shift();
    if (data === EMPTY_NODE) {
      return;
    } else {
      const node = new Node(+data);
      node.left = this.buildTree(array);
      node.right = this.buildTree(array);
      return node;
    }
  }
}

module.exports = { Serializer, Node };
