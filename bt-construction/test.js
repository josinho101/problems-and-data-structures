const Node = require("./index").Node;
const TreeGenerator = require("./index").TreeGenerator;

test("Binary tree form Preorder & Inorder", () => {
  const generator = new TreeGenerator();

  const inorder = [3, 7, 8, 10, 11, 15, 16];
  const preOrder = [10, 7, 3, 8, 15, 11, 16];
  const node = generator.fromPreorder(inorder, preOrder);

  expect(node.data).toEqual(10);
  expect(node.left.data).toEqual(7);
  expect(node.right.data).toEqual(15);
  expect(node.left.left.data).toEqual(3);
  expect(node.left.right.data).toEqual(8);
  expect(node.right.left.data).toEqual(11);
  expect(node.right.right.data).toEqual(16);
  expect(node.right.left.left).toEqual(null);
  expect(node.right.left.right).toEqual(null);
});
