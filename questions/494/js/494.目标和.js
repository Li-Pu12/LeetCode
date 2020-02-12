/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * time: 68ms space: 34.6MB
 */
var findTargetSumWays = function(nums, S) {
    let sum = nums.reduce((a, b) => a + b);
    if (sum < S || (sum + S) % 2 === 1) return 0;
    let target = (sum + S) / 2;
    let dp = Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[target];
};