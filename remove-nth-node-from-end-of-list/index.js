/**
 * Given the head of a linked list, remove the nth node from the
 * end of the list and return its head.
 *
 * Could you do this in one pass?
 *
 * Eg:
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */

var removeNthFromEnd = function (head, n) {
  if (!head) {
    return null;
  }

  let first = head;
  let second = head;
  let gap = 0;

  while (n--) {
    first = first.next;
  }

  if (!first) {
    return head.next;
  }

  while (first.next) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = { removeNthFromEnd, ListNode };
