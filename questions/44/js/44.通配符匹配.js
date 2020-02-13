/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * time: 184ms space: 47.4MB
 */
var isMatch = function(s, p) {
    if (p.length === 0) return s.length === 0;
    if (p === "*") return true;
    let dp = Array(s.length + 1)
        .fill(0)
        .map(() => new Array(p.length + 1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === "*") dp[0][i] = dp[0][i - 1];
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === "*") {
                dp[i][j] = dp[i - 1][j - 1] || dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    return dp[s.length][p.length];
};
