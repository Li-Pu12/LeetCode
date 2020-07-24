/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * time: 80ms space: 37.9MB
 */
var getPermutation = function(n, k) {
    let p = Array(n + 1).fill(1);
    let m = Array(n).fill(0);
    for (let i = 1; i <= n; i++){
        p[i] = p[i - 1] * i;
        m[i - 1] = '' + i; 
    }
    let res = '';
    k--;
    for (let i = n - 1; i >= 0; i--){
        let t = Math.floor(k / p[i]);
        k = k % p[i];
        res += m.splice(t, 1);
    }
    return res;
};

