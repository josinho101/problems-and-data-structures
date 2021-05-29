/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Eg
 * Input: l1 = [1,2,4], l2 = [1,3,4], Output: [1,1,2,3,4,4]
 * Input: l1 = [], l2 = [0], Output: [0]
 */

const mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }

  if (!l1 && l2) {
    return l2;
  }

  if (l1 && !l2) {
    return l1;
  }

  let newList = new ListNode(0);
  let head = newList;

  let currentl1 = l1;
  let currentl2 = l2;

  while (currentl1 && currentl2) {
    if (currentl1.val < currentl2.val) {
      newList.next = new ListNode(currentl1.val);
      currentl1 = currentl1.next;
    } else {
      newList.next = new ListNode(currentl2.val);
      currentl2 = currentl2.next;
    }
    newList = newList.next;
  }

  if (currentl1) {
    newList.next = currentl1;
  }

  if (currentl2) {
    newList.next = currentl2;
  }

  return head.next;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = { mergeTwoLists, ListNode };
