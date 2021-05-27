const isValid = require("./index");

test("Should be valid parentheses - 1", () => {
  const input = "()";
  const expected = true;

  const result = isValid(input);
  expect(result).toEqual(expected);
});

test("Should be valid parentheses - 2", () => {
  const input = "{[]}";
  const expected = true;

  const result = isValid(input);
  expect(result).toEqual(expected);
});

test("Should not be valid parentheses", () => {
  const input = "([)]";
  const expected = false;

  const result = isValid(input);
  expect(result).toEqual(expected);
});
