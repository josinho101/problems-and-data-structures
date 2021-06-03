const longestPalindrome = require("./index");

test("Should get 7", () => {
  const input = "abccccdd";
  const expected = 7;

  const result = longestPalindrome(input);

  expect(result).toEqual(expected);
});

test("Should get 1", () => {
  const input = "a";
  const expected = 1;

  const result = longestPalindrome(input);

  expect(result).toEqual(expected);
});

test("Should get 2", () => {
  const input = "aa";
  const expected = 2;

  const result = longestPalindrome(input);

  expect(result).toEqual(expected);
});
