const maximumUnits = require("./index");

test("Max units should be 8", () => {
  const boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ];
  const truckSize = 4;

  const result = maximumUnits(boxTypes, truckSize);

  expect(result).toEqual(8);
});

test("Max units should be 91", () => {
  const boxTypes = [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ];
  const truckSize = 10;

  const result = maximumUnits(boxTypes, truckSize);

  expect(result).toEqual(91);
});
