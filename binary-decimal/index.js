/**
 * Given a binary value, convert to decimal
 *
 * Eg: Input = 1010, Output = 10
 */

const binary2Decimal = (input) => {
  const binary = input.toString();
  let exponent = 0;
  let decimal = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    if (+binary[i] !== 0) {
      decimal += Math.pow(2, exponent);
    }
    exponent++;
  }

  return decimal;
};

module.exports = binary2Decimal;
