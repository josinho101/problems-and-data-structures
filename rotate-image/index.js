/**
 * You are given an nxn 2D matrix that represents an image. Rotate the image
 * by 90 degrees (clockwise).
 *  Input = [[1, 2, 3],  Output = [[7, 4, 1],
             [4, 5, 6],            [8, 5, 2],
             [7, 8, 9]]            [9, 6, 3]]
             
             
 */

const rotateImage90 = (input) => {
  const length = input.length;
  const maxIndex = length - 1;
  const result = Array.from(Array(length), () => new Array(length).fill(0));

  for (let i = 0; i <= maxIndex; i++) {
    for (let j = 0; j <= maxIndex; j++) {
      result[j][maxIndex - i] = input[i][j];
    }
  }

  return result;
};

module.exports = rotateImage90;
