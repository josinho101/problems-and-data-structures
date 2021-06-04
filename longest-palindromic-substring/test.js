const longestPalindrome = require("./index");

test("Should get bab as palindromic substring", () => {
  const input = "babad";
  const expected = "bab";

  const result = longestPalindrome(input);

  expect(result).toEqual(expected);
});
