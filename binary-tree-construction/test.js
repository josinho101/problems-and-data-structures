const TreeGenerator = require("./index");

test("Binary tree form Preorder & Inorder", () => {
  const generator = new TreeGenerator();

  const inorder = [3, 7, 8, 10, 11, 15, 16];
  const preOrder = [10, 7, 3, 8, 15, 11, 16];
  const tree = generator.fromPreorder(inorder, preOrder);

  expect(tree.data).toEqual(10);
  expect(tree.left.data).toEqual(7);
  expect(tree.right.data).toEqual(15);
  expect(tree.left.left.data).toEqual(3);
  expect(tree.left.right.data).toEqual(8);
  expect(tree.right.left.data).toEqual(11);
  expect(tree.right.right.data).toEqual(16);
  expect(tree.right.left.left).toEqual(null);
  expect(tree.right.left.right).toEqual(null);
});

test("Binary tree form Postorder & Inorder", () => {
  const generator = new TreeGenerator();

  const inorder = [3, 7, 8, 10, 11, 15, 16];
  const postOrder = [3, 8, 7, 11, 16, 15, 10];
  const tree = generator.fromPostorder(inorder, postOrder);

  expect(tree.data).toEqual(10);
  expect(tree.left.data).toEqual(7);
  expect(tree.right.data).toEqual(15);
  expect(tree.left.left.data).toEqual(3);
  expect(tree.left.right.data).toEqual(8);
  expect(tree.right.left.data).toEqual(11);
  expect(tree.right.right.data).toEqual(16);
  expect(tree.right.left.left).toEqual(null);
  expect(tree.right.left.right).toEqual(null);
});
