const ListNode = require("./index").ListNode;
const mergeTwoLists = require("./index").mergeTwoLists;

test("Merge lists", () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(4);

  const l2 = new ListNode(1);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(4);

  const newList = mergeTwoLists(l1, l2);

  expect(newList.val).toEqual(1);
  expect(newList.next.val).toEqual(1);
  expect(newList.next.next.val).toEqual(2);
  expect(newList.next.next.next.val).toEqual(3);
  expect(newList.next.next.next.next.val).toEqual(4);
  expect(newList.next.next.next.next.next.val).toEqual(4);
});
