const findMedianSortedArrays = require("./index");

test("median should be 0.00000", () => {
  const num1 = [0, 0];
  const num2 = [0, 0];
  const expected = 0;

  const result = findMedianSortedArrays(num1, num2);

  expect(result).toEqual(expected);
});

test("median should be 2.5", () => {
  const num1 = [1, 2];
  const num2 = [3, 4];
  const expected = 2.5;

  const result = findMedianSortedArrays(num1, num2);

  expect(result).toEqual(expected);
});

test("median should be 2", () => {
  const num1 = [1, 2];
  const num2 = [2];
  const expected = 2;

  const result = findMedianSortedArrays(num1, num2);

  expect(result).toEqual(expected);
});
