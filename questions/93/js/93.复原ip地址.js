/**
 * @param {string} s
 * @return {string[]}
 * time: 88ms space: 38.6MB
 */
var restoreIpAddresses = function (s) {
    let res = [];
    const split = (str, arr) => {
        if (arr.length === 3 && str.length > 0) {
            let num = parseInt(str);
            if (num > 255 || (str[0] == "0" && str.length > 1)) return;
            else {
                res.push([...arr, str].join("."));
            }
        } else {
            let index = 1;
            let sstr = str.substr(0, index);
            if (sstr == "0") return split(str.substr(index), [...arr, sstr]);
            while (parseInt(sstr) < 256 && index < str.length) {
                split(str.substr(index), [...arr, sstr]);
                sstr = str.substr(0, ++index);
            }
        }
    };
    split(s, []);
    return res;
};
