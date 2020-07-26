/**
 * @param {number[][]} matrix
 * @return {number}
 * time: 284ms space: 44.6MB
 */
var longestIncreasingPath = function (matrix) {
    if (matrix.length <= 0) return 0;
    let queue = Array(matrix.length)
        .fill(0)
        .map(() => new Set());
    let count = 0;
    matrix.forEach((row, rowIndex) => {
        row.forEach((value, columnIndex) => {
            if (
                rowIndex > 0 &&
                matrix[rowIndex - 1][columnIndex] >
                    matrix[rowIndex][columnIndex]
            )
                return;
            if (
                columnIndex > 0 &&
                matrix[rowIndex][columnIndex - 1] >
                    matrix[rowIndex][columnIndex]
            )
                return;
            if (
                rowIndex < matrix.length - 1 &&
                matrix[rowIndex + 1][columnIndex] >
                    matrix[rowIndex][columnIndex]
            )
                return;
            if (
                columnIndex < matrix[rowIndex].length - 1 &&
                matrix[rowIndex][columnIndex + 1] >
                    matrix[rowIndex][columnIndex]
            )
                return;
            queue[rowIndex].add(columnIndex);
            count++;
        });
    });
    let max = 0;
    let tq = Array(matrix.length)
        .fill(0)
        .map(() => new Set());
    while (count !== 0) {
        count = 0;
        queue.forEach((sets, rowIndex) =>
            sets.forEach((columnIndex) => {
                if (
                    rowIndex > 0 &&
                    matrix[rowIndex - 1][columnIndex] <
                    matrix[rowIndex][columnIndex]
                ) {
                    tq[rowIndex - 1].add(columnIndex);
                    count++;
                }
                if (
                    columnIndex > 0 &&
                    matrix[rowIndex][columnIndex - 1] <
                    matrix[rowIndex][columnIndex]
                ) {
                    tq[rowIndex].add(columnIndex - 1);
                    count++;
                }
                if (
                    rowIndex < matrix.length - 1 &&
                    matrix[rowIndex + 1][columnIndex] <
                    matrix[rowIndex][columnIndex]
                ) {
                    tq[rowIndex + 1].add(columnIndex);
                    count++;
                }
                if (
                    columnIndex < matrix[rowIndex].length - 1 &&
                    matrix[rowIndex][columnIndex + 1] <
                    matrix[rowIndex][columnIndex]
                ) {
                    tq[rowIndex].add(columnIndex + 1);
                    count++;
                }
            })
        );
        queue.map(set => set.clear());
        let t = queue;
        queue = tq;
        tq = t;
        max++;
    }
    return max;
};