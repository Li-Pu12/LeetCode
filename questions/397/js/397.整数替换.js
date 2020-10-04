/**
 * @param {number} n
 * @return {number}
 * time: 88ms space: 37.4MB
 */
var integerReplacement = function (n) {
    if (n === 1) return 0;
    else if (n % 2) {
        return  1 + Math.min(integerReplacement(n - 1), integerReplacement(n + 1));
    } else {
        return 1 + integerReplacement(n / 2);
    }
};
