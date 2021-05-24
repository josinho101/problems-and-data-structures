const lengthOfLongestSubstring = require("./index");

test("Longest substring without repeating chars 1", () => {
  const input = "abcabcbb";
  const expected = 3;

  const result = lengthOfLongestSubstring(input);
  expect(result).toEqual(expected);
});

test("Longest substring without repeating chars 2", () => {
  const input = "bbbbb";
  const expected = 1;

  const result = lengthOfLongestSubstring(input);
  expect(result).toEqual(expected);
});

test("Longest substring without repeating chars 3", () => {
  const input = "pwwkew";
  const expected = 3;

  const result = lengthOfLongestSubstring(input);
  expect(result).toEqual(expected);
});
