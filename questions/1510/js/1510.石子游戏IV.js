/**
 * @param {number} n
 * @return {boolean}
 * time: 132ms space: 40.1MB
 */
var winnerSquareGame = function (n) {
    let res = Array(n + 1).fill(false);
    for (let i = 0; i <= n; i++) {
        for (let j = 1, j2 = 1; j2 <= i; j++, j2 = j * j) {
            if (!res[i - j2]) {
                res[i] = true;
                break;
            }
        }
    }
    return res[n];
};
