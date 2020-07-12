function bubleSort(
    arr,
    compare = function (a, b) {
        return a - b;
    },
    isClone = false
) {
    let res = isClone ? Array.from(arr) : arr;
    for (let i = res.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (compare(res[j], res[j + 1]) > 0) {
                let tmp = res[j];
                res[j] = res[j + 1];
                res[j + 1] = tmp;
            }
        }
    }
    return res;
}

export default bubleSort;
