const ListNode = require("./index").ListNode;
const mergeKLists = require("./index").mergeKLists;

test("merge 3 sorted linked lists", () => {
  const list1 = new ListNode(1);
  list1.next = new ListNode(4);
  list1.next.next = new ListNode(5);

  const list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);

  const list3 = new ListNode(2);
  list3.next = new ListNode(6);

  const result = mergeKLists([list1, list2, list3]);

  expect(result.val).toEqual(1);
  expect(result.next.val).toEqual(1);
  expect(result.next.next.val).toEqual(2);
  expect(result.next.next.next.val).toEqual(3);
  expect(result.next.next.next.next.val).toEqual(4);
  expect(result.next.next.next.next.next.val).toEqual(4);
  expect(result.next.next.next.next.next.next.val).toEqual(5);
  expect(result.next.next.next.next.next.next.next.val).toEqual(6);
});
