/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * time: 64ms space: 33.9MB
 */
var uniquePaths = function(m, n) {
    let dp = Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n];
};
