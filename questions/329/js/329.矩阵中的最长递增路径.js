/**
 * @param {number[][]} matrix
 * @return {number}
 * time: 244ms space: 40.5MB
 */
var longestIncreasingPath = function (matrix) {
    if (matrix.length <= 0) return 0;
    let map = Array(matrix.length)
        .fill(0)
        .map(() => Array(matrix[0].length).fill(0));
    let max = 0, count = 0;
    while (max >= count) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (
                    i > 0 &&
                    matrix[i - 1][j] > matrix[i][j] &&
                    map[i - 1][j] >= map[i][j]
                ) {
                    map[i][j] = map[i - 1][j] + 1;
                }
                if (
                    j > 0 &&
                    matrix[i][j - 1] > matrix[i][j] &&
                    map[i][j - 1] >= map[i][j]
                ) {
                    map[i][j] = map[i][j - 1] + 1;
                }
                if (
                    i < matrix.length - 1 &&
                    matrix[i + 1][j] > matrix[i][j] &&
                    map[i + 1][j] >= map[i][j]
                ) {
                    map[i][j] = map[i + 1][j] + 1;
                }
                if (
                    j < matrix[i].length - 1 &&
                    matrix[i][j + 1] > matrix[i][j] &&
                    map[i][j + 1] >= map[i][j]
                ) {
                    map[i][j] = map[i][j + 1] + 1;
                }
                if (map[i][j] > max) max = map[i][j];
            }
        }
        count++;
    }
    return max + 1;
};
