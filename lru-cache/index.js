/**
 * Design a data structure that follows the constraints of a Least Recently
 * Used (LRU) cache.
 *
 * LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * int get(int key) Return the value of the key if the key exists, otherwise
 * return -1. void put(int key, int value) Update the value of the key if the
 * key exists. Otherwise, add the key-value pair to the cache. If the number
 * of keys exceeds the capacity from this operation, evict the least recently
 * used key.
 *
 * Follow up:
 * Could you do get and put in O(1) time complexity?
 */

class LruCache {
  constructor(capacity) {
    this.map = {};
    this.length = 0;
    this.capacity = capacity;

    this.head = new Node("head", "head");
    this.tail = new Node("tail", "tail");

    this._connect(this.head, this.tail);
  }

  get = (key) => {
    const node = this.map[key];
    if (node) {
      this._removeLast();
      this._moveToHead(node);
      return node.val;
    }

    return -1;
  };

  put = (key, value) => {
    const node = this.map[key];
    if (node) {
      node.val = value;
      this._moveToHead(node);
    } else {
      if (this.length === this.capacity) {
        delete this.map[this.tail.prev.key];
        this._removeLast();
      } else {
        this.length++;
      }

      const newNode = new Node(key, value);
      this._addToHead(newNode);
      this.map[key] = newNode;
    }
  };

  _addToHead = (node) => {
    this._connect(node, this.head.next);
    this._connect(this.head, node);
  };

  _moveToHead = (node) => {
    this._connect(node.prev, node.next);
    this._connect(node, this.head.next);
    this._connect(this.head, node);
  };

  _removeLast = () => {
    const last = this.tail.prev;
    this._connect(last.prev, this.tail);
  };

  _connect = (a, b) => {
    a.next = b;
    b.prev = a;
  };
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports = LruCache;
