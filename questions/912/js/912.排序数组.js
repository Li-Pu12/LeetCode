/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 144ms space: 42.5MB
 */
var sortArray = function (nums) {
    // 希尔排序
    for (
        let gap = Math.floor(nums.length / 2);
        gap > 0;
        gap = Math.floor(gap / 2)
    ) {
        for (let i = gap; i < nums.length; i++) {
            let t = nums[i];
            let j = i;
            while (j - gap >= 0 && t < nums[j - gap]) {
                nums[j] = nums[j - gap];
                j -= gap;
            }
            nums[j] = t;
        }
    }
    return nums;
};