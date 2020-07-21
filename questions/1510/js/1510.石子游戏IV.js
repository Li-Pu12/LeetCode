/**
 * @param {number} n
 * @return {boolean}
 * time: 140ms space: 40MB
 */
var winnerSquareGame = function (n) {
    let res = Array(n + 1).fill(false);
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            if (!res[i - j * j]) {
                res[i] = true;
                break;
            }
        }
    }
    return res[n];
};
