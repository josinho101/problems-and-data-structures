/**
 * Ref - https://www.algoexpert.io/questions/Tandem%20Bicycle
 */

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let sum = 0;
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  return sum;
}
