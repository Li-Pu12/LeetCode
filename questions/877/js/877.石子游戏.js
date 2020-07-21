/**
 * @param {number[]} piles
 * @return {boolean}
 * time: 124ms space: 44.2MB
 */
var stoneGame = function (piles) {
    let len = piles.length;
    let res = Array(len)
        .fill(0)
        .map((value, index) => [piles[index], 0]);
    let wl = 1;
    while (wl < len) {
        for (let i = 0; i < len - wl; i++) {
            let t1 = res[i][1] + piles[i + wl];
            let t2 = piles[i] + res[i + 1][1];
            if (t1 > t2) {
                res[i] = [t1, res[i][0]];
            } else {
                res[i] = [t2, res[i + 1][0]];
            }
        }
        wl++;
    }
    return res[0][0] > res[0][1];
};
