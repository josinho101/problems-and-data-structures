/**
 * ref: https://www.algoexpert.io/questions/Minimum%20Waiting%20Time
 */

function minimumWaitingTime(queries) {
  let total = 0;

  queries.sort((a, b) => a - b);

  for (let i = 0; i < queries.length - 1; i++) {
    total += queries[i] * (queries.length - (i + 1));
  }

  return total;
}
