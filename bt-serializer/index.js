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
  serialize(tree) {
    if (tree === null) {
      return;
    }

    const data = this._buildString(tree);
    return data;
  }

  _buildString(node) {
    if (node === null) {
      return EMPTY_NODE.concat(SPLITTER);
    }

    let data = node.data + SPLITTER;
    data = data.concat(this._buildString(node.left));
    data = data.concat(this._buildString(node.right));

    return data;
  }

  deserialize(data) {
    // split data and remove empty entry at the end.
    const arr = data.split(SPLITTER);
    arr.splice(arr.length - 1, 1);

    const tree = this._buildTree(arr);
    return tree;
  }

  _buildTree(array) {
    if (array.length <= 0) {
      return;
    }

    const data = array.shift();
    if (data !== EMPTY_NODE) {
      const node = new Node(+data);
      node.left = this._buildTree(array);
      node.right = this._buildTree(array);

      return node;
    }
  }
}

module.exports = { Serializer, Node };
