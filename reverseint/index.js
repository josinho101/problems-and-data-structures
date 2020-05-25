// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //convert to string
  const str = n.toString();
  // split reverse and join string
  const val = str.split("").reverse().join("");
  // convert back to int
  // math.sign return 1 if the number is +ve and -1 if number is -ve
  return parseInt(val) * Math.sign(n);
}

module.exports = reverseInt;
