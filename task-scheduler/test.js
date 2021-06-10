const leastInterval = require("./index");

test("should get 8 as interval", () => {
  const tasks = ["A", "A", "A", "B", "B", "B"];
  const n = 2;

  const result = leastInterval(tasks, n);
  expect(result).toEqual(8);
});

test("should get 8 as interval", () => {
  const tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"];
  const n = 2;

  const result = leastInterval(tasks, n);
  expect(result).toEqual(16);
});
