/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * time: 60ms space: 35.4MB
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    let dp = Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[j] = obstacleGrid[i][j - 1] === 1 ? 0 : dp[j] + dp[j - 1];
        }
    }
    return dp[n];
};
