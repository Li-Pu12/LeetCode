/**
 * @param {string} s
 * @return {number}
 * time: 72ms space: 35.7MB
 */
// 动态规划
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
/**
 * @param {string} s
 * @return {number}
 * time: 72ms space: 35.2MB
 */
// 空间为O(1)的反复双次遍历
var longestValidParentheses = function(s) {
    let max = (left = right = 0);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            left++;
        } else {
            right++;
            if (left === right) max = Math.max(max, right << 1);
            else if (right > left) left = right = 0;
        }
    }
    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ")") {
            right++;
        } else {
            left++;
            if (left === right) max = Math.max(max, left << 1);
            else if (right < left) left = right = 0;
        }
    }
    return max;
};
