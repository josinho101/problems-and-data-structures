/**
 * Given an array of nums of n integers where n > 1, return an array output such
 * that output[i] is qual to the product of all elements of nums expect nums[i]
 *
 * Eg- Input = [1, 2, 3, 4] Output = [24, 12, 8, 6]
 */

const productExceptSelf = (array) => {
  const itemCount = array.length;
  const leftProduct = new Array(itemCount).fill(0);
  const rightProduct = new Array(itemCount).fill(0);
  const product = new Array(itemCount).fill(0);

  leftProduct[0] = 1;
  rightProduct[itemCount - 1] = 1;

  for (let i = 1; i <= itemCount - 1; i++) {
    leftProduct[i] = leftProduct[i - 1] * array[i - 1];
  }

  for (let i = itemCount - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * array[i + 1];
  }

  for (i = 0; i <= itemCount - 1; i++) {
    product[i] = leftProduct[i] * rightProduct[i];
  }

  return product;
};

module.exports = productExceptSelf;
