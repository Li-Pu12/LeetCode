/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 1788ms space: 42.4MB
 */
var sortArray = function (nums) {
    // 插入排序
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                let t = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = t;
            } else {
                break;
            }
        }
    }
    return nums;
};