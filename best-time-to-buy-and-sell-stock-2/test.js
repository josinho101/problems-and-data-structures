const maxProfit = require("./index");

test("should get 7 as profit", () => {
  const input = [7, 1, 5, 3, 6, 4];
  const expected = 7;

  const result = maxProfit(input);

  expect(result).toEqual(expected);
});

test("should get 4 as profit", () => {
  const input = [1, 2, 3, 4, 5];
  const expected = 4;

  const result = maxProfit(input);

  expect(result).toEqual(expected);
});
