const findDuplicates = require("./index");

test("Find duplicate elements - 1", () => {
  const input = [4, 3, 2, 7, 8, 2, 3, 1];
  const expected = [2, 3];

  const result = findDuplicates(input);
  expect(expected).toEqual(result);
});

test("Find duplicate elements - 2", () => {
  const input = [4, 3, 2, 7, 8, 8, 2, 3, 1];
  const expected = [8, 2, 3];

  const result = findDuplicates(input);
  expect(expected).toEqual(result);
});
