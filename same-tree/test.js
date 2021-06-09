const TreeNode = require("./index").TreeNode;
const isSameTree = require("./index").isSameTree;

test("Should be same trees", () => {
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);

  const tree2 = new TreeNode(1);
  tree2.left = new TreeNode(2);
  tree2.right = new TreeNode(3);

  const result = isSameTree(tree1, tree2);
  expect(result).toEqual(true);
});

test("Should not be same trees", () => {
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(1);

  const tree2 = new TreeNode(1);
  tree2.left = new TreeNode(1);
  tree2.right = new TreeNode(2);

  const result = isSameTree(tree1, tree2);
  expect(result).toEqual(false);
});
