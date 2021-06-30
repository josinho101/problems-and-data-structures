/**
 * Ref - https://leetcode.com/problems/reverse-linked-list-ii/
 * Given the head of a singly linked list and two integers left and right where
 *  left <= right, reverse the nodes of the list from position left to position
 *  right, and return the reversed list.
 */

var reverseBetween = function (head, left, right) {
  if (!head) {
    return null;
  }

  let prev = null;
  let current = head;

  while (left > 1) {
    prev = current;
    current = current.next;
    left--;
    right--;
  }

  let connection = prev;
  let tail = current;

  while (right > 0) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;

    right--;
  }

  if (connection) {
    connection.next = prev;
  } else {
    head = prev;
  }

  tail.next = current;

  return head;
};
