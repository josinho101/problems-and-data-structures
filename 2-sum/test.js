const TwoSum = require("./index");

test("Two sum by brute force", () => {
  const nums = [11, 15, 2, 7];
  const target = 9;
  const expects = [2, 3];

  const twoSum = new TwoSum();
  const indexes = twoSum.findByBruteForce(nums, target);

  expect(indexes[0]).toEqual(expects[0]);
  expect(indexes[1]).toEqual(expects[1]);
});

test("Two sum by two pointer", () => {
  const nums = [2, 7, 15, 11];
  const target = 9;
  const expects = [0, 1];

  const twoSum = new TwoSum();
  const indexes = twoSum.findByTwoPointer(nums, target);

  expect(indexes[0]).toEqual(expects[0]);
  expect(indexes[1]).toEqual(expects[1]);
});

test("Two sum using hash table", () => {
  const nums = [7, 15, 11, 2];
  const target = 9;
  const expects = [0, 3];

  const twoSum = new TwoSum();
  const indexes = twoSum.findByHashTable(nums, target);

  expect(indexes[0]).toEqual(expects[0]);
  expect(indexes[1]).toEqual(expects[1]);
});
