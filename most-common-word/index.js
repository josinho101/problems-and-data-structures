/**
 * Ref - https://leetcode.com/problems/most-common-word/
 * Given a string paragraph and a string array of the banned words banned,
 * return the most frequent word that is not banned. It is guaranteed there
 * is at least one word that is not banned, and that the answer is unique.
 *
 * The words in paragraph are case-insensitive and the answer should be
 * returned in lowercase.
 */

var mostCommonWord = function (paragraph, banned) {
  const map = {};
  let maxCount = 0;
  let maxItem = "";
  const bannedSet = new Set(banned);

  paragraph = paragraph.replace(/[!?',;.]/g, " ");
  paragraph = paragraph.toLowerCase();

  let split = paragraph.split(" ");

  for (let item of split) {
    if (item !== "" && !bannedSet.has(item)) {
      if (!map[item]) {
        map[item] = 0;
      }

      map[item]++;

      if (map[item] > maxCount) {
        maxCount = map[item];
        maxItem = item;
      }
    }
  }

  return maxItem;
};
