/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * time: 64ms space: 36.9MB
 */
var reverseStr = function(s, k) {
    const reverse = (start, end) => {
        if (start >= end) return;
        let rs = "";
        if (start > 0) rs += s.substring(0, start);
        rs += s
            .substring(start, end)
            .split("")
            .reverse()
            .join("");
        if (end < s.length) rs += s.substring(end);
        s = rs;
    };
    let kk = k << 1;
    let i = 0;
    for (; i < Math.floor(s.length / kk) * kk; i += kk) {
        reverse(i, i + k);
    }
    reverse(i, Math.min(s.length, i + k));
    return s;
};
