/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * time: 136ms space:43.7MB
 */
var findRestaurant = function (list1, list2) {
    let sum = list1.length + list2.length;
    for (let i = 0; i < sum; i++) {
        let r = [];
        for (let j = 0; j < list1.length && j <= i; j++) {
            if (list1[j] == list2[i - j]) {
                r.push(list1[j]);
            }
        }
        if (r.length) {
            return r;
        }
    }
    return [];
};