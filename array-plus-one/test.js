const add_one = require("./index");

test("Add one to array [1, 2, 3]", () => {
  const input = [1, 2, 3];
  const output = add_one(input);

  const inputNumber = +input.join("") + 1;
  const outputNumber = +output.join("");

  expect(inputNumber).toEqual(outputNumber);
});

test("Add one to array [1, 2, 9]", () => {
  const input = [1, 2, 9];
  const output = add_one(input);

  const inputNumber = +input.join("") + 1;
  const outputNumber = +output.join("");

  expect(inputNumber).toEqual(outputNumber);
});

test("Add one to array [9, 9, 9]", () => {
  const input = [9, 9, 9];
  const output = add_one(input);

  const inputNumber = +input.join("") + 1;
  const outputNumber = +output.join("");

  expect(inputNumber).toEqual(outputNumber);
});

test("Add one to array [1, 2, 3, 9]", () => {
  const input = [1, 2, 3, 9];
  const output = add_one(input);

  const inputNumber = +input.join("") + 1;
  const outputNumber = +output.join("");

  expect(inputNumber).toEqual(outputNumber);
});
