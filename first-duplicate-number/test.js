const findFirstDuplicate = require("./index");

test("Find first duplicate 1", () => {
  const input = [1, 5, 2, 3, 5];
  const expected = 5;

  const result = findFirstDuplicate(input);

  expect(result).toEqual(expected);
});

test("Find first duplicate 2", () => {
  const input = [4, 2, 0, 4, 1];
  const expected = 4;

  const result = findFirstDuplicate(input);

  expect(result).toEqual(expected);
});
