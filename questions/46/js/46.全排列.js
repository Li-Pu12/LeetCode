/**
 * @param {number[]} nums
 * @return {number[][]}
 * time: 88ms space:38.9MB
 */
var permute = function (nums) {
    let res = [];
    const genArray = function (rest, arr) {
        if (!rest.length) return res.push(arr);
        for (let i = 0; i < rest.length; i++) {
            let cl = [...rest];
            cl.splice(i, 1);
            genArray(cl, [...arr, rest[i]]);
        }
    };
    genArray(nums, []);
    return res;
};
