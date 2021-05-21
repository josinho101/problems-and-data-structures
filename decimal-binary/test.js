const decimal2Binary = require("./index");

test("Decimal 25 to binary", () => {
  const input = 25;
  const expected = 11001;

  const result = decimal2Binary(input);
  expect(result).toEqual(expected);
});

test("Decimal 35 to binary", () => {
  const input = 35;
  const expected = 100011;

  const result = decimal2Binary(input);
  expect(result).toEqual(expected);
});
