/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * time: 64ms space: 36.1MB
 */
var wordBreak = function(s, wordDict) {
    let len = s.length;
    let dp = Array(len + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= len; i++) {
        for (const word of wordDict) {
            let w = word.length;
            if (i >= w && word === s.substr(i - w, w)) {
                dp[i] = dp[i] || dp[i - w];
            }
        }
    }
    return dp[len];
};
