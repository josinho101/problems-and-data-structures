const TreeNode = require("./index").TreeNode;
const rightSideView = require("./index").rightSideView;

test("Verify right view 1", () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.right = new TreeNode(5);
  tree.right.right = new TreeNode(4);

  const expected = [1, 3, 4];

  const rightView = rightSideView(tree);

  expect(rightView).toEqual(expected);
});
