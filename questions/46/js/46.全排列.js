/**
 * @param {number[]} nums
 * @return {number[][]}
 * time: 108ms 39.2MB
 */
var permute = function(nums) {
    let len = nums.length;
    let isToken = Array(len).fill(false);
    let res = [];
    const genArray = function (index, arr) {
        let i = 0;
        while (i !== len) {
            if (isToken[i] === false) {
                isToken[i] = true;
                if (index + 1 === len) {
                    res.push([...arr, nums[i]]);
                    isToken[i] = false;
                    break;
                }else {
                    genArray(index + 1, [...arr, nums[i]]);
                    isToken[i] = false;
                }
            }
            i++;
        }
    }

    genArray(0, []);

    return res;
};
