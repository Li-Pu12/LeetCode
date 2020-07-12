/**
 * @param {number[][]} dungeon
 * @return {number}
 * time: 88ms space: 37.3MB
 */
var calculateMinimumHP = function (dungeon) {
    let rlen = dungeon.length;
    let clen = dungeon[0].length;
    let matrix = Array(rlen).fill(0).map(row => Array(clen).fill(0));
    for (let i = rlen - 1; i >= 0; i--){
        for (let j = clen - 1; j >= 0; j--){
            if (i === rlen - 1) {
                if (j === clen - 1) {
                    matrix[i][j] = Math.max(-dungeon[i][j], 0);
                }
                else {
                    matrix[i][j] = Math.max(matrix[i][j + 1] - dungeon[i][j], 0);
                }
            } else if (j === clen - 1) {
                matrix[i][j] =  Math.max(matrix[i + 1][j] - dungeon[i][j], 0);
            } else {
                matrix[i][j] = Math.max(Math.min(matrix[i][j + 1] - dungeon[i][j], matrix[i + 1][j] - dungeon[i][j]), 0)
            }
        }
    }
    return matrix[0][0] + 1;
};

