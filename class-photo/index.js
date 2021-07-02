/**
 * Ref - https://www.algoexpert.io/questions/Class%20Photos
 */

function classPhotos(redShirtHeights, blueShirtHeights) {
  const colors = { RED: 1, BLUE: 2 };
  const max = redShirtHeights.length - 1;

  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const firstRow =
    blueShirtHeights[max] > redShirtHeights[max] ? colors.BLUE : colors.RED;
  for (let i = 0; i <= max; i++) {
    if (firstRow === colors.BLUE) {
      if (blueShirtHeights[i] <= redShirtHeights[i]) {
        return false;
      }
    } else {
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return false;
      }
    }
  }

  return true;
}
