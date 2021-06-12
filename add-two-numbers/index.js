/**
 * Ref - https://leetcode.com/problems/add-two-numbers/
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a
 * linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Eg - Input: l1 = [2,4,3], l2 = [5,6,4], Output: [7,0,8]
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(0);
  const head = result;

  let list1 = l1;
  let list2 = l2;

  while (list1 || list2) {
    let val1 = 0;
    let val2 = 0;
    let sum = 0;

    if (list1) {
      val1 = list1.val;
    }

    if (list2) {
      val2 = list2.val;
    }

    sum = val1 + val2 + carry;
    if (sum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }

    result.next = new ListNode(sum % 10);
    result = result.next;

    if (list1) {
      list1 = list1.next;
    }

    if (list2) {
      list2 = list2.next;
    }
  }

  if (carry === 1) {
    result.next = new ListNode(carry);
  }

  return head.next;
};

module.exports = addTwoNumbers;
