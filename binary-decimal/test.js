const binary2Decimal = require("./index");

test("Binary 1010 to decimal", () => {
  const input = 1010;
  const expected = 10;

  const result = binary2Decimal(input);
  expect(result).toEqual(expected);
});

test("Binary 1010100 to decimal", () => {
  const input = 1010100;
  const expected = 84;

  const result = binary2Decimal(input);
  expect(result).toEqual(expected);
});
