/**
 * @param {string} s
 * @return {number}
 * time: 72ms space: 35.7MB
 */
var longestValidParentheses = function(s) {
    let dp = Array(s.length).fill(0);
    let maxns = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ")") {
            if (s[i - 1] === "(") {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            }else if(i>dp[i-1] && s[i - dp[i-1] -1] === '('){
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
        }
        if(dp[i] > maxns) maxns = dp[i];
    }
    return maxns;
};
