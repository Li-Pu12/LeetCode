/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 * time: 128ms space: 37.6MB
 */
var groupThePeople = function(groupSizes) {
    let res = {};
    groupSizes.forEach((value, index) => {
        if (!res[value]) res[value] = [];
        let t = res[value].length - 1;
        if (t === -1 || res[value][t].length === value) res[value].push([index]);
        else res[value][t].push(index);
    });
    let result = [];
    for (let key of Object.keys(res)) {
        result.push(...res[key]);
    }
    return result;
};
