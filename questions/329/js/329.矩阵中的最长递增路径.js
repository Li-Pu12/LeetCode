/**
 * @param {number[][]} matrix
 * @return {number}
 * time: 112ms space: 41.5MB
 */
var longestIncreasingPath = function (matrix) {
    if (matrix.length <= 0) return 0;
    let map = Array(matrix.length)
        .fill(0)
        .map(() => Array(matrix[0].length).fill(0));
    let max = 0;
    const search = (rowIndex, columnIndex) => {
        if (map[rowIndex][columnIndex] !== 0) return map[rowIndex][columnIndex];
        map[rowIndex][columnIndex] = 1;
        if (
            rowIndex > 0 &&
            matrix[rowIndex - 1][columnIndex] > matrix[rowIndex][columnIndex] &&
            search(rowIndex - 1, columnIndex) >= map[rowIndex][columnIndex]
        ) {
            map[rowIndex][columnIndex] = map[rowIndex - 1][columnIndex] + 1;
        }
        if (
            columnIndex > 0 &&
            matrix[rowIndex][columnIndex - 1] > matrix[rowIndex][columnIndex] &&
            search(rowIndex, columnIndex - 1) >= map[rowIndex][columnIndex]
        ) {
            map[rowIndex][columnIndex] = map[rowIndex][columnIndex - 1] + 1;
        }
        if (
            rowIndex < matrix.length - 1 &&
            matrix[rowIndex + 1][columnIndex] > matrix[rowIndex][columnIndex] &&
            search(rowIndex + 1,columnIndex) >= map[rowIndex][columnIndex]
        ) {
            map[rowIndex][columnIndex] = map[rowIndex + 1][columnIndex] + 1;
        }
        if (
            columnIndex < matrix[rowIndex].length - 1 &&
            matrix[rowIndex][columnIndex + 1] > matrix[rowIndex][columnIndex] &&
            search(rowIndex, columnIndex + 1) >= map[rowIndex][columnIndex]
        ) {
            map[rowIndex][columnIndex] = map[rowIndex][columnIndex + 1] + 1;
        }
        return map[rowIndex][columnIndex];
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            max = Math.max(max, search(i, j));
        }
    }
    return max;
};