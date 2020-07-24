/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 100ms space: 42.9MB
 */
var sortArray = function (nums) {
    // 快速排序
    const quickSort = (start, end) => {
        if (start >= end) return;
        let t = nums[start];
        let l = start,
            r = end;
        while (l < r) {
            while (l < r && nums[r] > t) {
                r--;
            }
            if (l < r) {
                nums[l] = nums[r];
                l++;
            }
            while (l < r && nums[l] < t) {
                l++;
            }
            if (l < r) {
                nums[r] = nums[l];
                r--;
            }
        }
        nums[l] = t;
        quickSort(start, l - 1);
        quickSort(l + 1, end);
    };
    quickSort(0, nums.length - 1);
    return nums;
};