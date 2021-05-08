/**
 * Added one to last item of array
 * Eg-
 * Input           Output
 * [1, 2, 3]    -> [1, 2, 4]
 * [1, 2, 9]    -> [1, 3, 0]
 * [9, 9, 9]    -> [1, 0, 0]
 * [1, 2, 3, 4] -> [1, 2, 3, 5]
 */

function add_one(arr) {
  let carry = 0;
  let output = [...arr];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (carry === 1) {
      output[i] = arr[i] + 1;
      carry = 0;
    }

    if ((arr[i] + 1) % 10 === 0) {
      carry = 1;
      output[i] = 0;
    } else {
      output[i] = arr[i] + 1;
      carry = 0;
      break;
    }
  }

  if (carry === 1) {
    output.unshift(1);
  }

  return output;
}

module.exports = add_one;
