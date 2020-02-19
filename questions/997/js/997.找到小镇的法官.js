/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 * time: 112ms space: 43.9MB
 */
var findJudge = function(N, trust) {
    let idg = Array(N + 1).fill(0);
    let odg = Array(N + 1).fill(0);
    for (const t of trust) {
        idg[t[1]]++;
        odg[t[0]]++;
    }
    for (let i = 1; i <= N; i++) {
        if (idg[i] === N - 1 && odg[i] === 0) return i;
    }
    return -1;
};
