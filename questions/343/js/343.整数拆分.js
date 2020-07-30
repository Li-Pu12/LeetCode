/**
 * @param {number} n
 * @return {number}
 * time: 92ms space: 37.5MB
 */
var integerBreak = function (n) {
    let res = Array(n + 1).fill(0);
    res[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            res[i] = Math.max(res[i], j * Math.max(i - j, res[i - j]));
        }
    }
    return res[n];
};
