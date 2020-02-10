/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) return false;
  let half = sum / 2;
  let arr = Array(half + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = half; j >= 0; j--) {
      if (j - nums[i] >= 0)
        arr[j] = Math.max(arr[j], arr[j - nums[i]] + nums[i]);
    }
  }
  return arr[half] == half;
};
