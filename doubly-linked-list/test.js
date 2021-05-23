const DoublyLinkedList = require("./index");

test("should add element to head", () => {
  const list = new DoublyLinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  expect(list.getHead().val).toEqual(3);
  expect(list.getTail().val).toEqual(1);
});

test("should add element from tail", () => {
  const list = new DoublyLinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);

  expect(list.getHead().val).toEqual(4);
  expect(list.getTail().val).toEqual(1);

  list.remove();
  list.remove();

  expect(list.getHead().val).toEqual(4);
  expect(list.getTail().val).toEqual(3);
});

test("should move node to head", () => {
  const list = new DoublyLinkedList();

  // add 3 items
  list.add(1);
  list.add(2);
  list.add(3);

  //head will be 3
  const head = list.getHead();
  // move head.next ie 2 to head
  list.moveToHead(head.next);

  // so now list will be come 2,3,1
  expect(list.getHead().val).toEqual(2);

  // get third item ie 1 and move to head
  const third = list.getHead().next.next;
  list.moveToHead(third);

  // now list will be 1,2,3
  expect(list.getHead().val).toEqual(1);
  expect(list.getHead().next.val).toEqual(2);
  expect(list.getHead().next.next.val).toEqual(3);

  // check tail
  expect(list.getTail().val).toEqual(3);

  // remove item from tail
  list.remove();
  expect(list.getTail().val).toEqual(2);

  // remove item from tail
  list.remove();
  expect(list.getTail().val).toEqual(1);
});
