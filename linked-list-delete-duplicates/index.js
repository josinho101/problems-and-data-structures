/**
 * Given a sorted linked list, delete all duplicates such that each element appear
 * only once.
 *
 * Eg-
 * Input = 1 -> 1 -> 2, Output = 1 -> 2
 * Input = 1 -> 1 -> 2 -> 3 -> 3, Output = 1 -> 2 -> 3
 */

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const removeDuplicates = (root) => {
  let node = root;
  while (node != null && node.next != null) {
    if (node.data === node.next.data) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return root;
};

module.exports = { ListNode, removeDuplicates };
