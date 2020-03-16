/**
 * @param {number[]} nums
 * @return {number}
 * time: 124ms space: 36.8MB
 */
var removeDuplicates = function(nums) {
    let s, t;
    s = 0;
    t = 1;
    while (t < nums.length) {
        if (nums[t] !== nums[s]) {
            nums[++s] = nums[t];
        }
        t++;
    }
    return s + 1;
};
