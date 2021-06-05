const Node = require("./index");

test("Can insert properly", () => {
  const node = new Node(10);
  node.insert(7);
  node.insert(3);
  node.insert(8);
  node.insert(15);
  node.insert(11);
  node.insert(16);

  expect(node.data).toEqual(10);
  expect(node.left.data).toEqual(7);
  expect(node.left.left.data).toEqual(3);
  expect(node.left.right.data).toEqual(8);
  expect(node.right.data).toEqual(15);
  expect(node.right.left.data).toEqual(11);
  expect(node.right.right.data).toEqual(16);
});

test("Preorder traversal", () => {
  const node = new Node(10);
  node.insert(7);
  node.insert(3);
  node.insert(8);
  node.insert(15);
  node.insert(11);
  node.insert(16);

  const preorder = [10, 7, 3, 8, 15, 11, 16];
  expect(node.getPreorder()).toEqual(preorder);
});

test("Inorder traversal", () => {
  const node = new Node(10);
  node.insert(7);
  node.insert(3);
  node.insert(8);
  node.insert(15);
  node.insert(11);
  node.insert(16);

  const inorder = [3, 7, 8, 10, 11, 15, 16];
  expect(node.getInorder()).toEqual(inorder);
});

test("Postorder traversal", () => {
  const node = new Node(10);
  node.insert(7);
  node.insert(3);
  node.insert(8);
  node.insert(15);
  node.insert(11);
  node.insert(16);

  const postorder = [3, 8, 7, 11, 16, 15, 10];
  expect(node.getPostorder()).toEqual(postorder);
});
