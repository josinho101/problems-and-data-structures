/**
 * Ref - https://leetcode.com/problems/search-suggestions-system/
 * Given an array of strings products and a string searchWord. We want to
 * design a system that suggests at most three product names from products
 * after each character of searchWord is typed. Suggested products should
 * have common prefix with the searchWord. If there are more than three
 * products with a common prefix return the three lexicographically minimums
 * products.
 *
 * Return list of lists of the suggested products after each character of
 * searchWord is typed.
 *
 * Eg - Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
 * Output: [
 * ["mobile","moneypot","monitor"],
 * ["mobile","moneypot","monitor"],
 * ["mouse","mousepad"],
 * ["mouse","mousepad"],
 * ["mouse","mousepad"]
 * ]
 */

var suggestedProducts = function (products, searchWord) {
  const result = [];

  products.sort();

  let candidates = [...products];

  for (let i = 0; i < searchWord.length; i++) {
    const newCandidates = [];

    for (let j = 0; j < candidates.length; j++) {
      if (searchWord[i] === candidates[j][i]) {
        newCandidates.push(candidates[j]);
      }
    }

    result.push(newCandidates.slice(0, 3));
    candidates = newCandidates;
  }

  return result;
};

module.exports = suggestedProducts;
