const maxProfit = require("./index");

test("should get 5 as profit", () => {
  const input = [7, 1, 5, 3, 6, 4];
  const expected = 5;

  const result = maxProfit(input);

  expect(result).toEqual(expected);
});

test("should get 0 as profit", () => {
  const input = [7, 6, 4, 3, 1];
  const expected = 0;

  const result = maxProfit(input);

  expect(result).toEqual(expected);
});
