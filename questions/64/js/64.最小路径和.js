/**
 * @param {number[][]} grid
 * @return {number}
 * time: 80ms space: 35.3MB
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 1; i < m + n; i++) {
        if (i < n) grid[0][i] += grid[0][i - 1];
        if (i < m) grid[i][0] += grid[i - 1][0];
        for (let j = Math.max(1, i - n + 1); j < i && j < m; j++) {
            grid[j][i - j] += Math.min(grid[j - 1][i - j], grid[j][i - j - 1]);
        }
    }
    return grid[m - 1][n - 1];
};
