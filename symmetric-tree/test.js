const TreeNode = require("./index").TreeNode;
const isSymmetric = require("./index").isSymmetric;

test("Should not be symmetric", () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(2);
  tree.left.left = new TreeNode(3);
  tree.left.right = new TreeNode(5);
  tree.right.left = new TreeNode(4);
  tree.right.right = new TreeNode(3);

  const expected = false;

  const result = isSymmetric(tree);

  expect(result).toEqual(expected);
});

test("Should be symmetric", () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(2);
  tree.left.left = new TreeNode(3);
  tree.left.right = new TreeNode(4);
  tree.right.left = new TreeNode(4);
  tree.right.right = new TreeNode(3);

  const expected = true;

  const result = isSymmetric(tree);

  expect(result).toEqual(expected);
});
