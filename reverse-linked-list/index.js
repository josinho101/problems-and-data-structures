/**
 * Ref - https://leetcode.com/problems/reverse-linked-list/
 * Given the head of a singly linked list, reverse the list, and return the 
 * reversed list.
 */

var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};