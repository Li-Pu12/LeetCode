/**
 * @param {number[][]} edges
 * @return {number[]}
 * time: 100ms space: 41.6MB
 */
var findRedundantConnection = function(edges) {
    if (edges.length === 0) return [];
    let set = new Set();
    set.add(edges[0][0]);
    while (edges.length > 0) {
        let nedges = [];
        for (let i = 0; i < edges.length; i++) {
            let edge = edges[i];
            if (set.has(edge[0])) {
                if (set.has(edge[1])) {
                    return edge;
                } else {
                    set.add(edge[1]);
                    nedges.push(...edges.slice(i + 1));
                    break;
                }
            } else if (set.has(edge[1])) {
                set.add(edge[0]);
                nedges.push(...edges.slice(i + 1));
                break;
            } else {
                nedges.push(edge);
            }
        }
        edges = nedges;
    }
    return [];
};
