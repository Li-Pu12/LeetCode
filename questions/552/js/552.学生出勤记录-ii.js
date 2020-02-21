/**
 * @param {number} n
 * @return {number}
 * time: 156ms space: 38.2MB
 */
var checkRecord = function(n) {
    if (n === 1) return 3;
    let [a00, a01, a02, a10, a11, a12] = [2, 1, 1, 3, 1, 0];
    let mod = 1000000007;
    for (let i = 3; i <= n; i++) {
        [a00, a01, a02, a10, a11, a12] = [
            (a00 + a01 + a02) % mod,
            a00,
            a01,
            (a00 + a01 + a02 + a10 + a11 + a12) % mod,
            a10,
            a11
        ];
    };
    return (a00 + a01 + a02 + a10 + a11 + a12) % mod;
};
