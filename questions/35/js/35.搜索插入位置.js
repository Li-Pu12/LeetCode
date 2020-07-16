/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * time: 68ms space: 37.7MB
 */
var searchInsert = function (nums, target) {
    let i;
    for (i = 0; i < nums.length; i++){
        if (nums[i] >= target) {
            return i;
        }
    }
    return i;
};

