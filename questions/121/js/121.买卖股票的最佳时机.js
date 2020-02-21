/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    if (n.length <= 1) return 0;
    let min = prices[0],
        max = 0;
    for (let i = 1; i < n; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return max;
};
