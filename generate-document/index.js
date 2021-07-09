/**
 * Ref - https://www.algoexpert.io/questions/Generate%20Document
 *
 * Eg - Input - "Bste!hetsi ogEAxpelrt x", Output - AlgoExpert is the Best!
 */

function generateDocument(characters, document) {
  let map = {};

  for (let c of characters) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }

  for (let c of document) {
    if (!map[c]) {
      return false;
    }
    map[c]--;
  }
  return true;
}
