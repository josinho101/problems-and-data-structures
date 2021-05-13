const findKSum = require("./index");

test("Should return null if k is greater than array length", () => {
  const input = [1, 2, 3, 4];
  const k = 5;

  const result = findKSum(input, 0, k);
  expect(result).toEqual(null);
});

test("4 sum", () => {
  const input = [1, 2, -2, 3, -1, 0];
  const k = 4;
  const target = 0;

  const result = findKSum(input, target, k);

  expect(result).not.toEqual(null);
  expect(result.length).toEqual(2);

  const first = result[0];
  const sum1 = first[0] + first[1] + first[2] + first[3];
  expect(sum1).toEqual(target);

  const second = result[1];
  const sum2 = second[0] + second[1] + second[2] + second[3];
  expect(sum2).toEqual(target);
});

test("3 sum", () => {
  const input = [1, 2, -2, 3, -1, 0];
  const k = 3;
  const target = 0;

  const result = findKSum(input, target, k);

  expect(result).not.toEqual(null);
  expect(result.length).toEqual(3);

  const first = result[0];
  const sum1 = first[0] + first[1] + first[2];
  expect(sum1).toEqual(target);

  const second = result[1];
  const sum2 = second[0] + second[1] + second[2];
  expect(sum2).toEqual(target);

  const third = result[2];
  const sum3 = third[0] + third[1] + third[2];
  expect(sum3).toEqual(target);
});

test("2 sum", () => {
  const input = [1, 2, -2, 3, -1, 0];
  const k = 2;
  const target = 0;

  const result = findKSum(input, target, k);

  expect(result).not.toEqual(null);
  expect(result.length).toEqual(2);

  const first = result[0];
  const sum1 = first[0] + first[1];
  expect(sum1).toEqual(target);

  const second = result[1];
  const sum2 = second[0] + second[1];
  expect(sum2).toEqual(target);
});
