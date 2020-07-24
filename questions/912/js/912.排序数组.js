/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 4488ms space: 42.4MB
 */
var sortArray = function (nums) {
    // 冒泡排序
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] < nums[j - 1]) {
                let t = nums[j - 1];
                nums[j - 1] = nums[j];
                nums[j] = t;
            }
        }
    }
    return nums;
};