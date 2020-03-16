/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let match = " " + first + " " + second + " ";
    let res = [],
        index = -1;
    text = " " + text + " ";
    while ((index = text.indexOf(match)) !== -1) {
        let t = text.substr(index + match.length);
        let i = t.indexOf(" ");
        if (i > 0) res.push(t.substr(0, i));
        text = text.substr(index + first.length);
    }
    return res;
};
