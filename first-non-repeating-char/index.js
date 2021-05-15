/**
 * Given a string, find first non repeating character
 *
 * "aaaabcccdde" => b
 * "abcdabc" => d
 */

const firstNonRepeatingChar = (data) => {
  const map = {};
  for (let i = 0; i <= data.length - 1; i++) {
    const char = data[i];
    if (map[char] !== undefined) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i <= data.length - 1; i++) {
    if (map[data[i]] === 1) {
      return data[i];
    }
  }
};

module.exports = firstNonRepeatingChar;
