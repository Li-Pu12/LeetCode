/**
 * @param {number[][]} graph
 * @return {boolean}
 * time: 76ms space: 36.8MB
 */
var isBipartite = function(graph) {
    let n = graph.length;
    let flag = Array(n).fill(-1);
    const color = (index, tag) => {
        if (flag[index] === tag) return true;
        else if (flag[index] !== -1) return false;
        else flag[index] = tag;
        let ttag = 1 - tag;
        for (const v of graph[index]) {
            if (!color(v, ttag)) return false;
        }
        return true;
    };
    for (let i = 0; i < graph.length; i++) {
        if (graph[i].length > 0 && flag[i] === -1 && !color(i, 0)) return false;
    }
    return true;
};
