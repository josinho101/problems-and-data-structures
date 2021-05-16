const productExceptSelf = require("./index");

test("productExceptSelf - 1", () => {
  const input = [1, 2, 3, 4];
  const output = [24, 12, 8, 6];

  const result = productExceptSelf(input);
  expect(result).toEqual(output);
});

test("productExceptSelf - 2", () => {
  const input = [1, 4, 5, 2];
  const output = [40, 10, 8, 20];

  const result = productExceptSelf(input);
  expect(result).toEqual(output);
});
