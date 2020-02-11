/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * time: 96ms space: 36.6MB
 */
var coinChange = function(coins, amount) {
  let dp = Array(amount + 1).fill(-1);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      let old = dp[j],
        opt = dp[j - coins[i]];
      if (old === -1 && opt !== -1) dp[j] = opt + 1;
      else if (old !== -1 && opt !== -1 && opt + 1 < old) dp[j] = opt + 1;
    }
  }
  return dp[amount];
};
