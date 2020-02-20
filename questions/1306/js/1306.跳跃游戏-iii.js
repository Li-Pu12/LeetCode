/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * time: 92ms space: 39.7MB
 */
var canReach = function(arr, start) {
    let n = arr.length;
    let flag = Array(n).fill(false);
    const jump = index => {
        if (flag[index]) return false;
        else if (arr[index] === 0) return true;
        else {
            flag[index] = true;
            let result =
                (index + arr[index]  < n && jump(index + arr[index])) ||
                (index - arr[index] >= 0 && jump(index - arr[index]));
            flag[index] = false;
            return result;
        }
    };
    return jump(start);
};
