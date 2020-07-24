/**
 * @param {number} N
 * @return {boolean}
 * time: 88ms space: 38.5MB
 */
var divisorGame = function (N) {
    let res = Array(N + 1)
        .fill(false)
        .map(() => [1]);
    res[0] = res[1] = false;
    for (let i = 2; i <= N; i++) {
        let t = false;
        for (let j = 0; j < res[i].length; j++) {
            if (!res[i - res[i][j]]) {
                t = true;
                break;
            }
        }
        res[i] = t;
    }
    return res[N];
};
