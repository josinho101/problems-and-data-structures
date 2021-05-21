/**
 * Given a decimal number, convert to binary
 *
 * Eg - Input = 25, Output = 11001
 */

const decimal2Binary = (input) => {
  let binary = "";
  while (input !== 0) {
    let reminder = input % 2;
    input = Math.floor(input / 2);
    binary = reminder + binary;
  }

  return +binary;
};

module.exports = decimal2Binary;
