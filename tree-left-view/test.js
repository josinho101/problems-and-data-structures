const Node = require("./index").Node;
const TreeLeftView = require("./index").TreeLeftView;

var arraysMatch = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

test("Verify left view 1", () => {
  const tree = new Node(4);
  tree.left = new Node(5);
  tree.right = new Node(2);
  tree.left.right = new Node(7);

  const expected = [4, 5, 7];

  const treeView = new TreeLeftView();
  const leftView = treeView.getView(tree);
  const areEqual = arraysMatch(expected, leftView);

  expect(areEqual).toEqual(true);
});

test("Verify left view 2", () => {
  const tree = new Node(10);
  tree.right = new Node(7);
  tree.right.left = new Node(6);
  tree.right.right = new Node(3);

  const expected = [10, 7, 6];

  const treeView = new TreeLeftView();
  const leftView = treeView.getView(tree);
  const areEqual = arraysMatch(expected, leftView);

  expect(areEqual).toEqual(true);
});
