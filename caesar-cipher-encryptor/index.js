/**
 * Ref - https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor
 * Eg - Input - xyz, key = 2, Output - zab
 */

function caesarCipherEncryptor(string, key) {
  // Write your code here.
  console.log("z".charCodeAt());
  console.log(String.fromCharCode(99));
  const CHAR_CODE_Z = 122;
  const CHAR_CODE_A = 96;

  var cipherKey = function (char, key) {
    let shift = key % 26;

    let newKey =
      char.charCodeAt() + shift > CHAR_CODE_Z
        ? CHAR_CODE_A + (char.charCodeAt() + shift - CHAR_CODE_Z)
        : char.charCodeAt() + shift;

    return String.fromCharCode(newKey);
  };

  let newString = "";

  for (let c of string) {
    newString += cipherKey(c, key);
  }

  return newString;
}
