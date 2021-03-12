/**
 * @param {string} S
 * @return {string}
 * time: 112ms space: 44.6MB
 */
 var removeDuplicates = function (S) {
    let index = 0;
    let s = S.split("");
    while (index < s.length - 1) {
        if (s[index] === s[index + 1]) {
            s.splice(index, 2);
            if (index > 0) index--;
        } else {
            index++;
        }
    }
    return s.join("")
};
