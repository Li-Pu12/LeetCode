/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * time: 64ms space: 35MB
 */
var change = function(amount, coins) {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }
    return dp[amount];
};