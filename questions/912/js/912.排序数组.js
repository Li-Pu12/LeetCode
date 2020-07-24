/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 1168ms space: 42.3MB
 */
var sortArray = function (nums) {
    // 选择排序
    let t;
    for (let i = 0; i < nums.length; i++) {
        t = nums.length - 1;
        for (let j = nums.length - 2; j > i; j--) {
            if (nums[j] < nums[t]) {
                t = j;
            }
        }
        if (nums[i] < nums[t]) {
            i++;
        }
        if (nums[t] < nums[i]) {
            let tt = nums[t];
            nums[t] = nums[i];
            nums[i] = tt;
        }
    }
    return nums;
};