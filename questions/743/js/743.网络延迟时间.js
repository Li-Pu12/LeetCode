/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 * time: 92ms space: 40.4MB
 */
var networkDelayTime = function(times, N, K) {
    let matrix = Array(N + 1)
        .fill(0)
        .map(() => Array(N + 1).fill(-1));
    for (const t of times) {
        matrix[t[0]][t[1]] = t[2];
    }
    let queue = [K],
        dis = Array(N + 1).fill(-1);
    dis[0] = 0;
    dis[K] = 0;
    while (queue.length !== 0) {
        let front = queue.shift();
        for (let i = 1; i <= N; i++) {
            if (
                matrix[front][i] !== -1 &&
                (dis[i] === -1 || dis[front] + matrix[front][i] < dis[i])
            ) {
                dis[i] = dis[front] + matrix[front][i];
                queue.push(i);
            }
        }
    }
    let res = dis[0];
    for (let d of dis) {
        if (d === -1) return -1;
        else if (d > res) res = d;
    }
    return res;
};
