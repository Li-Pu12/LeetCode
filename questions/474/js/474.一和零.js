/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 * time: 136ms space: 36.3MB
 */
var findMaxForm = function(strs, m, n) {
    let dp = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let zeros = 0,
            ones = 0;
        for (const c of str) c == "0" ? zeros++ : ones++;
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
            }
        }
    }
    return dp[m][n];
};
