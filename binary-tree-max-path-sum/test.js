const Node = require("./index").Node;
const BinaryTreeUtil = require("./index").BinaryTreeUtil;

test("Find max path sum", () => {
  const node = new Node(-10);
  node.left = new Node(9);
  node.right = new Node(20);
  node.right.left = new Node(15);
  node.right.right = new Node(7);

  const util = new BinaryTreeUtil();
  const pathSum = util.findMaxPathSum(node);

  console.log(pathSum);
});
