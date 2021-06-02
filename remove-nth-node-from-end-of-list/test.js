const ListNode = require("./index").ListNode;
const removeNthFromEnd = require("./index").removeNthFromEnd;

test("Remove nth node from list", () => {
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = new ListNode(5);

  const result = removeNthFromEnd(list, 2);

  expect(result.val).toEqual(1);
  expect(result.next.val).toEqual(2);
  expect(result.next.next.val).toEqual(3);
  expect(result.next.next.next.val).toEqual(5);
});
