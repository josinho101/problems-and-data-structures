/**
 * Ref - https://www.algoexpert.io/questions/Run-Length%20Encoding
 * eg - Input - AAAAAAAAAAAABBCCCDDD, Output - 9A3A2B3C3D
 */

function runLengthEncoding(string) {
  let encoding = "";
  let currLen = 1;
  let maxLength = string.length;

  for (let i = 1; i < maxLength; i++) {
    const curr = string[i];
    const prev = string[i - 1];

    if (curr !== prev || currLen === 9) {
      encoding += currLen + prev;
      currLen = 0;
    }

    currLen++;
  }

  encoding += currLen + string[maxLength - 1];

  return encoding;
}
