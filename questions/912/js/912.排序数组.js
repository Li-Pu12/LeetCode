/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 4432ms space: 42.5MB
 */
var sortArray = function (nums) {
    // 冒泡排序
    let flag;
    let t;
    for (let i = 0; i < nums.length; i++) {
        flag = false;
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] < nums[j - 1]) {
                t = nums[j - 1];
                nums[j - 1] = nums[j];
                nums[j] = t;
                flag = true;
            }
        }
        if (!flag) break;
    }
    return nums;
};