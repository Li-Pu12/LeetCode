function shellSort(
    arr,
    compare = function (a, b) {
        return a - b;
    },
    isClone = false
) {
    let res = isClone ? Array.from(arr) : arr;

    for (let gap = Math.floor(res.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < res.length; i++){
            let j = i;
            let current = res[i];
            while (j - gap >= 0 && compare(current, res[j - gap]) < 0) {
                res[j] = res[j - gap];
                j = j - gap;
            }
            res[j] = current;
        }
    }
    return res;
}

export default shellSort;