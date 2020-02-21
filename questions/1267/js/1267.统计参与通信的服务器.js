/**
 * @param {number[][]} grid
 * @return {number}
 * time: 112ms space:39.3MB
 */
var countServers = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let row = Array(m).fill(0);
    let column = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            row[i] += grid[i][j];
            column[j] += grid[i][j];
        }
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && (row[i] > 1 || column[j] > 1)) res++;
        }
    }
    return res;
};
