/**
 * You are given an array of k linked-lists lists, each linked-list
 * is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Eg:
 *
 * Input: lists = [[1,4,5],[1,3,4],[2,6]], Output: [1,1,2,3,4,4,5,6]
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKLists = function (lists) {
  const listLength = lists.length;
  const mid = Math.ceil(listLength / 2);

  if (listLength === 0) {
    return null;
  }

  if (listLength === 1) {
    return lists[0];
  }

  const leftArray = lists.slice(0, mid);
  const rightArray = lists.slice(mid, listLength);

  const left = mergeKLists(leftArray);
  const right = mergeKLists(rightArray);

  return merge2Lists(left, right);
};

var merge2Lists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }

  if (!l1 && l2) {
    return l2;
  }

  if (l1 && !l2) {
    return l1;
  }

  let list1 = l1;
  let list2 = l2;
  let head = new ListNode(0);
  let root = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      head.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    head = head.next;
  }

  if (list1) {
    head.next = list1;
  }

  if (list2) {
    head.next = list2;
  }

  return root.next;
};

module.exports = { ListNode, mergeKLists };
