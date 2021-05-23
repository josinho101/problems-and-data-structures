/**
 * Create a Doubly linked list, where I can add elements to head and tail.
 *
 * Should have an "add" method which adds element to head and "remove" method
 * which remove element from end of list.
 *
 * Also should have a "getHead" and "getTail" methods which return head and tail
 * of list respectively.
 *
 * Create a nethod "moveToHead(node)" which move element to head to list
 */

class DoublyLinkedList {
  constructor() {
    this.head = new Node("head");
    this.tail = new Node("tail");
    this._connect(this.head, this.tail);
  }

  _connect = (a, b) => {
    a.next = b;
    b.prev = a;
  };

  add = (value) => {
    const node = new Node(value);
    this._connect(node, this.head.next);
    this._connect(this.head, node);
  };

  remove = () => {
    const last = this.tail.prev;
    this._connect(last.prev, this.tail);
  };

  moveToHead = (node) => {
    this._connect(node.prev, node.next);
    this._connect(node, this.head.next);
    this._connect(this.head, node);
  };

  getHead = () => {
    return this.head.next;
  };

  getTail = () => {
    return this.tail.prev;
  };
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports = DoublyLinkedList;
