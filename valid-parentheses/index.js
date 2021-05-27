/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *      1. Open brackets must be closed by the same type of brackets.
 *      2. Open brackets must be closed in the correct order.
 *
 * Eg -
 *
 * Input: s = "()", Output: true
 * Input: s = "()[]{}", Output: true
 * Input: s = "([)]", Output: false
 */

var isValid = function (s) {
  const stack = [];

  for (let c of s) {
    if (c === "{" || c === "[" || c === "(") {
      stack.push(c);
    } else if (stack.length > 0) {
      const item = stack[stack.length - 1];
      if (
        (c === "}" && item === "{") ||
        (c === "]" && item === "[") ||
        (c === ")" && item === "(")
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
