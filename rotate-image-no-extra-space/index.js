/**
 * You are given an n x n matrix representing an image.
 * Rotate the image by 90 degrees (clockwise)
 *
 * Note: You have to rotate the image in-place, which means you have to modify the
 * input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * 
 * Eg-
 *  Input = [[1, 2, 3],  Output = [[7, 4, 1],
             [4, 5, 6],            [8, 5, 2],
             [7, 8, 9]]            [9, 6, 3]]
 */

const rotate = (input) => {
  // transpose the input (row-> column/ colum->row)
  const maxLimit = input.length - 1;
  for (let i = 0; i <= maxLimit; i++) {
    for (let j = i; j <= maxLimit; j++) {
      const temp = input[i][j];
      input[i][j] = input[j][i];
      input[j][i] = temp;
    }
  }

  // horizontal flip
  for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j < maxLimit / 2; j++) {
      const temp = input[i][j];
      input[i][j] = input[i][maxLimit - j];
      input[i][maxLimit - j] = temp;
    }
  }

  return input;
};

module.exports = rotate;
