const rotateImage90 = require("./index");

test("rotate image - 3X3", () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const expected = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];

  const result = rotateImage90(input);
  expect(result).toEqual(expected);
});

test("rotate image - 4X4", () => {
  const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  const expected = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
  ];

  const result = rotateImage90(input);
  expect(result).toEqual(expected);
});
