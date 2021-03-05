/**
 * @param {number} n
 * @return {number}
 * time: 96ms space: 37.6MB
 */
var tribonacci = function(n) {
    let t = [0, 1, 1];
    while(n > 2){
        t = [t[1], t[2], t[0] + t[1] + t[2]];
        n--;
    }
    return t[n];
};
