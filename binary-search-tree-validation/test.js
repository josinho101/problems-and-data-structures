const TreeNode = require("./index").TreeNode;
const isValidBST = require("./index").isValidBST;

test("Should be a valid BST", () => {
  const node = new TreeNode(2);
  node.left = new TreeNode(1);
  node.right = new TreeNode(3);

  const result = isValidBST(node);

  expect(result).toEqual(true);
});

test("Should be a invalid BST", () => {
  const node = new TreeNode(5);
  node.left = new TreeNode(1);
  node.right = new TreeNode(4);
  node.right.left = new TreeNode(3);
  node.right.right = new TreeNode(6);

  const result = isValidBST(node);

  expect(result).toEqual(false);
});
