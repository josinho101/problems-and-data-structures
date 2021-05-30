/**
 * You are given an array prices where prices[i] is the price of a given stock
 * on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot
 * achieve any profit, return 0.
 */

var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }

  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      const max = prices[i] - min;
      if (max > profit) {
        profit = max;
      }
    }
  }

  return profit;
};

module.exports = maxProfit;
