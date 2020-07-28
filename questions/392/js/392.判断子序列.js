/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * time: 120ms space: 37.7MB
 */
var isSubsequence = function (s, t) {
    let si = 0,
        ti = 0;
    while (si < s.length && ti < t.length) {
        if (s[si] === t[ti]) {
            si++;
        }
        ti++;
    }
    return si === s.length;
};
