/**
 * @param {number[][]} edges
 * @return {number[]}
 * time: 80ms space: 35.9MB
 */
var findRedundantDirectedConnection = function(edges) {
    let n = edges.length;
    let indegrees = Array(n + 1).fill(0);
    let parents = Array(n + 1).fill(-1);
    let size = Array(n + 1).fill(1);
    edges.forEach(([start, end]) => indegrees[end]++);
    let endNode = null;
    indegrees.forEach((value, index) => {
        if (value === 2) endNode = index;
    });
    if (endNode) {
        let t = n;
        for (let i = 0; i < t; i++) {
            if (edges[i][1] === endNode) {
                edges.push(...edges.splice(i, 1));
                i--;
                t--;
            }
        }
    }
    const findRoot = index => {
        let i = index;
        while (parents[i] !== -1) i = parents[i];
        return i;
    };
    const union = (i, j) => {
        let a = findRoot(i),
            b = findRoot(j);
        if (a === b) return [i, j];
        else if (size[a] > size[b]) {
            parents[b] = a;
            size[a] += size[b];
        } else {
            parents[a] = b;
            size[b] += size[a];
        }
    };
    for (let [start, end] of edges) {
        let t = union(start, end);
        if (t) return t;
    }
    return edges[n - 1];
};
