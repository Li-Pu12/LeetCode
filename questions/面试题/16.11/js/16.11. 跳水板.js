/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 * time: 144ms space: 49.6MB
 */
var divingBoard = function (shorter, longer, k) {
    return k === 0
        ? []
        : shorter === longer
        ? [shorter * k]
        : [
              ...new Array(k + 1)
                  .fill(0)
                  .map((v, index) => (k - index) * shorter + longer * index),
          ];
};
