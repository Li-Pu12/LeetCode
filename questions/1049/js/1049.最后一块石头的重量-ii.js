/**
 * @param {number[]} stones
 * @return {number}
 * time: 53ms space: 34.3MB
 */
var lastStoneWeightII = function(stones) {
  let sum = stones.reduce((a, b) => a + b);
  let half = Math.floor(sum / 2);
  let dp = Array(half + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = half; j >= 0; j--) {
      if (j >= stones[i]) {
        dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
      }
    }
  }
  return (sum - dp[half] * 2);
};
