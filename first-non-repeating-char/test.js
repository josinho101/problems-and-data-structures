const firstNonRepeatingChar = require("./index");

test("first non repeating char 1", () => {
  const input = "aaabccde";
  const expected = "b";

  const result = firstNonRepeatingChar(input);
  expect(result).toEqual(expected);
});

test("first non repeating char 2", () => {
  const input = "aaabccbd";
  const expected = "d";

  const result = firstNonRepeatingChar(input);
  expect(result).toEqual(expected);
});
