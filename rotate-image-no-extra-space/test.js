const rotate = require("./index");

test("Rotate 3 X 3 image matrix", () => {
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

  const result = rotate(input);
  expect(expected).toEqual(result);
});

test("Rotate 4 X 4 image matrix", () => {
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

  const result = rotate(input);
  expect(expected).toEqual(result);
});
