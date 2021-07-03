/**
 * DFS method, which takes in an empty array, traverses the tree
  using the Depth-first Search approach (specifically navigating the tree from
  left to right), stores all of the nodes' names in the input array, and returns
  it.
 */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    function dfs(node) {
      array.push(node.name);

      if (node.children) {
        for (let child of node.children) {
          dfs(child);
        }
      }
    }

    dfs(this);

    return array;
  }
}

module.exports = Node;
