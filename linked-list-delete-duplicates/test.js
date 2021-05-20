const ListNode = require("./index").ListNode;
const removeDuplicates = require("./index").removeDuplicates;

test("remove duplicates 1", () => {
  const root = new ListNode(1);
  root.next = new ListNode(1);
  root.next.next = new ListNode(2);

  const result = removeDuplicates(root);

  expect(result.data).toEqual(1);
  expect(result.next.data).toEqual(2);
});

test("remove duplicates 2", () => {
  const root = new ListNode(1);
  root.next = new ListNode(1);
  root.next.next = new ListNode(2);
  root.next.next.next = new ListNode(3);
  root.next.next.next.next = new ListNode(3);

  const result = removeDuplicates(root);

  expect(result.data).toEqual(1);
  expect(result.next.data).toEqual(2);
  expect(result.next.next.data).toEqual(3);
});
