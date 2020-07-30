/**
 * @param {number} n
 * @return {number}
 * time: 80ms space: 37.6MB
 */
var integerBreak = function (n) {
    let res = Array(n + 1).fill(0);
    res[1] = 1;
    for (let i = 2; i <= n; i++) {
        let t = 0;
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            let k = j * res[i - j];
            if (k > t) t = k;
        }
        res[i] = i !== n && i > t ? i : t;
    }
    return res[n];
};
