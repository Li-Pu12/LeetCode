/**
 * @param {string} s
 * @return {boolean}
 * time: 84ms space: 41.6MB
 */
var validPalindrome = function (s) {
    const test = (str, start, end) => {
        while (start < end) {
            if (str[start++] != str[end--]) return false;
        }
        return true;
    };
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return test(s, i + 1, j) || test(s, i, j - 1);
        }
    }
    return true;
};