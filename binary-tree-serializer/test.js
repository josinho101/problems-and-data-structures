const Node = require("./index").Node;
const Serializer = require("./index").Serializer;

test("Serialize binary tree 1", () => {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.right.left = new Node(4);
  root.right.right = new Node(5);

  const serializer = new Serializer();
  const data = serializer.serialize(root);

  const tree = serializer.deserialize(data);

  expect(root.data).toEqual(tree.data);
  expect(root.left.data).toEqual(tree.left.data);
  expect(root.right.data).toEqual(tree.right.data);
  expect(root.right.left.data).toEqual(tree.right.left.data);
  expect(root.right.right.data).toEqual(tree.right.right.data);
});

test("Serialize binary tree 2", () => {
  const root = new Node(10);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(1);
  root.right.right = new Node(5);

  const serializer = new Serializer();
  const data = serializer.serialize(root);

  const tree = serializer.deserialize(data);

  expect(root.data).toEqual(tree.data);
  expect(root.left.data).toEqual(tree.left.data);
  expect(root.right.data).toEqual(tree.right.data);
  expect(root.left.left.data).toEqual(tree.left.left.data);
  expect(root.right.right.data).toEqual(tree.right.right.data);
});
