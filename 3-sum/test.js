const ThreeSum = require("./index");

test("Find 3 sum - 1", () => {
  const input = [0, 1, 2, 3, 4, 5, 6];
  const target = 6;
  const output = [
    [0, 1, 5],
    [0, 2, 4],
    [1, 2, 3],
  ];

  const threeSum = new ThreeSum();
  const result = threeSum.find(input, target);

  // expected result
  // [ [ 0, 1, 5 ], [ 0, 2, 4 ], [ 1, 2, 3 ] ]

  expect(result.length).toEqual(output.length);

  expect(result[0][0]).toEqual(output[0][0]);
  expect(result[0][1]).toEqual(output[0][1]);
  expect(result[0][2]).toEqual(output[0][2]);

  expect(result[1][0]).toEqual(output[1][0]);
  expect(result[1][1]).toEqual(output[1][1]);
  expect(result[1][2]).toEqual(output[1][2]);

  expect(result[2][0]).toEqual(output[2][0]);
  expect(result[2][1]).toEqual(output[2][1]);
  expect(result[2][2]).toEqual(output[2][2]);
});

test("Find 3 sum - 2", () => {
  const input = [-2, -1, 0, 1, 2, 3, 4];
  const target = 0;
  const output = [
    [0, 1, 5],
    [0, 2, 4],
    [1, 2, 3],
  ];

  const threeSum = new ThreeSum();
  const result = threeSum.find(input, target);

  expect(result.length).toEqual(output.length);

  expect(result[0][0]).toEqual(output[0][0]);
  expect(result[0][1]).toEqual(output[0][1]);
  expect(result[0][2]).toEqual(output[0][2]);

  expect(result[1][0]).toEqual(output[1][0]);
  expect(result[1][1]).toEqual(output[1][1]);
  expect(result[1][2]).toEqual(output[1][2]);

  expect(result[2][0]).toEqual(output[2][0]);
  expect(result[2][1]).toEqual(output[2][1]);
  expect(result[2][2]).toEqual(output[2][2]);
});
