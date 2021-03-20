/**
 * @param {number[]} cost
 * @return {number}
 * time: 92ms space: 39.5MB
 */
 var minCostClimbingStairs = function(cost) {
    cost.push(0);
    let mc = new Array(cost.length).fill(0);
    mc[0] = cost[0], mc[1] = cost[1];
    for(let i = 2;i< cost.length;i++){
        mc[i] = Math.min(mc[i-1], mc[i-2]) + cost[i];
    }
    return mc.pop();
};
